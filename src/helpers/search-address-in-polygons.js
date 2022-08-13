import { emitEvent } from './'

export async function searchAddressInPolygons () {
  const { lat, lng } = window[Symbol.for('global.addressData')].coordinates
  const latLng = new window.google.maps.LatLng(lat, lng)

  const response = await fetch('https://portal.dgtek.net/polygons/service-available')

  const polygons = (await response.json()).data.map(item => item.geometry.coordinates[0].map(point => ({ lat: point[1], lng: point[0] })))

  for (const coordinates of polygons) {
    const polygon = new window.google.maps.Polygon({ paths: coordinates })
    if (window.google.maps.geometry.poly.containsLocation(latLng, polygon)) {
      Object.assign(window[Symbol.for('global.addressData')], { status: 'success' })
      emitEvent('open-success-popup', 'footprint')

      return 200
    }
  }
  emitEvent('open-failure-popup')
  Object.assign(window[Symbol.for('global.addressData')], { status: 'failure' })
  return 404
}
