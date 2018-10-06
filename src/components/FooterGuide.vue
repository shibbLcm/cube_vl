<template>
  <div class="footer-guide">
    <router-link to="/job" class="guide-item" :class="$route.path==='/job'?' active':''">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gongwenbao"></use>
      </svg>
      <span>职位</span>
    </router-link>
    <router-link to="/interview" class="guide-item" :class="$route.path==='/interview'?' active':''">
      <svg class="icon too-big" aria-hidden="true">
        <use xlink:href="#icon-newspapero"></use>
      </svg>
      <span>面试</span>
    </router-link>
    <router-link to="/message" class="guide-item" :class="$route.path==='/message'?' active':''">
      <svg class="icon too-big" aria-hidden="true">
        <use xlink:href="#icon-message"></use>
      </svg>
      <span>消息</span>
    </router-link>
    <router-link to="/personal" class="guide-item" :class="$route.path==='/personal'?' active':''">
      <svg class="icon too-big" aria-hidden="true">
        <use xlink:href="#icon-tab_personal"></use>
      </svg>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer-guide
    width 100%
    position fixed
    bottom 0
    left 0
    height .7rem
    background-color: white;
    display flex
    box-shadow: 0 0 13px 0 #e9eaef;
    .guide-item
      width 25%
      display flex
      flex-direction column
      justify-content center
      align-items center
      &.active
        color #00beff
        background-color:white ;
      .icon
        font-size .5rem
        &.too-big
          font-size .4rem
</style>