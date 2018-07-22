<template src="./Home.html"></template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    itemList: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted() {
    	this.$http.get('/api/v1/items/').then((response) => {
    		this.itemList = response.data;
  	})
  }
}
</script>
