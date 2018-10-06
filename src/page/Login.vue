<template>
    <div class="login-container">
        <div class="logo-container">
            <img ref="logo" src="https://static1.mofanghr.com/mobile/img/logo02@2x.9ffa3936.png" alt="">
        </div>
        <ul class="login-method">
            <li :class="{active:loginMethod}" @click="loginMethod=true">验证码进入</li>
            <li :class="{active:!loginMethod}" @click="loginMethod=false">密码登录</li>
        </ul>
        <form class="login-form" onsubmit="return false">
            <div class="login-div login-by-code" v-if="loginMethod">
                <div class="input-container">
                    <input type="text" placeholder="手机号" @focus="focusHandler()" @blur="blurHandler()">
                </div>
                <div class="input-container">
                    <input type="text" placeholder="验证码" @focus="focusHandler()" @blur="blurHandler()">
                    <span @click="getCode()" ref="getCodeButton" class="get-code-button" style="font-size: .28rem;box-sizing:border-box;height: 1rem;padding: .08rem .3rem;border-radius:.5rem;border: .03rem solid #00beff;color:#00beff;margin-left: -1.3rem">获取</span>
                </div>
                <p class="under-input">
                    收不到短信？请使用
                    <a href="javascript:;">语音验证码</a>
                </p>
                <button>进入</button>
            </div>
            <div class="login-div login-by-password" v-else>
                <div class="input-container">
                    <input type="text" placeholder="手机号" @focus="focusHandler()" @blur="blurHandler()">
                </div>
                <div class="input-container">
                    <input ref="passwordInput" type="password" placeholder="密码" @focus="focusHandler()" @blur="blurHandler()">
                    <svg @click="switchPassword()" ref="eye" class="icon" aria-hidden="true" style="color:#666;font-size: .25rem;margin-left: -.5rem">
                        <use xlink:href="#icon-icon-1"></use>
                    </svg>
                </div>
                <p class="under-input">
                    <a href="javascript:;">忘记密码？</a>
                </p>
                <button>登录</button>
            </div>
        </form>
        <p class="bottom-p">
            注册代表你同意魔方微猎<a href="javascript:;">用户协议</a>
        </p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                loginMethod:true,
                timer:null,
                passwordOpen:false
            }
        },
        methods:{
            focusHandler(){
                this.$refs.logo.style.width="2.3rem"
                this.$refs.logo.style.marginTop=".4rem"
            },
            blurHandler(){
                this.$refs.logo.style.width="3rem"
                this.$refs.logo.style.marginTop="1.5rem"
            },
            getCode(){
                if(this.timer)return
                let count=5
                this.timer=setInterval(()=>{
                    count--
                    this.$refs.getCodeButton.style.color="#999"
                    this.$refs.getCodeButton.style.border=" .03rem solid #999"
                    this.$refs.getCodeButton.innerHTML=count+"s"
                    if(count<=0){
                        clearInterval(this.timer)
                        this.timer=null
                        this.$refs.getCodeButton.style.color="#00beff"
                        this.$refs.getCodeButton.style.border=" .03rem solid #00beff"
                        this.$refs.getCodeButton.innerHTML="重新获取"
                    }
                },1000)
            },
            switchPassword(){
                this.passwordOpen=!this.passwordOpen
                if(this.passwordOpen){
                    this.$refs.passwordInput.type="text"
                    this.$refs.eye.innerHTML="<use xlink:href=\"#icon-icon-\"></use>"
                }else {
                    this.$refs.passwordInput.type="password"
                    this.$refs.eye.innerHTML="<use xlink:href=\"#icon-icon-1\"></use>"
                }
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .login-container
        height 100%
        position relative
        .logo-container
            text-align center
            img
                transition .5s all
                width 3rem
                margin 1.5rem 0 .8rem
        .login-method
            width 100%
            height .6rem
            line-height .6rem
            text-align center
            font-size .3rem
            color #666
            display flex
            justify-content center
            &>li
                height 100%
                margin-right .3rem
                &.active
                    color deepskyblue
                    position relative
                    &::after
                        content ""
                        width .8rem
                        height .03rem
                        background-color: deepskyblue;
                        position absolute
                        bottom 0
                        left 50%
                        margin-left -.4rem
        .login-form
            width 100%
            height 4.3rem
            box-sizing border-box
            padding .1rem 1rem 0
            .login-div
                width 100%
                height 100%
                background-color: white;
                display flex
                flex-direction column
                justify-content flex-end
                align-items center
                .input-container
                    width 100%
                    height .8rem
                    white-space nowrap
                    border-bottom .03rem solid #7fdfff
                    background-color: #eee;
                    margin-top .3rem
                    input
                        width 100%
                        height .8rem
                        outline none
                        border none
                        background-color: none;
                        &::-webkit-input-placeholder
                            font-size .3rem
                            color #333
                .under-input
                    width 100%
                    color #999
                    margin-top .1rem
                    text-align right
                    a
                        color deepskyblue
                button
                    width 100%
                    height .8rem
                    color white
                    font-size .3rem
                    margin-top .8rem
                    border none
                    border-radius .1rem
                    outline none
                    background-color: #7fdfff;
        .bottom-p
            position absolute
            bottom 0
            left 0
            width 100%
            text-align center
            color #999
            margin-bottom .4rem
            font-size .27rem
            a
                color #00beff

</style>