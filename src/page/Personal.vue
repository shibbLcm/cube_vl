<template>
  <div class="personal-container">
    <header class="personal-header">
      <img src="https://static1.mofanghr.com/mobile/img/boy-default.9f532b18.png" alt="">
      <p class="username-p">
        <span class="username-span">sbb</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ue60cwrite2"></use>
        </svg>
      </p>
      <p class="user-info-p">
        <span class="city">山东-东营</span>
        <span class="edu-bg">本科</span>
        <span class="experience">3年1个月</span>
      </p>
    </header>
    <section class="personal-content">
      <ul class="job-number">
        <li style="border-right: 1px solid #eee">
          <p class="number"><span class="num">0</span> 个</p>
          <p class="num-type">预约职位</p>
        </li>
        <li>
          <p class="number"><span class="num">0</span> 个</p>
          <p class="num-type">收藏职位</p>
        </li>
      </ul>

    </section>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .personal-container
    height 100%
    box-sizing border-box
    padding-bottom .7rem
    .personal-header
      height 26%
      color white
      text-align center
      background-image:url(https://static1.mofanghr.com/mobile/img/my-banner.31849d58.png);
      background-repeat:no-repeat;
      background-size: 100% 100%
      >img
        margin-top .4rem
        border-radius 50%
        height 1.5rem
      .username-p
        margin-top .25rem
        .username-span
          font-size .35rem
          margin-right .15rem

      .user-info-p
        margin-top .1rem
        font-size .28rem
        >span
          margin-right .2rem
    .personal-content
      height 74%
      background-color: #f7f7f7;
      .job-number
        height 1.2rem
        padding .1rem 0
        margin-bottom .2rem
        background-color: white;
        white-space nowrap
        >li
          width 50%
          height 100%
          text-align center
          display inline-block
          >p
            font-size .3rem
            margin-top .1rem
            &.number
              color #00beff
              .num
                font-size .5rem
            &.num-type
              color #666
</style>