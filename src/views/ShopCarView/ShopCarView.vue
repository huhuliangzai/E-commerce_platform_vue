<template>
    <div id="app">
        <navBar></navBar>
        <div class="cantainer">
            <div class="row">
                <h5 class="text-danger">
                    <span><strong>全部商品</strong></span>
                    <span class="ps-2">{{ obj_goods.length }}</span>
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
                    <li v-for="(item, index) in obj_goods" :key="index">
                        <div class="shop_order d-flex mb-2 border">
                            <div class="left d-flex">
                                <input class="form-check-input me-2" type="checkbox" value="" id="shop_name" name="check">
                                <label class="form-check-label d-flex align-items-center" for="shop_name">
                                    <img :src="'src/assets/image/' + item.image" alt="">
                                    <h4 class="ms-3">{{ item.productName }}</h4>
                                </label>
                            </div>
                            <div class="right d-flex align-items-center justify-content-around">
                                <div class="price">
                                    <span>￥{{ item.productPrice }}</span>
                                </div>
                                <div>
                                    <counter :min="1" v-model="item.quantity" @change="letnum(index)"></counter>
                                </div>
                                <div class="total">
                                    <span>￥{{ item.total }}</span>
                                </div>
                                <div class="operate">
                                    <button class="btn" @click="removeItem(index)">删除</button>
                                    <button class="btn">下单</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-if="obj_goods.length == 0">
                        <h1 class="text-center">空空如也~</h1>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, } from "vue-router";
import navBar from '@/components/header.vue'
import counter from '@/components/Counter.vue'
import { reactive,ref } from 'vue'
import { ElMessage } from 'element-plus'

import pinia from '@/stores/store'
import useUserStore from '@/stores/user';

import { getCartItems } from '@/api/getCartItems'
import { deleteCartItem } from "@/api/deleteCartItem";


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

//计算总价
let letnum = (index) => {
    obj_goods[index].total = obj_goods[index].quantity * obj_goods[index].productPrice;
    console.log(obj_goods[index]);
}

const obj_goods = reactive([])

//删除订单
const removeItem =async (index) => {
    if (obj_goods.length < 2) {
        var r = confirm('这是最后一个了,确认删除吗?');
        if (r == true) {
            obj_goods.splice(index, 1)
        } else {
            return;
        }
    }else{
        await deleteCartItem({id: obj_goods[index].id}).then(response=>{
            console.log(response);
        })
        obj_goods.splice(index, 1);
    }
}

const userStore = useUserStore(pinia);
// console.log(userStore.user);

let id = userStore.user.id

const getCartItemsProducts = async () =>{
    await getCartItems({id}).then(response=>{
        // console.log(response);
        if(response.data.data == null){
            ElMessage.error("购物车空空如也哦~~")
        }else{
                for(let i = 0; i < response.data.data.length; i++){
                obj_goods.push(response.data.data[i])
            }
        }
    })
}
getCartItemsProducts();

// console.log(obj_goods);

</script>

<style scoped>
.left {
    width: 35%;
    height: 100%;
}

.left label img {
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