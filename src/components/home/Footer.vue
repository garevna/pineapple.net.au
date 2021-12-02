<template>
  <v-container fluid fill-height style="position: relative; margin-bottom: -10px; margin-top: 50px;">
    <FooterFone :footerHeight="footerHeight" />
    <FooterBottomContent v-if="viewportWidth >= 900" />
    <FooterBottomContentSmall  v-if="viewportWidth < 900" class="footer--bottom-content-small"/>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import FooterFone from '@/components/footer/FooterFone.vue'
// import FooterForm from '@/components/footer/FooterForm.vue'
import FooterBottomContent from '@/components/footer/BottomContent.vue'
import FooterBottomContentSmall from '@/components/footer/BottomContentSmall.vue'

export default {
  name: 'Footer',
  components: {
    FooterFone,
    // FooterForm,
    FooterBottomContentSmall,
    FooterBottomContent
  },
  props: {
    user: Object,
    page: Number
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      send: false
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'contactEndpoint', 'emailSubject', 'emailText']),
    ...mapState('content', ['footer']),
    top () {
      const top = this.viewportWidth < 380 ? 64
        : this.viewportWidth < 608 ? 140
          : this.viewportWidth < 900 ? 128
            : this.viewportWidth < 1440 ? 160
              : this.viewportWidth <= 1904 ? 180 : 310
      return top + 'px'
    },
    topContentTop () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    },
    topContentFont () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    },
    footerHeight () {
      return this.viewportWidth < 420 ? 680 : this.viewportWidth > 1904 ? 980 : 860
    }
  },
  methods: {
    submit () {
      if (!this.name || !this.phone) return
      this.$emit('update:user', {
        name: this.name,
        email: this.email,
        phone: this.phone
      })
    }
  }
}
</script>

<style>

.footer--top-content {
  position: absolute;
  width: 100%;
}

.footer--bottom-content-small {
  position: absolute;
  bottom: 40px;
  left: 0;
}

.title {
  margin-top: 198px;
}

.input--rounded {
  border-radius: 48px!important;
}

.white-text {
  color: #fff;
}

.centered {
  text-align: center;
}
.icon {
  display: inline-block;
  width: 10px;
  margin-right: 10px;
}

.left-16 {
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  color: #fff;
}
.left-14 {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #fff;
}

.ref {
  text-decoration: none;
  cursor: pointer;
}
.ref:hover {
  color: #E5FDD7;
}

.input-field {
  width: 280px;
}
</style>
