<template src="./Cart.html"></template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cart: null,
      totalSum: 0
    }
  },
  mounted() {
  	this.$http.get('/api/v1/cart').then((response) => {
          this.cart = response.data;
          for(let obj of this.cart){
            this.totalSum += parseFloat(obj.total);
          }
    })
  }
}
</script>
