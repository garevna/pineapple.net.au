<template>
  <v-card
      :class="{ 'price-card-with-border': item.selected, 'price-card': true }"
      @click="$emit('update:selected', index)"
  >
    <v-img src="@/assets/price-card-image.png" class="price-card-image"></v-img>

    <v-card-text class="mt-2 mt-sm-0" align="center" style="position: relative; z-index: 1">
      <h1 class="price"><sup>$</sup>{{ item.price }}<span class="mo">/mo</span></h1>
      <p>{{ item.download }} Mbps Download</p>
      <p>{{ item.upload }} Mbps Upload</p>
      <p>Unlimited Data</p>
    </v-card-text>

    <v-card-actions class="text-center my-4 mb-md-8">
      <v-btn
        color="buttons"
        dark
        rounded
        width="160"
        height="40"
        class="px-auto mx-auto mb-8 mb-md-12"
        @click="clickHandler"
      >
        Subscribe
      </v-btn>
    </v-card-actions>
    <Subscription :dialog.sync="subscript" />
  </v-card>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PriceCard',
  props: ['item', 'index', 'selected'],
  data: () => ({
    subscript: false
  }),
  computed: {
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
  // watch: {
  //   available (val) {
  //     if (val && this.active) this.subscript = true
  //   },
  //   selected (val) {
  //     if (!this.active) return
  //     if (!this.address) this.check = true
  //     else if (this.available) {
  //       this.subscript = true
  //     } else this.$router.push({ name: 'contact' })
  //   }
  // },
  methods: {
    clickHandler () {
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

.price-card {
  padding: 30px 20px;
  margin: 40px 20px;
  width: 280px;
  height: 380px;
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
  line-height: 180%;
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
  .price-card {
    padding: 16px;
    width: 250px;
    height: 320px;
  }
  p, .question {
    font-size: 13px;
    line-height: 130%;
  }
}

</style>
