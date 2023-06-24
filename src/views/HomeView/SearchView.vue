<template>
    <div>
        <navBar />
        <div class="text-center">
            <search v-model="searchForm.productName"/>
            <el-button class="text-center" @click="searchSubmit">搜索</el-button>
         </div>
         <div class="container mt-2">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div class="col" v-for="(item,index) in products">
                <div class="card shadow-sm">
                  <div class="card_img">
                    <img class="img-fluid rounded border" :src="'src/assets/image/'+item.image" alt=""/>
                  </div>
                  <div class="card-body">
                    <h4 class="card-text">{{ item.name }}</h4>
                    <h5>规格:{{item.quantity}}</h5>
                    <h5>单价:
                        <span class="text-danger">{{item.price}}</span>￥
                    </h5>

                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <router-link :to="{name: 'Buy', params: {id: item.id }}">
                            <button type="button" class="btn btn-sm btn-outline-secondary">去购买</button>
                        </router-link>
                        <button type="button" class="btn btn-sm btn-outline-secondary">收藏</button>
                      </div>

                      <small class="text-dark">
                        销量:
                        <span class="text-danger">99999</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
    </div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { reactive } from 'vue'

import navBar from '@/components/header.vue'
import search from '@/components/Search.vue'

import { searchProduct } from '@/api/searchProduct';
import { ElMessage } from 'element-plus';

const route = useRoute();
let name = route.params.name

const products = reactive([])
const searchForm = reactive({
  productName: '',
})

const search_product = async()=>{
   // console.log(searchForm.productName);
   await searchProduct({name: name}).then(response=>{
      // console.log(response);
         for(var i=0; i<response.data.data.length; i++){
            products.push(response.data.data[i]);
         }
        //  console.log(products);
      
   })
}
search_product();

const searchSubmit = async()=>{
  // console.log(searchForm.productName);
  await searchProduct({name: searchForm.productName}).then(response=>{
    // console.log(response);
    if(response.data.status == 200){
      products.length = 0;
      for(var i=0; i<response.data.data.length; i++){
        products.push(response.data.data[i]);
      }
      ElMessage.success("搜索成功")
    }else{
      ElMessage.error("搜索无结果")
    }
  })
}
</script>

<style lang="scss" scoped>
.card_img{
    width: 100%;
    height: 15rem;
}
.card img{
    width: 100%;
    height: 100%;
}
</style>