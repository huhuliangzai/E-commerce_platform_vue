<template>
    <div class="all">
        <h2 class="text-white text-center p-0 m-0">Hello商城欢迎您!!!</h2>
        <p class="text-white text-center">Everying You Want</p>
        <video autoplay loop muted class="universe" src="../../assets/video/Universe.mp4"></video>
        <div class="container w3layouts agileits ">
            <router-link to="/home">
                <p class="text-white"><i class="bi bi-box-arrow-left"></i>返回首页</p>
            </router-link>
            //登录
            <div class="login w3layouts agileits">
                <h2 class="p-0 m-0">登 录</h2>
                <login></login>
                <a href="#">忘记密码?</a>
                <div class="social-icons w3layouts agileits">
                    <p>- 其他方式登录 -</p>
                    <ul>
                        <li class="qq"><a href="###">
                                <span class="icons w3layouts agileits"></span>
                                <span class="text w3layouts agileits">QQ</span></a></li>
                        <li class="weixin w3ls"><a href="#">
                                <span class="icons w3layouts"></span>
                                <span class="text w3layouts agileits">微信</span></a></li>
                        <li class="weibo aits"><a href="#">
                                <span class="icons agileits"></span>
                                <span class="text w3layouts agileits">微博</span></a></li>
                        <div class="clear"> </div>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>

            //注册
            <div class="register w3layouts agileits">
                <h2>注 册</h2>
                <register />
                <div class="clear"></div>
            </div>

            <div class="clear"></div>

        </div>
    </div>
</template>
<script setup>
import login from './conp/login.vue'
import register from './conp/register.vue'

</script>


<style lang="scss" scoped>
@import '../../assets/css/login.css';

.all {
    width: 100%;
    height: 580px;
}

.universe {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: -99;
    object-fit: fill !important;
}</style>