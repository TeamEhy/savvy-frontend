<template src="./Categories.html"></template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      categories: []
    }
  },
  mounted() {
  	this.$http.get('/api/v1/categories/').then((response) => {
  		this.categories = response.data;
	})
  }
}
</script>
