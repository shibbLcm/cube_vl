<template>
  <div class="detail-container">
    <header class="detail-header">
      <div class="back-button-container" @click="$router.back()">
        <svg class="icon back" aria-hidden="true">
          <use xlink:href="#icon-i-left"></use>
        </svg>
      </div>
      <svg class="icon home" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>
      <svg class="icon share" aria-hidden="true">
        <use xlink:href="#icon-share"></use>
      </svg>
    </header>
    <section class="detail-content">
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
      <!--先来点内容替代一下，后期再补回来-->
      <div class="little-demo">优势亮点：<br>咱可是美国纳斯达克上市，是中国最大的职业教育集团，薪资福利还会差吗？转正无责底薪就拿4500起，</div>
      <div class="little-demo">薪资待遇<br>
        无责底薪：
        4000-4500<br>
        绩效工资：
        500-700<br>
        岗位均薪：
        7000-10000<br>
        有无社保：
        入职即上5险1金满一年奖励2项商业险<br>
        补贴项目：
        餐饮补贴加班补贴<br>
        试用工资：
        100%<br>
        试用时长：
        3个月<br>
        带薪假期：
        带薪年假</div>
      <div class="little-demo">其他福利：<br>
        1. 公司规模大: 咱可是美国纳斯达克上市，是中国最大的职业教育集团，薪资福利还会差吗？<br>

        2. 薪资分层: 跟你直说了吧，小编从咱们的财务部门了解到，就咱这个职位60%的人月收入6000-8000元，20%的人月收入8000-10000元，20%的人月收入10000元<br>

        3. 基础福利: 团建经费+带薪培训+带薪年假+节假日福利，基础福利，只要你能想到的，我们都有。<br>

        4. 月度奖金: 优秀咨询顾问月度金股奖励，能不能拿的上就全看你的能力啦！<br>

        5. 工龄优势: 入职满一年奖励2项商业险，满三年乐居计划，所以，在咱这，年龄越大越值钱哟。</div>
      <div class="little-demo">工作内容：<br>
        说道IT你想到了什么？高薪！<br>

        没毛病，据统计，我国2017年个行业均薪水平如下，IT行业可谓是长盛不衰的一个行业呀，2017年，互联网行业平均招聘薪酬已经达到1.06万元<br>

        所以啊，就有很多人想转行干IT，但是没有基础怎么办？那就需要找你啦！咱们公司专门培训培养软件开发工程师、测试工程师、系统管理员、智能硬件工程师、UI设计师、网络营销工程师、会计等职场人才。<br>

        而你的工作就是<br>

        1、及时跟踪市场部获取的leads；<br>2、判断目标客户，邀约客户上门试听；<br>3、收集客户对市场活动的反馈，并详细记录；准确收集、统计、整理咨询数据，挖掘有效顾客信息。<br>

        现在IT行业这么火爆，你还担心什么呢？</div>
    </section>
    <footer class="detail-footer">
      <div class="small-button-group">
        <div class="small-button-item" style="border-right: 1px solid #eee">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-heart"></use>
          </svg>
          <p>收藏</p>
        </div>
        <div class="small-button-item">
          <svg class="icon" aria-hidden="true" style="color:#00beff ">
            <use xlink:href="#icon-message"></use>
          </svg>
          <p>免费咨询</p>
        </div>
      </div>
      <div class="blue-button">
        我要面试
        <span style="font-size: .2rem">免费</span>
      </div>
    </footer>
  </div>
</template>
<script>
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
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail-container
    height 100%
    padding 0 0 1rem
    box-sizing border-box
    position relative
    .detail-header
      height .8rem
      width 100%
      box-sizing border-box
      padding 0 .3rem
      display flex
      align-items center
      color #eee
      font-size .3rem
      position fixed
      top 0
      left 0
      z-index 10
      .back-button-container
        flex-grow 1
        flex-shrink 1
      .home
        font-size .43rem
        margin-right .2rem
    .detail-content
      /*以下两行有问题*/
      padding-bottom 1rem
      background-color: #eee;
      .swiper-container
        height 3.5rem
        margin-bottom .2rem
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
      .little-demo
        font-size .3rem
        margin-bottom .2rem
        background-color: white;
    .detail-footer
      width 100%
      height 1rem
      position fixed
      bottom 0
      left 0
      z-index 10
      display flex
      .small-button-group
        width 30%
        height 100%
        box-sizing border-box
        padding .2rem 0
        display flex
        font-size .2rem
        color #888
        background-color: white;
        .small-button-item
          width 50%
          height 100%
          text-align center
          .icon
            font-size .4rem
      .blue-button
        width 70%
        height 100%
        color white
        font-size .3rem
        line-height 1rem
        text-align center
        background-color: #00beff
</style>