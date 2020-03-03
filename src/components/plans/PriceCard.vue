<template>
  <v-card
      flat
      hover
      class="white pa-10 my-10 mx-2"
      :width="width"
      :height="height"
  >
    <v-card-title>
      <h3 style="color: #353535; ">{{name}}</h3>
    </v-card-title>
    <v-card-text align="center">
      <h1 class="price"><sup>$</sup>{{ price }}<span class="mo">/mo</span></h1>
      <p>{{ download }} Mbps Download</p>
      <p>{{ upload }} Mbps Upload</p>
      <p>Unlimited Data</p>
    </v-card-text>
    <v-card-text>
      <p class="question">Does your building contain more then 60<br>apartments?</p>
    </v-card-text>
    <v-img src="@/assets/price-card-image.png" class="price-card-image"></v-img>

    <div class="text-center">
      <Menu :confirm.sync="selected"/>
    </div>

    <div class="text-center mt-12">
      <v-btn
          color="#72BF44"
          dark
          rounded
          class="px-12"
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
  line-height: 250%;
}
.question {
  font-weight: bold;
  line-height: 150%;
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

.green-border {
  border-color: #20731C!important;
}

</style>

<script>
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
    width () {
      return this.mode === 'residential' ? 380 : 380
    },
    height () {
      return this.mode === 'residential' ? 689 : 689
    }
  },
  watch: {
    selected (val) {
      console.log('Selected: ', val)
    }
  },
  methods: {
    signUp (message, event) {
      console.log(message, event)
    },
    changeHandler (message, event) {
      console.log(message, event)
    }
  }
}
</script>
