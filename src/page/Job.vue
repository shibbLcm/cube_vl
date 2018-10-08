<template>
  <div style="height: 100%">
    <div class="job-page-container">
      <!--<download-tip></download-tip>-->
      <div class="search-bar">
        <div class="select-city">
          <span class="city">北京</span>
          <span class="arrow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-downarrow"></use>
          </svg>
        </span>
        </div>
        <div class="search-input-imitation">
        <span class="icon-container">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fangdajing"></use>
          </svg>
        </span>
          <span class="placeholder">搜索职位/公司</span>
        </div>
      </div>
      <ul class="filter-menu">
        <li class="filter-condition">
          <span class="condition-name">筛选</span>
          <span class="condition-arrow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-3101jiantou3"></use>
          </svg>
        </span>
        </li>
        <li class="filter-condition">
          <span class="condition-name">面试时间</span>
          <span class="condition-arrow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-3101jiantou3"></use>
          </svg>
        </span>
        </li>
        <li class="filter-condition">
          <span class="condition-name">智能排序</span>
          <span class="condition-arrow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-3101jiantou3"></use>
          </svg>
        </span>
        </li>
      </ul>
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="https://public.mofanghr.com/head/2018/09/29/79B9E4B93364109B1A891CBE3DBDC60C.jpg" alt="">
          </li>
          <li class="swiper-slide">
            <img src="https://public.mofanghr.com/head/2018/08/08/EAFD9D5874A415A800C8260C73A16FD9.jpg" alt="">
          </li>
          <li class="swiper-slide">
            <img src="https://public.mofanghr.com/head/2018/08/08/0C14991E47B3188133E5D91D0F8DF633.jpg" alt="">
          </li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <div class="job-list">
        <div class="job-item" v-for="i in 20" :key="i" @click="toDetail(i)">
          <div class="item-job-logo">
            <img src="https://public.mofanghr.com/head/2018/03/06/C07A407B2AEFF0E0E86F8A446667CD93.jpg?w=120&h=120" alt="">
          </div>
          <div class="item-job-info">
            <div class="info-title">
              <div class="hot-container">
                <span class="job-name">TMK邀约专员-大钟寺</span>
                <span class="hot">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-hotchunse"></use>
                </svg>
              </span>
              </div>
              <span class="salary">6000-10000</span>
            </div>
            <div class="info-company">达内教育</div>
            <div class="info-condition">
              <span class="condition-item">北京-北下关</span>
            </div>
            <div class="info-treatment">
              <span class="treatment-item">餐饮补贴</span>
            </div>
            <div class="info-interview-time">
            <span class="clock-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-clock"></use>
              </svg>
            </span>
              <span class="interview-date">10月9日 (周二)  11:00</span>
              <svg class="icon share" aria-hidden="true" @click.stop="shareHandler()">
                <use xlink:href="#icon-share"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//  import DownloadTip from "../components/DownloadTip.vue"
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"

  export default {
    mounted(){
      let mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    data(){
      return {

      }
    },
    methods:{
      toDetail(i){
        this.$router.push('/layoutBase/detail/'+i)
      },
      shareHandler(){
        alert('已点击分享~~~~')
      }
    },
    components:{
//      DownloadTip
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .job-page-container
    height 100%
    box-sizing border-box
    padding 1.6rem 0 .7rem
    position relative
    .search-bar
      width 100%
      height .8rem
      background-color: #00beff;
      box-sizing border-box
      padding-left .3rem
      display flex
      align-items center
      color white
      position fixed
      top 0
      left 0
      z-index 10
      .select-city
        width 1rem
        font-size .25rem
        .arrow
          margin-left .1rem
      .search-input-imitation
        height .6rem
        line-height .6rem
        text-align center
        opacity .8
        font-size .25rem
        background-color: rgba(0,0,0,.1);
        flex-grow 1
        flex-shrink 1
        border-radius .3rem
        margin-right .3rem
    .filter-menu
      width 100%
      height .8rem
      line-height .8rem
      text-align center
      display flex
      background-color: #fff;
      position fixed
      top .8rem
      left 0
      z-index 10
      .filter-condition
        height 100%
        width 33.3333333%
        .condition-name
          font-size .3rem
          color #666
        .condition-arrow
          margin-left .1rem
          font-size .2rem
          color #dedede
    .swiper-container
      height 3.5rem
      background-color: #eee;
      /*.swiper-pagination
        .swiper-pagination-bullet
          display: inline-block;
          width: 5px;
          height: 5px;
          opacity: .4;
          border-radius: 50px;
          background-color: #fff;
        .swiper-pagination-bullet-active
          width: 8px;
          height: 5px;
          opacity: 1;
          background-color: #ffffff;*/
      .swiper-wrapper
        .swiper-slide
          font-size 0
          img
            width 100%
            height 100%
    .job-list
      border-top .15rem solid #eee
      background-color #eee
      .job-item
        height 3rem
        background-color: white;
        box-sizing border-box
        padding .3rem 0 0 .3rem
        margin-bottom .15rem
        display flex
        justify-content space-between
        &:last-of-type
          margin-bottom 0
        .item-job-logo
          width 15%
          font-size 0
          img
            width 100%
        .item-job-info
          width 82%
          height 2.7rem
          box-sizing border-box
          padding-right .3rem
          display flex
          flex-direction column
          .info-title
            font-size .3rem
            font-weight bold
            display flex
            justify-content space-between
            align-items center
            .hot-container
              .hot
                color #ff6500
            .salary
              color #ff6500
          .info-company
            font-size .25rem
            margin-top .1rem
          .info-condition
            margin-top .1rem
            .condition-item
              font-size .25rem
              color #999
              margin-right .2rem
          .info-treatment
            margin-top .1rem
            .treatment-item
              display inline-block
              padding .06rem .1rem
              border-radius .04rem
              margin-right .1rem
              color #9aa6ba
              background-color: #f7f8fe;
          .info-interview-time
            height .8rem
            width 106%
            line-height .8rem
            border-top 1px solid #eee
            margin-top .4rem
            font-size .25rem
            display flex
            align-items center
            .clock-icon
              color #eee
              margin-right .2rem
            .interview-date
              color #ff6500
              flex-grow 1
              flex-shrink 1
            .share
              margin-right .3rem
</style>