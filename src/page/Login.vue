<template>
    <div class="login-container">
        <div class="logo-container">
            <img src="https://static1.mofanghr.com/mobile/img/logo02@2x.9ffa3936.png" alt="">
        </div>
        <ul class="login-method">
            <li>验证码进入</li>
            <li>密码登录</li>
        </ul>
        <form>
            <div class="login-by-code" v-if="false">
                <div class="input-container">
                    <input type="text" placeholder="手机号">
                </div>
                <div class="input-container">
                    <input type="text" placeholder="验证码">
                    <span class="get-code-button">获取</span>
                </div>
                <span class="under-input">
                    收不到短信？请使用
                    <a href="javascript:;">语音验证码</a>
                </span>
                <button>进入</button>
            </div>
            <div class="login-by-code" v-if="true">
                <div class="input-container">
                    <input type="text" placeholder="手机号">
                </div>
                <div class="input-container">
                    <input type="text" placeholder="密码">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-1"></use>
                    </svg>
                </div>
                <span class="under-input">
                    <a href="javascript:;">忘记密码？</a>
                </span>
                <button>进入</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>