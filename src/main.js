// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueStripeCheckout from 'vue-stripe-checkout'

Vue.config.productionTip = false

// base/global options
// these options can be overridden
// by the options in the .open(options)
// function.
const options = {
  key: 'pk_test_b5Z9F4p2d4N6G7W0apWVjopZ',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'BRL',
  billingAddress: true,
  panelLabel: 'Total {{amount}}'
}

Vue.use(VueStripeCheckout, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
