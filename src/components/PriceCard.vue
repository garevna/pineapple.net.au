<template>
  <v-card
      flat
      hover
      class="pa-10 my-10 mx-2"
      :width="width"
      :height="height"
  >
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
      <v-menu>
        <template v-slot:activator="{ on: menu }">
          <v-btn
            text
            outlined
            rounded
            class="green-border"
            ripple
            color="#20731C"
            v-on="{ ...menu }"
          >
            {{selected}}
            <v-icon class="ml-12">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="selected='Yes'">
            <v-list-item-title>Yes</v-list-item-title>
          </v-list-item>
          <v-list-item @click="selected='No'">
            <v-list-item-title>No</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="text-center mt-12">
      <v-btn
          color="#72BF44"
          dark
          rounded
          class="px-12"
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
}

.green-border {
  border-color: #20731C!important;
}

</style>

<script>

export default {
  name: 'PriceCard',

  props: {
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
      selected: 'Yes'
    }
  },
  computed: {
    width () {
      return this.mode === 'residential' ? 280 : 380
    },
    height () {
      return this.mode === 'residential' ? 566 : 581
    }
  }
}
</script>
