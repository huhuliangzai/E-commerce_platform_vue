<template>
    <div class="all">
        <h2 class="text-white text-center p-0 m-0">Hello商城欢迎您!!!</h2>
        <p class="text-white text-center">Everying You Want</p>
        <video autoplay loop muted class="universe" src="../../assets/video/Universe.mp4"></video>
        <div class="container w3layouts agileits ">
            <router-link to="/home"><p class="text-white"><i class="bi bi-box-arrow-left"></i>返回首页</p></router-link>
            <div class="login w3layouts agileits">
                <h2>登 录</h2>
                <form action="#" method="post">
                    <input type="text" Name="Userame" placeholder="用户名" required="">
                    <input type="password" Name="Password" placeholder="密码" required="">
                </form>
                <ul class="tick w3layouts agileits">
                    <li>
                        <input type="checkbox" id="brand1" value="">
                        <label for="brand1"><span></span>记住我</label>
                    </li>
                </ul>
                <div class="send-button w3layouts agileits">
                    <form>
                        <input type="submit" value="登 录">
                    </form>
                </div>
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


            <div class="register w3layouts agileits">
                <h2>注 册</h2>
                <form action="#" method="post">
                    <input type="text" Name="Name" placeholder="用户名" required="">
                    <input type="text" Name="Email" placeholder="邮箱" required="">
                    <input type="password" Name="Password" placeholder="密码" required="">
                    <input type="text" Name="Phone Number" placeholder="手机号码" required="">
                </form>
                <div class="send-button w3layouts agileits">
                    <form>
                        <input type="submit" value="免费注册">
                    </form>
                </div>
                <div class="clear"></div>
            </div>

            <div class="clear"></div>

        </div>
    </div>
</template>
<script setup>
import {RouterLink} from 'vue-router';
</script>
<style lang="scss" scoped>
@import '../../assets/css/login.css';

.all{
    width: 100%;
    height: 100%;
    position: relative;
}
.universe {
    width: 100%;
    height: 100%;
    position: absolute;  
    right: 0px;  
    bottom: 0px;  
    z-index:-99;
    object-fit: fill !important;
}
</style>