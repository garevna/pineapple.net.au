<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="1200"
        hieght="80%"
      >
        <v-card>
          <v-toolbar
            color="primary"
            dark
            class="text-right mb-12"
            style="padding: 0!important"
          >
            <h4 class="ml-8" style="color: #fff">{{ stepName[step - 1] }}</h4>
            <v-spacer />
            <v-btn
              text
              class="transparent"
              @click="$emit('update:dialog', false)"
            >
              <v-icon large>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-row justify="center">
            <v-stepper v-model="step" style="width:100%!important; box-shadow: none!important">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <CheckAvailability
                    :popup="true"
                    :open.sync="check"
                  />
                  <v-card flat class="transparent mt-10 mb-4">
                    <v-row justify="end">
                      <v-btn
                        v-if="addressAvailable"
                        dark
                        rounded
                        color="buttons"
                        class="px-10 py-5 mr-12"
                        @click="step = 2"
                      >
                        Continue
                        <v-icon large class="ml-5">mdi-page-next-outline</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-row justify="center" align-content="space-between">
                    <v-card
                      v-for="(item, index) in packages"
                      :key="index"
                      @click="choosePackage(index)"
                      class="transparent pa-12"
                      :class="{ 'package-card-with-border': packageSelectedIndex === index }"
                      width="360"
                    >
                      <v-row justify="center" align-content="space-between">
                        <v-card
                          flat
                          class="transparent text-center"
                          height="320"
                        >
                          <h4>{{ item.title }}</h4>
                          <p>
                            <small>{{ item.subtitle }}</small>
                          </p>
                          <p v-for="(text, num) in item.text" :key="num">
                            {{ text }}
                          </p>
                          <br>
                          <p>{{ item.priceText }}</p>
                          <p>${{ item.price }}</p>
                        </v-card>
                        <v-card flat class="transparent" justify-center>
                          <v-btn
                            v-if="packageSelectedIndex !== index"
                            color="buttons"
                            dark
                            rounded
                            outlined
                            width="180"
                            height="40"
                            class="mx-auto mt-12 mb-3"
                            @click="choosePackage(index)"
                          >
                            Choose package
                          </v-btn>
                        </v-card>
                      </v-row>
                    </v-card>
                  </v-row>
                  <v-card flat class="transparent mt-10 mb-4">
                    <v-row justify="space-between">
                      <v-btn
                        text
                        rounded
                        color="#777"
                        class="px-10 py-5 ml-5"
                        @click="step = 1"
                      >
                        <v-icon large class="mr-4">mdi-page-previous-outline</v-icon>
                        Back
                      </v-btn>
                      <v-btn
                        v-if="addressAvailable && packageSelected"
                        dark
                        rounded
                        color="buttons"
                        class="px-10 py-5 mr-12"
                        @click="step = 3"
                      >
                        Continue
                        <v-icon large class="ml-5">mdi-page-next-outline</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card
                    flat
                    class="transparent ma-auto"
                    min-width="320"
                    max-width="480"
                  >
                    <p v-for="(phrase, order) in confirmation" :key="order" v-html="phrase">
                      <!-- {{ phrase }} -->
                    </p>
                    <br>
                    <v-checkbox v-model="agree" label="I agree" />
                  </v-card>
                  <v-card flat class="transparent mt-10 mb-4">
                    <v-row justify="space-between">
                      <v-btn
                        text
                        rounded
                        color="#777"
                        class="px-10 py-5 ml-5"
                        @click="step = 2"
                      >
                        <v-icon large class="mr-4">mdi-page-previous-outline</v-icon>
                        Back
                      </v-btn>
                      <v-btn
                        v-if="subscription"
                        dark
                        rounded
                        color="buttons"
                        class="px-10 py-5 mr-12"
                        @click="subscribe"
                      >
                        Subscribe
                        <v-icon large class="ml-5">mdi-page-next-outline</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-row>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Subscription',
  props: {
    dialog: Boolean
  },
  data: () => ({
    step: 1,
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
    // ...mapState(['plan']),
    ...mapGetters('clientInfo', ['address', 'addressAvailable']),
    ...mapState('internetPlans', {
      source: 'packages'
    }),
    ...mapGetters('internetPlans', {
      getLink: 'link',
      plan: 'planName'
    }),
    packages () {
      return this.source[this.plan]
    },
    subscription () {
      return this.addressAvailable && this.packageSelected && this.agree
    }
  },
  methods: {
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

<style scoped>

.package-card-with-border {
  box-sizing: border-box;
  border-style: solid;
  border-radius: 16px!important;
  transition: all 0.8s;
  border-top: 4px solid #20731C!important;
  border-bottom: 4px solid #20731C90!important;
}
</style>
