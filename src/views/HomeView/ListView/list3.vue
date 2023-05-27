<template>
    <div class="good_list d-inline-flex rounded">
        <div class="good_advertis">
            <img class="rounded-top img-fluid" src="../../../assets/image/category_chicken/advertise1.jpg" alt="">
            <div class="good_advertis_bottom">
                <img class=" rounded-bottom img-fluid" src="../../../assets/image/category_chicken/advertise2.jpg" alt="">
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
            <div class="good_show_img mx-2 mb-4" v-for="(item,index) in good_show" :key="index">
                <img class="rounded border" :src="'src/assets/image/category_chicken/'+item.img" alt="">
                <p class="p-0 m-0 text-center">
                    <span class="pe-2">{{item.name}}</span>
                    <span>{{item.weight}}</span>
                </p>
                <p class="p-0 m-0 text-center">
                    <span class="text-danger">￥{{item.price}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive} from 'vue'

const good_show = reactive([
    {
        name: '白羽鸡胸肉',
        weight: '1000g',
        price: '45.00',
        img: '1.jpg'
    },
    {
        name: '白羽鸡全腿',
        weight: '500g',
        price: '50.00',
        img: '2.jpg'
    },
    {
        name: '白羽鸡翅根',
        weight: '500g',
        price: '55.00',
        img: '3.jpg'
    },
    {
        name: '白羽鸡中翅',
        weight: '500g',
        price: '65.00',
        img: '4.jpg'
    },
    {
        name: '白羽鸡爪',
        weight: '750g',
        price: '80.00',
        img: '5.jpg'
    },
    {
        name: '白羽鸡胗',
        weight: '500g',
        price: '80.00',
        img: '6.jpg'
    },
    {
        name: '鸡腿肉丁',
        weight: '500g',
        price: '45.00',
        img: '7.jpg'
    },
    {
        name: '白羽鸡翅尖',
        weight: '500g',
        price: '35.00',
        img: '8.jpg'
    },
])
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
    background-color: #fdbab695;
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