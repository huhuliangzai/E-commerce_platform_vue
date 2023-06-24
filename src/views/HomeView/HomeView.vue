<template>
   <navBar />
   <carousel></carousel>
   <div class="text-center">
      <search v-model="searchForm.productName" />
      <el-button class="text-center" @click="search_product">搜索</el-button>
   </div>
   <div class="row row-deck row-cards">
      <div class="col-md-6 col-lg-4 my-2">
         <div class="card">
            <div class="newrp_bg img-fluid">
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
               <div class="col-sm-4 p-3 text-dark border" v-for="(item, index) in hot_push" :key="index">
                  <div class="good_content">
                     <div class="good_title">
                        <h5><span>{{ item.name }}</span>&nbsp;<span>{{ item.weight }}</span></h5>
                        <p class="text-muted"><small>产地:</small><small></small></p>
                     </div>
                     <img :src="'src/assets/image/' + item.image" alt="">
                  </div>
                  <router-link :to="{name: 'Buy', params: {id: item.id }}">速速去购买></router-link>
               </div>
            </div>
         </div>
      </div>
   </div>
   <crezybuy class="mt-2"></crezybuy>
   <backtop></backtop>
   <goodlist></goodlist>
</template>

<script setup>
import { RouterLink, } from 'vue-router';
import { reactive,} from 'vue';
import { useRouter } from 'vue-router'

import { getHotSaleAndCrazyProducts } from '@/api/getHotSaleAndCrazyProducts';
import { searchProduct } from '@/api/searchProduct';

import navBar from '@/components/header.vue'
import carousel from '@/components/Carousel.vue'
import search from '@/components/Search.vue'
import backtop from '@/components/Backtop.vue'
import crezybuy from '@/views/HomeView/CrazyBuy.vue'
import goodlist from '@/views/HomeView/Goodlist.vue'
import { ElMessage } from 'element-plus';

const hot_push = reactive([])

const get_crazybuy = async () =>{
    await getHotSaleAndCrazyProducts({categoryName: "热推"}).then(response => {
      //   console.log(response);
        for (let i = 0; i < response.data.data.length;i++) {
         hot_push.push(response.data.data[i])
        }
    })
}

get_crazybuy();

const searchForm = reactive({
   productName: '',
})

const router = useRouter()

const toPage = () => {
  router.push({
    name: 'Search',
    params: {
      name: searchForm.productName
    }
  })
}

const search_product = async()=>{
   // console.log(searchForm.productName);
   await searchProduct({name: searchForm.productName}).then(response=>{
      // console.log(response);
      if(response.data.status == 200){
         toPage()
      }else{
         ElMessage.error("搜索无结果");
      }
   })
}
</script>

<style scoped>
.card {
   height: 100%;
}

.card .newrp_bg {
   height: 100%;
   background: linear-gradient(rgba(17, 17, 17, 0.482), rgba(17, 17, 17, 0.425)), url(../../assets/image/hot_push/advertise.jpg) center no-repeat;
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

.card .row {
   width: 100%;
   margin: 0;
   padding: 0;
   border-radius: 2px;
}

.good_content img {
   width: 100%;
   height: 100%;
   border-radius: 5px;
}

.good_title {
   background-color: #f5f5f5;
   border-radius: 5px;
   font-family: '宋体';
}
</style>