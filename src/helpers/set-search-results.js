export const setSearchResult = function () {
  const { address, status } = window[Symbol.for('global.addressData')]
  this.update({ prop: 'address', value: address })
  this.setAddress(address)
  this.setAddressAvailable(status === 'success')
}
