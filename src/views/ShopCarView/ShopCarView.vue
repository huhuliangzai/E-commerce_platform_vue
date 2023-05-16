<template>
    <div id="app">
        <navBar></navBar>
        <search></search>
        <div class="cantainer">
            <div class="row">
                <h5 class="text-danger">
                    <span><strong>全部商品</strong></span>
                    <span class="ps-2">{{obj_goods.length}}</span>
                </h5>
            </div>
            <div class="card" style="width: 100%;">
                <div class="card-header">
                    <ul class="d-flex justify-content-between p-0 m-0">
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="all" @change="allcheck">
                                <label class="form-check-label" for="all">
                                    全选
                                </label>
                            </div>
                        </li>
                        <li>商品</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>小计</li>
                        <li>操作</li>
                    </ul>
                </div>
                <ul class="list-group list-group-flush py-2 mx-3">
                    <li v-for="(item,index) in obj_goods" :key="index">
                        <div class="order_shop border-bottom border-3">
                            <input class="form-check-input" type="checkbox" value="" id="shop_name" name="check">
                            <label class="form-check-label" for="shop_name">
                                <strong>{{item.shop_name}}</strong>
                            </label>
                        </div>
                        <div class="shop_order d-flex">
                            <div class="left d-flex">
                                <input class="form-check-input" type="checkbox" value="" id="shop_name" name="check">
                                <label class="form-check-label d-flex align-items-center" for="shop_name">
                                    <img :src="'src/assets/image/good_show_img/'+item.good_img" alt="">
                                    <h4 class="ms-3">{{ item.good_name }}</h4>
                                </label>
                            </div>
                            <div class="right d-flex align-items-center justify-content-around">
                                <div class="price">
                                    <span>￥{{ item.price }}</span>
                                </div>
                                <div>
                                    <counter v-model="item.order_quantity" @change="letnum(index)"></counter>
                                </div>
                                <div class="total">
                                    <span>￥{{ item.total }}</span>
                                </div>
                                <div class="operate">
                                    <button class="btn">删除</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, } from "vue-router";
import { getCurrentInstance, reactive, ref } from "vue";
import navBar from '@/components/header.vue'
import search from '@/components/search.vue'
import counter from '@/components/counter.vue'

//全选方法
let allcheck = () => {
    var allbtn = document.getElementById('all');
    allbtn.onclick = () => {
        var flag = allbtn.checked;
        var items = document.getElementsByName("check");
        for (var i = 0; i < items.length; i++) {
            items[i].checked = flag;//将所有item的状态设为全选按钮的状态
        }
    }

    var items = document.getElementsByName('check');
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = () => {   //对每个items设置点击事件
            var number = 0;     //记录被选中的个数
            for (var j = 0; j < items.length; j++) {
                if (items[j].checked) {
                    number++;
                }
            }
            document.getElementById('all').checked = (items.length == number);
        }
    }
};

const obj_goods = reactive([
    {
        shop_name: '肉多多',
        good_name: '冷冻雪花肥牛',
        price: 99.00,
        order_quantity: 1,
        total: 0,
        good_img: '6.jpg',
    },
    {
        shop_name: '肉多多2',
        good_name: '冷冻雪花肥牛2',
        price: 99.00,
        order_quantity: 1,
        total: 0,
        good_img: '5.jpg',
    }
])

let letnum = (index)=>{
    obj_goods[index].total = ref(obj_goods[index].order_quantity*obj_goods[index].price)
}

</script>

<style scoped>
.left {
    width: 35%;
    height: 100%;
}

.left label img{
    width: 150px;
    height: 150px;
}

.right {
    width: 65%;
}

.shop_order {
    width: 100%;
}

</style>