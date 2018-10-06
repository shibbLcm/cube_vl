<template>
  <div class="message-container">
    <div class="small-secretary">
      <img src="https://static1.mofanghr.com/mobile/img/pic_secretary100@2x.ff1ce537.png" alt="">
      <div class="desciption">
        <p class="name">魔方小秘书</p>
        <span class="introduction">hi，我是您的魔方小秘书。魔方微猎——找工作快人一步！</span>
      </div>
      <span class="time">11:17</span>
    </div>
    <p class="adviser-introduction">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wenhao1"></use>
      </svg>
      <span>顾问说明</span>
    </p>
    <div class="header-logo-container">
      <img class="header-icon" src="https://static1.mofanghr.com/mobile/img/head_adviser.e1919fc1.png" alt="">
      <img class="ban-icon" src="https://static1.mofanghr.com/mobile/img/icon_prohibit@2x.5d3912f0.png" alt="">
    </div>
    <p class="under-header-p">亲，您当前的期望城市 <br/>暂时未开通人工顾问服务</p>
    <p class="button-p">拨打客服电话</p>
    <p class="under-button-p">如您在使用过程中遇到问题请联系客服</p>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .message-container
    height 100%
    box-sizing border-box
    padding-bottom .7rem
    .small-secretary
      height 1.6rem
      box-sizing border-box
      padding .2rem
      display flex
      border-bottom .15rem solid #e2e2e2
      >img
        height 1.05rem
      .desciption
        height 100%
        box-sizing border-box
        padding-top .2rem
        flex-grow 1
        flex-shrink 1
        margin-left .2rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        .name
          font-size .3rem
          color #00beff
          margin-bottom .15rem
        .introduction
          font-size .25rem
          color #999
      .time
        font-size .25rem
        color #bababa
        margin-top .2rem
    .adviser-introduction
      box-sizing border-box
      color #666
      padding-top .3rem
      padding-right .25rem
      text-align right
      .icon
        color #00beff
        font-size .3rem
        margin-right .15rem
    .header-logo-container
      height 1.3rem
      text-align center
      margin-top 3rem
      position relative
      .header-icon
        height 100%
      .ban-icon
        height .4rem
        position absolute
        bottom 0
        right 40%
    .under-header-p
      margin-top .5rem
      font-size .35rem
      text-align center
    .button-p
      margin .6rem auto 0
      height .8rem
      line-height .8rem
      width 3rem
      color white
      font-size .35rem
      border-radius .5rem
      background-color: #00beff;
      text-align center
    .under-button-p
      margin-top .3rem
      text-align center
      color #999
      font-size .25rem
</style>