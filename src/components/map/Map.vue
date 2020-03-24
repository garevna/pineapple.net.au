<template>
  <div
      id="map-container"
      :style="{ height: height, width: width, marginLeft: margin, marginRight: margin }"
  ></div>
</template>

<style scoped>
#map-container {
  position: absolute;
  box-sizing: border-box;
  box-shadow: -2px -2px 6px #0005;
}
</style>

<script>

import { mapState } from 'vuex'

import mapConfigs from '@/components/map/mapConfig'

export default {
  components: {
    //
  },
  props: ['height', 'width', 'margin'],
  data () {
    return {
      serviceAvailable: [],
      map: null,
      mapData: null,
      center: { lat: -37.8357725, lng: 144.9738764 }
    }
  },

  computed: {
    ...mapState({ screen: 'viewportWidth' }),
    ...mapState('map', {
      place: 'officeCoords',
      address: 'officeAddress',
      markerIcon: 'markerImage',
      available: 'serviceAvailable'
    })
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
    }
  },

  mounted () {
    this.init()
  }
}
</script>
