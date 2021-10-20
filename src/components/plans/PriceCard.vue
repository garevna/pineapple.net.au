<template>
  <v-card
      class="mx-2 my-4 px-2 py-4"
      width="280"
      :height="viewportWidth < 600 ? 380 : viewportWidth < 960 ? 420 : 460"
      :class="{ 'price-card-with-border': item.selected, 'price-card': true }"
      @click="$emit('update:selected', index)"
  >
    <v-img src="@/assets/price-card-image.png" class="price-card-image"></v-img>

    <v-card-text class="mt-2 mt-sm-0" align="center" style="position: relative; z-index: 1">
      <h5 class="mb-4">{{ item.name }}</h5>
      <h1 class="price"><sup>$</sup>{{ item.price }}<span class="mo">/mo</span></h1>
      <br />
      <p>{{ item.download }} Mbps Download</p>
      <p>{{ item.upload }} Mbps Upload</p>
      <p>Unlimited Data</p>
    </v-card-text>

    <v-card-actions class="text-center mt-0 pt-0 mb-10 mb-md-12">
      <v-btn
        color="buttons"
        dark
        rounded
        width="160"
        height="40"
        class="px-auto mx-auto"
        @click="clickHandler"
      >
        Subscribe
      </v-btn>
    </v-card-actions>
    <Subscription :dialog.sync="subscript" />
  </v-card>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'PriceCard',
  props: ['item', 'index', 'selected'],
  data: () => ({
    subscript: false
  }),
  computed: {
    ...mapState(['viewportWidth', 'checkAddressPopup']),
    ...mapState('clientInfo', ['personalInfo']),
    ...mapGetters('internetPlans', ['tariff', 'link']),
    active () {
      return this.selected === this.index
    },
    address () {
      return this.personalInfo.address
    },
    available () {
      return this.personalInfo.addressAvailable
    }
  },
  methods: {
    ...mapMutations({
      setCheckAddressPopup: 'SET_CHECK_ADDRESS_POPUP'
    }),
    clickHandler () {
      this.setCheckAddressPopup(true)
      this.$emit('update:selected', this.index)
      this.subscript = true
    }
  }
}
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
    padding: 4px 0;
}
a {
  text-decoration: none;
}

.price-card-with-border {
  box-sizing: border-box;
  border-style: solid;
  border-radius: 16px!important;
  transition: all 0.8s;
  border-top: 4px solid #20731C!important;
  border-bottom: 4px solid #20731C90!important;
}

p, .question {
  font-size: 16px;
  line-height: 150%;
}

p {
  text-align: center;
  color: #000;
}
.question {
  font-weight: bold;
}

.price {
  color: #20731C;
}
.mo {
  font-weight: normal;
  font-size: 18px;
}
.price-card-image {
  width: 172px;
  height: 157px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
}

@media screen and (max-width: 959px) {
  p, .question {
    font-size: 13px;
    line-height: 100%;
  }
}

</style>
