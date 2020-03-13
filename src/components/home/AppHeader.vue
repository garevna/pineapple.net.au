<template>
<v-container fluid>
  <v-system-bar app absolute hide-on-scroll color="primary" height="40" width="100%">
    <v-row d-flex align="center" justify="end" class="mr-10">
      <v-spacer class="d-none d-lg-flex d-xl-flex"></v-spacer>
      <span width="10" height="10" class="mr-2">
        <v-img src="@/assets/home/icons/system-bar-call-answer.png" contain></v-img>
      </span>
      <span class="system-bar-phone ml-2 mr-12">1300 857 501</span>
      <span width="10" height="10" class="mr-4">
        <a href="https://www.linkedin.com/company/pineapplenet/" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-linkedin.png"></v-img>
        </a>
      </span>
      <span width="10" height="10">
        <a href="https://www.facebook.com/PineappleNetAU/" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-facebook.png"></v-img>
        </a>
      </span>
    </v-row>
  </v-system-bar>

  <v-app-bar app absolute hide-on-scroll height="80" flat class="homefone app-bar">
    <v-row align="center" justify="center">
      <span height="35" width="110" class="ml-10">
        <v-img src="@/assets/home/logo-top-left.png" contain></v-img>
      </span>
      <v-spacer></v-spacer>
      <!-- Viewport width less then lg -->
      <v-menu class="d-lg-none" transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="mr-10 d-lg-none">
              <v-img src="@/assets/home/icons/burger.png" width="18"></v-img>
            </v-btn>
          </template>
          <v-list expand flat>
            <v-list-item
                v-for="(page, index) in pages"
                :key="index"
                class="app-bar-menu"
                @click="$emit('update:selected', index)"
            >
              <v-list-item-title>{{ page }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-menu>

      <!-- Viewport width wider or equal lg -->
      <v-btn-toggle
            group
            flat
            class="mr-10 d-none d-lg-flex"
            color="transparent"
            v-model="toggle"
      >
        <v-btn text
               v-for="(page, index) in pages"
               :key="index"
               :class="getClassName(page)"
               @click="$emit('update:selected', index)">
              {{ page }}
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-app-bar>
</v-container>
</template>

<style scoped>
.v-btn-toggle > .v-btn.v-btn--active {
  color: #72BF44!important;
}
.app-bar-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.app-bar-menu {
  font-size: 13px;
  line-height: 24px;
  text-transform: none!important;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
.v-menu__content {
  min-width: 100%!important;
  top: 40px!important;
  text-align: center!important;
  left: 0!important;
}
.app-bar-menu-bordered {
  border: solid 2px #51AD30!important;
  border-radius: 100px!important;
}
.system-bar-phone {
  font-size: 13px;
  color: #ffffff;
}
</style>

<script>

export default {
  name: 'AppHeader',

  props: {
    pages: Array,
    selected: Number
  },
  data () {
    return {
      toggle: 0
    }
  },
  watch: {
    //
  },
  methods: {
    getClassName (pageName) {
      const className = pageName === 'Sign In' ? ' app-bar-menu-bordered py-2 px-12' : ''
      return `app-bar-menu${className}`
    }
  }
}
</script>
