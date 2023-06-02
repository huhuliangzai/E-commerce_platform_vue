<template>
    <div>
        <el-carousel :interval="3000" type="card" height="300px">
            <el-carousel-item v-for="item in carsoul_img" :key="item" class="rounded">
              <div class="carousel_img">
                <img :src="'src/assets/image/carsoul_img/'+item" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
import { getCarouselImg } from '../api/getCarouselImg';


const carsoul_img = reactive([]);

const getCarousel = async ()=> {
  await getCarouselImg().then(response =>{
    // console.log(response.data.data)
    for (var i=0; i<response.data.data.length;i++){
      carsoul_img.push(response.data.data[i].imgName);
    }
    // console.log(carsoul_img)
  })
};

getCarousel();
</script>

<style scoped>
.carousel_img{
  width: 590px;
  height: 300px;
}
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .carousel_img img{
    width: 100%;
    height: 100%;
  }
</style>