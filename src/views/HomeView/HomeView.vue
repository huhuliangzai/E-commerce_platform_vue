<template>
   <navBar />
   <carousel></carousel>
   <search />
   <div class="row row-deck row-cards">
      <div class="col-md-6 col-lg-4 my-2">
         <div class="card">
            <div class="newrp_bg">
               <div class="content">
                  <div>
                     <h3>近期热推！！</h3>
                     <p>品质上乘 放心挑选</p>
                  </div>
                  <div>
                     <p class="rp_good">
                        <span>雪花牛排</span><span>汉堡肉饼</span><br>
                        <span>寿喜烧套餐</span><span>五谷鸡爪</span>
                     </p>
                  </div>
                  <button class="btn btn-block btn-outline-danger btn-round">立即抢购<i
                        class="bi bi-arrow-right-circle"></i></button>
               </div>
            </div>
         </div>
      </div>
      <div class="col-md-12 col-lg-8 my-2">
         <div class="card">
            <div class="row text-center">
               <div class="col-sm-4 p-3 text-dark border">
                  <div class="good_content">
                     <div class="good_title">
                        <h5><span>冷冻雪花肥牛</span>&nbsp;<span>300g</span></h5>
                        <p class="text-muted"><small>内蒙古</small>&nbsp;<small>谷饲</small></p>
                     </div>
                     <img src="../../assets/image/beef.png" alt="">
                  </div>
                  <a href="###">速速去购买></a>
               </div>
               <div class="col-sm-4 p-3  text-dark border">
                  <div class="good_content">
                     <div class="good_title">
                        <h5><span>冷冻雪花肥牛</span>&nbsp;<span>300g</span></h5>
                        <p class="text-muted"><small>内蒙古</small>&nbsp;<small>谷饲</small></p>
                     </div>
                     <img src="../../assets/image/beef.png" alt="">
                  </div>
                  <a href="###">速速去购买></a>
               </div>
               <div class="col-sm-4 p-3 text-dark border">
                  <div class="good_content">
                     <div class="good_title">
                        <h5><span>冷冻雪花肥牛</span>&nbsp;<span>300g</span></h5>
                        <p class="text-muted"><small>内蒙古</small>&nbsp;<small>谷饲</small></p>
                     </div>
                     <img src="../../assets/image/beef.png" alt="">
                  </div>
                  <a href="###">速速去购买></a>
               </div>
             </div>
         </div>
      </div>
   </div>
   <crezybuy class="mt-2"></crezybuy>
   <backtop></backtop>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import navBar from '@/components/header.vue'
import carousel from '@/components/Carousel.vue'
import search from '@/components/Search.vue'
import backtop from '@/components/Backtop.vue'


import crezybuy from '@/views/HomeView/CrazyBuy.vue'
</script>

<style scoped>

.card {
   height: 100%;
}

.card .newrp_bg {
   height: 100%;
   background: linear-gradient(rgba(17, 17, 17, 0.482), rgba(17, 17, 17, 0.425)), url(../../assets/image/beef.png) center no-repeat;
   background-size: cover;
   border-radius: 5px;
}

.content {
   font-family: '宋体';
   color: white;
   height: 100%;
   margin-left: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding-bottom: 1rem;
}

.content .btn {
   width: 35%;
   color: red;
}

.content .btn:hover {
   color: white;
   transform: scale(1.2);
   transition: all 0.5s ease-out;
}

.rp_good span {
   margin: 0 5px 0 5px;
}

.card .row{
   width: 100%;
   margin:0;
   padding:0;
   border-radius: 2px;
}

.good_content img{
   width: 100%;
   height: 100%;
   border-radius: 5px;
}

.good_title{
   background-color: #f5f5f5;
   border-radius: 5px;
   font-family: '宋体';
}


</style>