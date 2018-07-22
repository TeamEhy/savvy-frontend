<template src="./Product.html"></template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
        productId: this.$route.params.id,
        product: null,
        quantity: null
    }
  },
  mounted() {
        this.$http.get('/api/v1/items/' + this.productId + '/').then((response) => {
          this.product = response.data;
    })
  },
  methods: {
    addToCart() {
        this.$http.get('/api/v1/submit_cart/' + this.product.id + '/' + this.quantity).then((response) => {
              this.$router.push('/cart');
        });
    }
}
};
</script>
