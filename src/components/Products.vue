<template src="./Products.html"></template>

<script>
export default {
  name: 'Products',
  data () {
    return {
    	cat: this.$route.params.cat,
    	items: [],
    	category: null,
    }
  },
  mounted() {
  	this.$http.get('/api/v1/categories/' + this.cat + '/').then((response) => {
  		this.category = response.data;
	})
  	this.$http.get('/api/v1/items/').then((response) => {
  		this.items = response.data;
	})
  }
}
</script>
