<template>
    <div id="app">
        <navBar></navBar>
        <div class="personal d-flex justify-content-start">
            <div class="personal_main border rounded p-2">
                <ul class="p-0 m-0 text-center">
                    <li class="personal_top d-flex align-items-center border rounded-top p-2">
                        <img class="rounded-circle" :src="'src/assets/image/User/avater/'+user.avatar" alt="">
                        <div class="personal_information">
                            <h5 class="p-0 m-0"><strong>{{user.userName}}</strong></h5>
                            <span>已实名</span>
                        </div>
                    </li>
                    <li class="border">
                        <router-link to="/IndividualCenter/myInformation">
                            <i class="bi bi-person-vcard"></i>
                            <span>我的信息</span>
                        </router-link>
                    </li>
                    
                    <li class="border"> 
                        <router-link to="/IndividualCenter/myCollections">
                            <i class="bi bi-ui-checks"></i>
                            <span>我的收藏</span>
                        </router-link>
                    </li>

                    <li class="border"> 
                        <router-link to="/IndividualCenter/myAddress">
                            <i class="bi bi-geo-alt-fill"></i>
                            <span>我的地址</span>
                        </router-link>
                    </li>

                    <li class="border rounded-bottom"> 
                        <router-link to="/IndividualCenter/complaintsFeedback">
                            <i class="bi bi-envelope-paper-fill"></i>
                            <span>投诉与反馈</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { RouterLink,RouterView,useRouter } from "vue-router";
import navBar from '@/components/header.vue'
import { reactive } from 'vue'

import pinia from '@/stores/store'
import useUserStore from '../../stores/user';

const userStore = useUserStore(pinia);

let user = reactive(userStore.user)
console.log(user);

const router = useRouter();

const routerRun = () =>{
    router.push('/IndividualCenter/myInformation');
}

setTimeout(() => {
    routerRun();
}, 500);

</script>

<style scoped>

.personal_main{
    width: 30%;
    height: max-content;
    user-select: none;
}

.personal_main{
    background-color: rgba(182, 224, 240, 0.709);
}

.personal_main ul li{
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.617);
}

.personal_main ul li:not(:first-child){
    line-height: 4rem;
}

.personal_main ul li a:not(:first-child):hover{
    color: skyblue;
    cursor: pointer;
}

.router-link-active{
    color: skyblue;
}

.personal_top img{
    width: 50px;
    height: 50px;
}

</style>