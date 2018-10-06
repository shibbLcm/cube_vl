<template>
  <div class="interview-container">
    <header class="header-top">
      <span>面试日程</span>
      <a href="javascript:;">面试记录</a>
    </header>
    <img class="excl-mark-img" src="https://static1.mofanghr.com/mobile/img/icon_no_interview.cf3625d9.png" alt="">
    <p style="font-size: .3rem;color: #333">您还没有面试安排哦</p>
    <p style="font-size: .26rem;color: #999">下载APP预约面试，入职领100元红包</p>
    <span class="download-span-button">下载APP</span>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .interview-container
    height 100%
    box-sizing border-box
    padding 1rem 0 .7rem
    position relative
    text-align center
    .header-top
      position: absolute
      top 0
      left 0
      width 100%
      height 1rem
      color white
      font-size .35rem
      line-height 1rem
      background-color: #00beff;
      a
        position absolute
        right .2rem
        top 0
        color white
    .excl-mark-img
      width 1.3rem
      margin-top 3rem
      margin-bottom .3rem
    p
      margin-top .2rem
    .download-span-button
      display inline-block
      color #00beff
      font-size .4rem
      margin-top .6rem
      height .8rem
      width 2.5rem
      line-height .6rem
      box-sizing border-box
      padding .1rem .2rem
      border-radius .4rem
      border .03rem solid rgba(0,234,255,0.6)

</style>