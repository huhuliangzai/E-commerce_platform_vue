<template>
    <div class="pb-2" v-for="(item,index) in obj_good">
        <navbar/>
        <div class="panel panel-default border">
            <div class="panel-body border d-flex justify-content-between">
                <div class="left me-2 p-2">
                    <div class="buy_img">
                        <img class="img-fluid rounded border" :src="'src/assets/image/'+item.image" alt="">
                    </div>

                    <div class="operate mt-3">
                        <ul class="d-inline-flex p-0 m-0">
                            <li class="m-2"><i class="bi bi-star"></i>收藏</li>
                            <li class="m-2"><i class="bi bi-share"></i>分享</li>
                            <li class="m-2"><i class="bi bi-chat-dots"></i>在线客服</li>
                        </ul>
                    </div>
                </div>
                <div class="right ps-5 pt-4">
                    <div class="title d-flex flex-row">
                        <div class="code_track d-inline-flex">
                            <h5 class="p-0 m-0">
                                <span>{{item.name}}</span>
                                <i class="bi bi-qr-code"></i>
                            </h5>
                            <div class="buy_code">
                                <img class="img-fluid" src="../../assets/image/buy_code/冷冻雪花牛肉.png" alt="">
                                <p class="p-0 m-0 text-center text-info">扫码溯源</p>
                            </div>
                        </div>
                    </div>
                    <div class="collect my-3 ps-4">
                        <h6><span>收藏:</span><span class="ps-1">0</span></h6>
                    </div>
                    
                    <div class="buy_information pt-1 ps-4">
                        <p><span>价格:￥</span><span class="text-danger h3" id="price">{{item.price}}</span></p>
                        <p>
                            <span>优惠:</span>
                            <span><svg data-v-877c0452="" t="1683035524861" class="icon p-0 m-0" viewBox="0 0 1024 1024"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3367" width="30" height="20">
                                    <path data-v-877c0452=""
                                        d="M1009.770667 393.536C1018.282667 390.528 1024 382.464 1024 373.397333l0-131.242667c0-52.352-42.56-94.976-94.912-94.976L94.976 147.178667c-52.352 0-94.954667 42.624-94.954667 94.976l0 131.242667c0 9.045333 5.696 17.130667 14.250667 20.138667C64.426667 411.264 98.133333 458.858667 98.133333 512c0 53.12-33.706667 100.757333-83.882667 118.506667C5.696 633.450667 0 641.578667 0 650.624l0 131.242667c0 52.330667 42.602667 94.954667 94.954667 94.954667L929.066667 876.821333c52.330667 0 94.933333-42.624 94.933333-94.954667l0-131.242667c0-9.045333-5.674667-17.130667-14.229333-20.117333-50.218667-17.749333-83.946667-65.365333-83.946667-118.506667S959.552 411.285333 1009.770667 393.536zM883.114667 512c0 66.048 38.869333 125.717333 98.154667 152.981333l0 116.885333c0 28.778667-23.402667 52.202667-52.202667 52.202667L94.954667 834.069333c-28.8 0-52.224-23.424-52.224-52.202667l0-116.885333c59.264-27.264 98.133333-86.933333 98.133333-152.981333 0-66.048-38.869333-125.738667-98.133333-152.981333l0-116.864c0-28.8 23.402667-52.224 52.224-52.224L929.066667 189.930667c28.778667 0 52.202667 23.402667 52.202667 52.224l0 116.864C921.962667 386.282667 883.114667 445.952 883.114667 512z"
                                        p-id="3368" fill="#d81e06"></path>
                                    <path data-v-877c0452=""
                                        d="M683.690667 392.533333l-144.682667 0 86.293333-86.208c8.384-8.362667 8.384-21.888 0-30.229333-8.341333-8.341333-21.824-8.341333-30.208 0L512 359.104l-83.008-82.986667c-8.384-8.362667-21.866667-8.362667-30.208 0-8.362667 8.362667-8.362667 21.866667 0 30.208l86.229333 86.208-144.768 0c-11.776 0-21.354667 9.557333-21.354667 21.354667 0 11.797333 9.578667 21.376 21.354667 21.376l150.4 0 0 79.893333L364.8 515.157333c-11.818667 0-21.376 9.557333-21.376 21.376 0 11.818667 9.557333 21.333333 21.376 21.333333l125.845333 0 0 174.869333c0 11.84 9.557333 21.376 21.354667 21.376 11.84 0 21.376-9.578667 21.376-21.376L533.376 557.866667l125.76 0c11.861333 0 21.418667-9.536 21.418667-21.333333s-9.536-21.376-21.376-21.376l-125.781333 0 0-79.893333 150.357333 0c11.776 0 21.312-9.6 21.312-21.376C705.045333 402.112 695.509333 392.533333 683.690667 392.533333z"
                                        p-id="3369" fill="#d81e06"></path>
                                </svg></span>
                            <span>5元优惠卷,满50可用</span>
                        </p>
                    </div>

                    <div class="quantity">
                        <p>
                            <span>购买数量:</span>
                            <counter></counter>
                            <span class="ps-2">库存量:</span><span>100</span><br>
                        </p>
                    </div>

                    <div>
                        <button class="text-danger bg-white border border-danger m-2 p-2 rounded"><i class="bi bi-cart-plus text-danger"></i>加入购物车</button>
                        <button class="m-2 p-2 text-white bg-danger border-0  rounded">立即购买</button>
                    </div>

                    <div>
                        <p>
                            <span class="m-3">产品保证</span>
                            <span class="m-3"><i class="bi bi-check-circle text-danger"></i>正品保证</span>
                            <span class="m-3"><i class="bi bi-check-circle text-danger"></i>快速发货</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <el-tabs type="border-card">
                <el-tab-pane label="产品详情">
                    <p>{{ item.description }}</p>
                </el-tab-pane>
                <el-tab-pane label="销售记录">
                    <el-table :data="tableData" style="width: 100%;">
                        <el-table-column prop="name" label="买家" width="180" />
                        <el-table-column prop="quantity" label="数量" width="180" />
                        <el-table-column prop="date" label="成交时间" />
                      </el-table>
                </el-tab-pane>
              </el-tabs>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import navbar from '@/components/header.vue'
import counter from '@/components/Counter.vue'

import { getProductById } from '../../api/getProductById'

import { reactive} from 'vue'

const obj_good = reactive([]);

const tableData = [
  {
    name: 'Tom',
    quantity: 99,
    date: '2016-05-03',
  },
  {
    name: 'Tom',
    quantity: 99,
    date: '2016-05-03',
  },
]

const route = useRoute();

let id = route.params.id;

console.log("我是Id", id);

const getProduct = async () =>{
    await getProductById({id}).then(response=>{
        console.log(response.data);
        obj_good.push(response.data.data[0]);
    })
    console.log(obj_good);
}

getProduct();
</script>


<style lang="scss" scoped>
.left {
    width: 40%;
}

.left .buy_img img {
    width: 100%;
    height: 100%;
}

.operate ul li:hover{
    cursor: pointer;
}

.right {
    width: 60%;
}

.title {
    width: 90%;
    height: 20%;
    border-bottom: 1px solid #eeeeee;
}

.collect {
    width: 90%;
    height: 15%;
    border-bottom: 1px solid #eeeeee;
}

.buy_code {
    width: 20%;
    height: 20%;
    display: none;
}

.code_track:hover .buy_code {
    display: block;
}

</style>