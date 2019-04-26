var localforage = require('localforage')

function ForageStore() {}

ForageStore.prototype.getItem = function (key) {
  return localforage.getItem(key)
}

ForageStore.prototype.setItem = function (key, value) {
  return localforage.setItem(key, value)
}

ForageStore.prototype.removeItem = function (key) {
  return localforage.removeItem(key)
}

ForageStore.prototype.getItemIds = function () {
  return localforage.keys()
}

ForageStore.prototype.clean = function () {
  return localforage.clear()
}

module.exports = ForageStore
