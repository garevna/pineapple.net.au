<template>
  <v-container fluid align-start justify-center style="position: relative; margin-bottom: -10px!important; box-sizing: border-box;">
    <FooterFone :footerHeight="footerHeight" />
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
      <div
        id="map-container"
        :style="{ height: mapHeight + 'px', width: mapWidth, marginLeft: mapMargin, marginRight: mapMargin, marginTop: '80px', marginBottom: '20px' }"
      ></div>
      <FooterBottomContent
        class="footer--bottom-content"
        v-if="viewportWidth > 960"
      />
      <FooterBottomContentSmall
        class="footer--bottom-content"
        v-else
      />
    </div>
  </v-container>
</template>

<style scoped>

</style>

<script>

import { mapState } from 'vuex'

import mapConfigs from '@/components/map/mapConfig'

export default {
  components: {
    FooterFone: () => import('@/components/footer/FooterFone.vue'),
    FooterBottomContent: () => import('@/components/footer/BottomContent.vue'),
    FooterBottomContentSmall: () => import('@/components/footer/BottomContentSmall.vue')
  },
  props: ['height'],
  data () {
    return {
      serviceAvailable: [],
      map: null,
      mapData: null,
      center: { lat: -37.8357725, lng: 144.9738764 },
      pageHeight: 0,
      mapTop: 80
    }
  },

  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('map', {
      place: 'officeCoords',
      address: 'officeAddress',
      markerIcon: 'markerImage',
      available: 'serviceAvailable'
    }),
    freeHeight () {
      return window.innerHeight - this.pageHeight
    },
    footerHeight () {
      if (this.viewportWidth < 1904) return 860
      const height = Math.min(Math.max(680, window.innerHeight - 640), 948 * window.innerWidth / 1440)
      return height
    },
    mapHeight () {
      return this.viewportWidth <= 420 ? this.footerHeight - 600 : this.viewportWidth <= 960 ? this.footerHeight - 300 : this.footerHeight - 480
    },
    mapWidth () {
      return this.viewportWidth <= 420 ? '100%' : '80%'
    },
    mapMargin () {
      // return this.viewportWidth <= 420 ? '0' : '5%'
      return 'auto'
    }
  },

  /* eslint-disable */

  methods: {
    async init () {
      // await this.$store.dispatch('map/GET_OFFICE_COORDS')
      this.map = new this.$geo.Map(document.getElementById('map-container'), {
        center: this.center,
        zoom: 13,
        styles: mapConfigs,
        disableDefaultUI: true
      })
      this.marker = new this.$geo.Marker({
        position: this.center,
        map: this.map,
        title: this.address,
        icon: this.markerIcon
      })
      this.$geo.event.addListener(this.map, 'click', function (event) {
        let result = false
        for (const polygon of this.available) {
          result = this.$geoLocation(event.latLng, polygon)
          if (result) {
            this.map.setCenter(event.latLng)
            // this.marker.setPosition(event.latLng)
            new this.$geo.Marker({
              position: event.latLng,
              map: this.map,
              icon: this.markerIcon
            })
            break
          }
        }
      }.bind(this))
    },

    resize () {
      this.pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },

  mounted () {
    this.init()
    window.addEventListener('resize', this.resize)
    this.resize()
  }
}
</script>

<style scoped>
.footer--bottom-content {
  bottom: 8px!important;
}
</style>
