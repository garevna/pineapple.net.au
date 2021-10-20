<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="1200"
    :fullscreen="viewportWidth < 420"
    class="mx-0 mx-sm-2 mx-md-4 mx-lg-6"
    persistent
  >
    <v-card class="homefone">
      <v-bottom-navigation
        absolute
        dark
        class="primary"
        horizontal
        hide-on-scroll
        scroll-target="#scroll-threshold"
        scroll-threshold="500"
      >
        <v-btn
          v-if="back"
          class="transparent"
          @click="step--"
        >
          <v-icon large class="mx-4">mdi-page-previous-outline</v-icon>
          {{ viewportWidth >= 600 ? 'Back' : '' }}
        </v-btn>

        <v-btn
          v-if="forward"
          text
          class="transparent"
          @click="step++"
        >
          {{ viewportWidth >= 600 ? 'Continue' : '' }}
          <v-icon large class="mx-4">mdi-page-next-outline</v-icon>
        </v-btn>

        <v-btn
          v-if="step === 3 && subscription"
          text
          class="transparent"
          @click="subscribe"
        >
          {{ viewportWidth >= 600 ? 'Subscribe' : '' }}
          <v-icon large class="ml-5">mdi-page-next-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-sheet
        id="scroll-threshold"
        class="transparent overflow-y-auto pb-16"
      >
        <v-row align="start" justify="end">
          <v-btn
            text
            class="transparent mt-1"
            color="#777"
            @click="$emit('update:dialog', false)"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-row align="center" justify="center">
          <v-stepper
            v-model="step"
            class="package-stepper transparent mx-0 px-0 px-md-2 px-lg-4"
            style="width:100%!important; box-shadow: none!important"
          >
            <v-stepper-items>
              <v-stepper-content step="1" class="mx-0 mx-sm-2 mx-md-4 mx-lg-6">
                <CheckAvailability :open.sync="check" />
                <!-- <v-card flat class="transparent mt-10 mb-4">
                  <v-row justify="end">
                  </v-row>
                </v-card> -->
              </v-stepper-content>

              <v-stepper-content step="2" class="mx-0 mx-sm-2 mx-md-4 mx-lg-6">
                <v-row justify="center" class="homefone" v-if="viewportWidth > widthLimit">
                  <PackageCard
                    v-for="(item, index) in packages"
                    :key="index"
                    :index="index"
                    :selected.sync="packageSelectedIndex"
                    @click="choosePackage(index)"
                    :class="{ 'package-card-with-border': packageSelectedIndex === index }"
                    width="360"
                  />
                </v-row>
                <v-row justify="center" v-else>
                  <PackageStepper :selected.sync="packageSelectedIndex" />
                </v-row>
              </v-stepper-content>

              <v-stepper-content step="3" class="mx-0 mx-sm-2 mx-md-4 mx-lg-6">
                <v-card
                  flat
                  class="transparent ma-auto"
                  min-width="320"
                  max-width="480"
                >
                  <p
                    v-for="(phrase, order) in confirmation"
                    :key="order"
                    v-html="phrase"
                    style="line-height: 150%"
                  />
                  <br>
                  <v-checkbox v-model="agree" label="I agree" class="ml-4" />
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-row>
        <!-- <v-responsive height="1500"></v-responsive> -->
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

import PackageCard from '@/components/plans/PackageCard.vue'
import PackageStepper from '@/components/plans/PackageStepper.vue'

export default {
  name: 'Subscription',
  components: {
    PackageCard,
    PackageStepper
  },

  props: {
    dialog: Boolean
  },

  data: () => ({
    widthLimit: 1055,
    step: 1,
    card: 1,
    stepName: [
      'Check Address',
      'Choose your package',
      'Confirmation'
    ],
    packageSelected: false,
    packageSelectedIndex: undefined,
    check: true,
    link: null,
    confirmation: {},
    agree: false
  }),

  computed: {
    ...mapState(['viewportWidth']),
    ...mapGetters('clientInfo', ['address', 'addressAvailable']),
    ...mapState('internetPlans', {
      source: 'packages'
    }),
    ...mapGetters('internetPlans', {
      getLink: 'link',
      plan: 'planName',
      tariff: 'tariff'
    }),
    packages () {
      return this.source[this.plan]
    },
    subscription () {
      return this.addressAvailable && this.packageSelected && this.agree
    },
    back () {
      return this.step > 1
    },
    forward () {
      return this.step === 1 ? this.addressAvailable : this.step === 2 ? this.packageSelected : false
    }
  },

  watch: {
    dialog (val) {
      this.setCheckAddressPopup(val)
    },
    packageSelectedIndex (val) {
      if (typeof val === 'number') this.choosePackage(val)
    }
  },

  methods: {
    ...mapMutations({
      setCheckAddressPopup: 'SET_CHECK_ADDRESS_POPUP'
    }),
    choosePackage (index) {
      this.packageSelected = true
      this.packageSelectedIndex = index
      this.confirmation = Object.assign({}, this.packages[index].confirmation)
      this.confirmation[0] = `${this.confirmation[0]}<br><b>${this.address}</b>`
      this.link = this.getLink(index)
    },
    subscribe () {
      this.$openExternalLink(this.link)
      this.agree = false
      this.packageSelected = false
      this.packageSelectedIndex = undefined
      this.step = 1
      this.$emit('update:dialog', false)
    }
  }
}
</script>

<style>
.v-stepper__wrapper {
  overflow: visible !important;
}
p {
  overflow-wrap: break-word;
  padding: 8px 16px;
}
@media screen and (max-width: 420px) {
  .package-stepper {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
