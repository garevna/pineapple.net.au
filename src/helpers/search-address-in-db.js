import { emitEvent } from './'

export async function searchAddressInDB () {
  Object.assign(window[Symbol.for('global.addressData')], { status: null })

  const response = await fetch('https://portal.dgtek.net/building/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address: window[Symbol.for('global.addressData')].address })
  })

  const result = await response.json()

  if (!result.data) return null

  const { status } = result.data

  Object.assign(window[Symbol.for('global.addressData')], {
    status: status === 'LIT' || status === 'Footprint' ? 'success' : 'failure'
  })

  if (window[Symbol.for('global.addressData')].status === 'success') emitEvent('open-success-popup')

  return window[Symbol.for('global.addressData')].status
}
