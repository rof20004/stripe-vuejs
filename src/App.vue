<template>
  <div id="app">
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  methods: {
    checkout () {
      this.$checkout.open({
        name: 'Obrigado por nos escolher!',
        currency: 'BRL',
        amount: 99999,
        token: token => {
          console.log(token)
        }
      })
    }
  }
}
</script>