<template>
  <div class="app-container">
    <router-view/>
    <footer-guide/>
  </div>
</template>
<script>
  import FooterGuide from "./FooterGuide.vue"

  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    height 100%
</style>