<template>
  <v-card
      flat
      hover
      :class="`white ${activeClass}`"
      :width="width"
      :height="height"
  >
    <!-- <v-card-title>
      <h3 style="color: #353535; ">{{name}}</h3>
    </v-card-title> -->
    <v-card-text align="center">
      <h1 class="price"><sup>$</sup>{{ price }}<span class="mo">/mo</span></h1>
      <p>{{ download }} Mbps Download</p>
      <p>{{ upload }} Mbps Upload</p>
      <p>Unlimited Data</p>
    </v-card-text>
    <v-card-text>
      <p class="question">Does your building contain more then 60 apartments?</p>
    </v-card-text>
    <v-img src="@/assets/price-card-image.png" class="price-card-image"></v-img>

    <div class="text-center">
      <Menu :confirm.sync="selected" :fontSize="fontSize"/>
    </div>

    <div class="text-center mt-8">
      <v-btn
          color="buttons"
          dark
          rounded
          width="220"
          height="40"
          :class="`${mode === 'residential' && screen >= 960 ? 'price-card-button' : ''} px-auto`"
          @click="signUp('Sign Up button event\n', $event)"
      >
        Sign up now
      </v-btn>
    </div>
  </v-card>
</template>

<style>

p {
  text-align: center;
  color: #000;
  font-size: var(--font-size);
  line-height: var(--price-card-text-line-height);
}
.question {
  font-weight: bold;
  font-size: var(--price-card-font-size);
  line-height: var(--price-card-question-line-height);
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

.price-card-button {
  left: -8px;
}

.green-border {
  border-color: #20731C!important;
}

</style>

<script>

import { mapState } from 'vuex'

import Menu from '@/components/plans/Menu.vue'

export default {
  name: 'PriceCard',

  components: {
    Menu
  },

  props: {
    name: String,
    price: {
      type: [Number, String],
      required: true
    },
    upload: {
      type: [Number, String],
      required: true
    },
    download: {
      type: [Number, String],
      required: true
    },
    mode: {
      type: String,
      default: 'residential'
    }
  },
  data () {
    return {
      selected: true,
      menu_visible: false
    }
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    activeClass () {
      return this.screen < 960 ? 'pa-2 my-6 mx-1' : 'pa-10 my-10 mx-4'
    },
    width () {
      return this.screen < 600 ? '247' : this.mode === 'residential' ? 280 : 380
    },
    height () {
      return this.screen < 600 ? '440' : this.mode === 'residential' ? 566 : 581
    },
    fontSize () {
      return this.screen > 960 ? '16px' : '13px'
    },
    questionLineHeight () {
      return this.screen > 960 ? '150%' : '100%'
    },
    textLineHeight () {
      return this.screen > 960 ? '180%' : '130%'
    }
  },
  methods: {
    signUp (message, event) {
      //
    },
    changeHandler (message, event) {
      //
    },
    changeViewport (mode) {
      [
        { name: '--price-card-font-size', value: this.fontSize[screen] },
        { name: '--price-card-question-line-height', value: this.questionLineHeight[screen] },
        { name: '--price-card-text-line-height', value: this.textLineHeight[mode] }
      ].forEach(item => document.documentElement.style.setProperty(item.name, item.value))
    }
  },
  mounted () {
    this.changeViewport(this.mode)
  }
}
</script>
