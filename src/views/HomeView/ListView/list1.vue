<template>
    <div class="good_list d-inline-flex rounded">
        <div class="good_advertis">
            <img class="rounded-top img-fluid" src="../../../assets/image/category_beef/advertis1.jpg" alt="">
            <div class="good_advertis_bottom">
                <img class=" rounded-bottom img-fluid" src="../../../assets/image/category_beef/advertis2.jpg" alt="">
                <div class="good_advertis_bottom_content text-center text-white p-2 rounded-bottom">
                    <h4>新鲜美味</h4>
                    <p>全程把控&nbsp;放心之选</p>
                    <router-link to="/home/buy"><button
                            class="btn-big rounded-pill bg-white border-0 px-3 py-2 text-pink">立即抢购<i
                                class="bi bi-arrow-right-circle"></i></button></router-link>
                </div>
            </div>
        </div>
        <div class="good_show mx-1 rounded p-1 text-center d-flex flex-wrap">

            <div class="good_show_img m-1 pt-1" v-for="(item, index) in good_show" :key="index">
                <router-link :to="{name: 'Buy', params: {id: item.id }}">
                    <img class="img_fluid border" :src="'src/assets/image/' + item.image" alt="">
                </router-link>
                <p class="p-0 m-0"><span>{{ item.name }}</span></p>
                <p class="m-0 text-danger">￥{{ item.price }}</p>
            </div>

        </div>


        <div class="hot_sale">
            <div class="card rounded-0" style="width: 100%;">
                <div class="card-header rounded-0">
                    <p class="p-0 m-0"> <i class="bi bi-rocket-fill text-danger"></i>热销推荐</p>
                </div>
                <ul class=" p-0 m-0 d-flex flex-column ">
                    <li class="p-2 mt-1 d-flex align-items-center border" v-for="(item, index) in hot_sale" :key="index">
                        <img class="hot_sale_img " :src="'src/assets/image/' + item.image" alt="">
                        <p class="text-start ms-2" style="white-space: nowrap; overflow:hidden;text-overflow:ellipsis">
                            <small>{{ item.name }}</small><br>
                            <span class="p-1">{{ item.weight }}</span><br>
                            <span class="text-danger">￥{{ item.price }}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';

import { getProducts } from '@/api/getProducts';
import { getHotSaleAndCrazyProducts } from '@/api/getHotSaleAndCrazyProducts';

const good_show = reactive([]);

const hot_sale = reactive([])

const props = defineProps({
    label: String
})

let setCategoryName = ({
    categoryName: ''
});


const getCategory = () => {
    // console.log("1我是分类名：", props.label);
    setCategoryName.categoryName = props.label
    // console.log(setCategoryName);
}

const get_products = async () => {
    await getProducts(setCategoryName).then(response =>{
        console.log(response);
        for (let i = 0; i < response.data.data.length; i++) {
            good_show.push(response.data.data[i])
        }
        // console.log(good_show);
    });
}

const get_hotsales = async () =>{
    await getHotSaleAndCrazyProducts({categoryName: "热销"}).then(response => {
        // console.log(response);
        for (let i = 0; i < response.data.data.length;i++) {
            hot_sale.push(response.data.data[i])
        }
    })
}
    

setTimeout(() => {
    getCategory();
    get_hotsales();
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
    width: 100%;
    height: 100%;
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
    background-color: #da443dc7;
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
    width: 60%;
    height: 100%;
}

.good_show_img {
    width: 32%;
    height: 50%;
}

.good_show_img img {
    width: 17vw;
    height: 32vh;
}

.hot_sale {
    width: 20%;
}

ul {
    width: 100%;
    height: 100%;
}

ul li {
    width: 100%;
    height: 24vh;
    overflow: hidden;
}

.hot_sale_img {
    width: 50%;
}
</style>