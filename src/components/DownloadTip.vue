<template>
  <div class="download-tip-bar" v-if="isShowDownloadTipBar">
    <svg class="icon" aria-hidden="true" @click="isShowDownloadTipBar=!isShowDownloadTipBar">
      <use xlink:href="#icon-LC_icon_close_fill_circle"></use>
    </svg>
    <div class="cube-img-container">
      <img src="https://static1.mofanghr.com/mobile/img/touch-icon.fe5d226d.png" alt="">
    </div>
    <div class="download-tip-container">
      <p class="title">魔方微猎</p>
      <p class="little-desciption">下载APP领取100元现金红包</p>
    </div>
    <div class="download-button-container">
      <button class="download">下载</button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isShowDownloadTipBar:true
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .download-tip-bar
    height 1rem
    box-sizing border-box
    padding .1rem .25rem
    background-color: #F0F1F5;
    display flex
    align-items center
    .icon
      font-size .36rem
      color #cacaca
    .cube-img-container
      font-size 0
      width .8rem
      height .8rem
      padding 0 .2rem
      overflow hidden
      img
        width 100%
        height 100%
        border-radius .1rem
    .download-tip-container
      height 100%
      flex-grow: 1;
      flex-shrink: 1;
      .title
        font-size .4rem
        color #333
      .little-desciption
        font-size .3rem
        color #666
    .download-button-container
      width 1rem
      height .6rem
      line-height .65rem
      text-align center
      border-radius .08rem
      background-color: #00beff;
      .download
        //消除button的默认样式
        margin: 0;
        padding: 0;
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果
        color white
        background-color: transparent;
</style>