<template>
<v-container fluid>
  <v-system-bar app fixed color="primary" height="40" width="100%">
    <v-row d-flex align="center" justify="end" class="mr-10">
      <v-spacer class="d-none d-lg-flex d-xl-flex"></v-spacer>
      <span width="12" height="12" class="mr-2">
        <v-img src="@/assets/icons/phone.svg" width="12" height="12" contain></v-img>
      </span>
      <span class="system-bar-phone ml-2 mr-12">1300 857 501</span>
      <span width="10" height="10" class="mr-4">
        <a href="https://www.linkedin.com/company/pineapplenet/" target="_blank">
          <v-img src="@/assets/icons/linkedin.svg" width="12" height="12" contain></v-img>
        </a>
      </span>
      <span width="10" height="10">
        <a href="https://www.facebook.com/PineappleNetAU/" target="_blank">
          <v-img src="@/assets/icons/facebook.svg" width="12" height="12" contain></v-img>
        </a>
      </span>
    </v-row>
  </v-system-bar>

  <!-- Viewport width less then lg -->
  <v-expansion-panels
          tile
          flat
          v-model="panel"
          class="app-bar d-lg-none"
          width="100%"
          style="position: fixed; margin-top: -8px; z-index: 10;"
  >
    <v-expansion-panel style="background: #FAFAFA">
      <v-expansion-panel-header
                    expand-icon="none"
                    hide-actions
                    height="70"
          >
            <span height="35" width="110" class="ml-2 ml-sm-4 ml-md-6">
              <v-img src="@/assets/logo.svg" contain width="110" height="35"></v-img>
            </span>
            <v-btn text class="burger-menu" height="48" width="48">
              <span :class="burgerMenuClassFirst"></span>
              <span :class="burgerMenuClassSecond"></span>
            </v-btn>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#FAFAFA">
            <v-list flat class="main-menu-content text-center">
              <v-list-item
                  v-for="(page, index) in pages.filter((page, num) => !disable(num))"
                  :key="index"
                  @click="panel = []; goto(index)"
              >
                <v-list-item-title class="main-menu-items">
                  {{ page }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- Viewport width wider or equal lg -->
    <v-app-bar
            app
            fixed
            height="80"
            flat
            class="homefone app-bar d-none d-lg-block"
    >
        <v-row align="center" justify="center">
          <span height="45" width="150" class="ml-10">
            <v-img src="@/assets/logo.svg" contain width="150" height="45"></v-img>
          </span>
          <v-spacer></v-spacer>
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
               @click="goto(index)"
               :disabled="disable(index)"
        >
          <ContactUsIcon v-if="pages[page] === 'Contact Us'" style="width: 50px; height:50px;" />
              <span>{{ page }}</span>
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-app-bar>
</v-container>
</template>

<script>

import { mapState } from 'vuex'

import ContactUsIcon from '@/components/svg/ContactUsIcon'

export default {
  name: 'AppHeader',
  components: {
    ContactUsIcon
  },
  props: ['section'],
  data () {
    return {
      toggle: 0,
      panel: undefined,
      selectedIndex: undefined
    }
  },
  computed: {
    ...mapState(['pages', 'selectors', 'connectEndpoint', 'signInEndpoint', 'netLogEndpoint', 'helpEndpoint']),
    burgerMenuClassFirst () {
      return this.panel === 0 ? 'burger-menu-active--first' : 'burger-menu--first'
    },
    burgerMenuClassSecond () {
      return this.panel === 0 ? 'burger-menu-active--second' : 'burger-menu--second'
    }
  },
  methods: {
    openExternalLink (selector) {
      const links = {
        'sign-in': this.signInEndpoint,
        connect: this.connectEndpoint,
        netlog: this.netLogEndpoint,
        help: this.helpEndpoint
      }

      const result = Object.keys(links).includes(selector)

      if (result) {
        this.$openExternalLink(links[selector])
        this.$emit('update:section', undefined)
      }

      return result
    },

    goto (index) {
      if (index === undefined) return

      if (this.openExternalLink(this.selectors[index])) return

      if (this.selectors[index] === 'contact') {
        this.$router.push({ name: 'contact', params: { section: null } })
        this.$emit('update:section', undefined)
        return
      }
      if (this.selectors[index] === 'plans') {
        this.$store.commit('CHANGE_PLAN', this.pages[index].toLowerCase())
        if (this.$route.path === '/plans') return
      }
      this.$router.push({ name: 'home', params: { section: this.selectors[index] } })
    },

    getClassName (pageName) {
      const className = pageName === 'Sign In' ? ' app-bar-menu-bordered py-2 px-12' : ''
      return `app-bar-menu${className}`
    },

    disable (index) {
      return this.$route.name === 'contact' && this.selectors[index] === 'contact'
    }
  }
}
</script>

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
.app-bar-menu-bordered {
  border: solid 2px #51AD30!important;
  border-radius: 100px!important;
}
.system-bar-phone {
  font-size: 16px;
  color: #ffffff;
}
.burger-menu {
  height: 48px;
  min-width: 48px!important;
  max-width: 64px!important;
}
.burger-menu--first, .burger-menu--second,
.burger-menu-active--first, .burger-menu-active--second {
  position: absolute;
  height:3px;
  background: #20731C;
  left: 0;
  transition: all 0.5s;
}
.burger-menu--first {
  width: 32px;
  top: -8px;
}
.burger-menu--second {
  width: 16px;
  top: 2px;
}
.burger-menu-active--first {
  top: 0;
  width: 32px;
  transform: rotate(-45deg);
}
.burger-menu-active--second {
  top: 0;
  width: 32px;
  transform: rotate(45deg);
}
.main-menu-content {
  background: #FAFAFA!important;
}
.main-menu-items {
  font-size: 18px;
  line-height: 40px;
}
</style>
