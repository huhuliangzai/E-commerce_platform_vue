<template>
    <div id="app">
        <navBar></navBar>
        <search></search>
        <div class="cantainer">
            <div class="row">
                <h5 class="text-danger">
                    <span><strong>全部商品</strong></span>
                    <span class="ps-2">0</span>
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
                    <li>
                        <div class="order_shop border-bottom border-3">
                            <input class="form-check-input" type="checkbox" value="" id="shop_name" name="check">
                            <label class="form-check-label" for="shop_name">
                                <strong>肉多多</strong>
                            </label>
                        </div>
                        <div class="shop_order d-flex">
                            <input class="form-check-input me-3" type="checkbox" value="" id="shop_order" name="check">
                            <label class="form-check-label d-flex align-items-center justify-content-between" for="shop_order">
                                <div class="order_information d-flex align-items-center">
                                    <img src="../../assets/image/good_show_img/4.jpg" alt=""/>
                                    <h5><span>{{obj_good.name}}</span><span>300g</span></h5>
                                </div>
                                <div class="good_price">
                                    <span>￥{{obj_good.price}}</span>
                                </div>
                                <div class="good_quantity">
                                    <counter></counter>
                                </div>
                                <div class="order_total pe-2">
                                    <span>￥{{obj_good.total}}</span>
                                </div>
                                <div class="order_operate">
                                    <button class="btn">删除</button>
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, } from "vue-router";
import { reactive } from "vue";
import navBar from '@/components/header.vue'
import search from '@/components/search.vue'
import counter from '@/components/counter.vue'

//全选方法
let allcheck = ()=> {
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
                if(items[j].checked){
                    number++;
                }
            }
            document.getElementById('all').checked = (items.length == number);
        }
    }
};

const handleChange = (value) => {
    console.log(value)
  }

const obj_good = reactive(
    {
    name: '冷冻雪花肥牛',
    price: 99.00,
    total: 0
    },
)

</script>

<style scoped>
.shop_order{
    width: 100%;
}

.shop_order label{
    width: 100%;
}

.order_information{
    width: 23%;
}

.order_information img{
    width: 150px;
    height: 150px;
}
</style>