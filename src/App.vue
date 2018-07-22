<template>
    <div id="app">
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="columns is-mobile is-multiline">
    <div class="column" style="margin-top: 0.9rem;">
      <a class="" href="/">
        <img src="./assets/logo.png" alt="" width="112" height="28" style="padding-left: 15px;">
      </a>
    </div>
    <div class="column is-2" style="margin-top: 0.9rem; text-align: right;  padding-right: 0;">
      <a href="#/cart">
        <fa prefix="fas" icon="faCartArrowDown" class="has-text-white is-white"/>
      </a>
    </div>
    <div class="column is-2" style="margin-top: 0.9rem; text-align: center; padding-left: 0;">
      <a href="#/profile">
        <fa prefix="fas" icon="faUser" class="has-text-white is-white"/>
      </a>
    </div>
  </div>
</nav>
        <div class="container">
            <router-view/>

        </div>      
        <br>
<footer class="footer" style="background-color: #0a0a0a">
  <div class="content has-text-centered has-text-white">
    <p>
      Made with love &lt;3
    </p>
  </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pl-0{
  padding-left: 0;
}
.pr-0{
  padding-right: 0;
}
.pt-0{
  padding-top: 0;
}
.pb-0{
  padding-bottom: 0;
}
.ml-0{
  margin-left: 0;
}
.mr-0{
  margin-right: 0;
}
.mt-0{
  margin-top: 0;
}
.mb-0{
  margin-bottom: 0;
}
</style>
