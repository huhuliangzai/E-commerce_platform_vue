<template>
    <div class="good_list d-inline-flex rounded">
        <div class="good_advertis">
            <img class="rounded-top img-fluid" src="../../../assets/image/category_pig/advertise2.jpg" alt="">
            <div class="good_advertis_bottom">
                <img class=" rounded-bottom img-fluid" src="../../../assets/image/category_pig/advertise1.jpg" alt="">
                <div class="good_advertis_bottom_content text-center text-white p-2 rounded-bottom">
                    <h4>新鲜美味</h4>
                    <p>全程把控&nbsp;放心之选</p>
                    <router-link to="/home/buy"><button
                            class="btn-big rounded-pill bg-white border-0 px-3 py-2 text-pink">立即抢购<i
                                class="bi bi-arrow-right-circle"></i></button></router-link>
                </div>
            </div>
        </div>
        <div class="good_show px-2 rounded d-flex flex-wrap justify-content-between">
            
            <div class="good_show_img mx-2" v-for="(item,index) in good_show" :key="index">
                <router-link :to="{name: 'Buy', params: {id: item.id }}">
                    <img class="rounded border" :src="'src/assets/image/'+item.image" alt="">
                </router-link>
                
                <p class="p-0 m-0 text-center">
                    <span class="pe-2">{{item.name}}</span>
                    <span>{{item.weight}}</span>
                </p>
                <p class="p-0 m-0 text-center">
                    <span class="text-danger">￥{{item.price}}</span>
                </p>
            </div>

            <div class="good_show_bottom d-flex">
                <div class="good_show_advertise mx-2 mt-4 mb-2 rounded ">
                    <img class="rounded img-fluid" src="../../../assets/image/category_pig/advertise3.jpg" alt="">
                    <div class="good_show_advertise_content rounded d-flex flex-column justify-content-center align-items-end">
                        <h3 class="me-5">
                            <strong class="text-white">精品猪副产品</strong>
                        </h3>
                        <span class="text-white me-5">农场直供的美味</span>
                    </div>
                </div>

                <div class="good_show_advertise ms-4 mt-4 mb-2  rounded ">
                    <img class="rounded img-fluid" src="../../../assets/image/category_pig/advertise4.jpg" alt="">
                    <div class="good_show_advertise_content rounded d-flex flex-column justify-content-center align-items-end">
                        <h3 class="me-5">
                            <strong class="text-white">散养黑猪猪肉</strong>
                        </h3>
                        <span class="text-white me-5">甄选优质品质,健康美味</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';

import { getProducts } from '../../../api/getProducts';

const good_show = reactive([]);


const props = defineProps({
    label: String
})

let setCategoryName = ({
    categoryName: ''
});


const getCategory = () => {
    // console.log("2我是分类名：", props.label);
    setCategoryName.categoryName = props.label
    // console.log(setCategoryName);
}

const get_products = async () => {
    await getProducts(setCategoryName).then(response =>{
        // console.log(response);
        for (let i = 0; i < response.data.data.length; i++) {
            good_show.push(response.data.data[i])
        }
        // console.log(good_show);
    });
}
    
setTimeout(() => {
    getCategory();
    get_products();
}, 1000);
</script>

<style lang="scss" scoped>
.good_list {
    width: 100%;
}

.good_advertis {
    width: 20%;
    height: 100%;
}

.good_advertis img {
    width: 230px;
    height: 342px;
}

.good_advertis_bottom {
    width: 100%;
    height: 100%;
    position: relative;
}

.good_advertis_bottom img {
    width: 100%;
    height: 100%;
}

.good_advertis_bottom_content {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    z-index: 1;
    background-color: #f4817995;
    width: 100%;
    height: 100%;
}

.text-pink {
    color: #eb716b;
}

.btn-big:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
}


.good_show {
    width: 80%;
    height: max-content;
}


.good_show_img {
    width: 22%;
    height: 100%;
}

.good_show_img img {
    width: 17vw;
    height: 32vh;
}

.good_show_bottom{
    width: 100%;
    height: 100%;
}

.good_show_advertise {
    width: 48%;
    height: 39vh;
    background-color: aqua;
    position: relative;
}

.good_show_advertise img {
    width: 100%;
    height: 100%;
}

.good_show_advertise_content {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    z-index: 1;
    background: linear-gradient(to left, #000000be, #fdfcfc79);
    width: 100%;
    height: 100%;
}
</style>