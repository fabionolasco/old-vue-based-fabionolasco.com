import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    const date = new Date(value)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return month + '/' + day + '/' + year
  }
})
