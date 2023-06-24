<template>
    <div>
        <navBar></navBar>
        <div class="container p-2">
            <div>
                <h4 class="mb-3"><strong>选择收货地址</strong></h4>
                <div class="d-flex align-items-center px-5">
                    <div class="d-flex align-items-center w-50">
                        <h6><strong>填写地址:</strong></h6>
                        <div class="w-75">
                            <el-input v-model="inptuFrom.address" placeholder="Please input" clearable />
                        </div>
                    </div>
                    <div class="d-flex align-items-center w-50">
                        <h6><strong>填写收货人:</strong></h6>
                        <div class="w-75">
                            <el-input v-model="inptuFrom.receiver" placeholder="Please input" clearable />
                        </div>
                        <h6><strong>填写收货人号码:</strong></h6>
                        <div class="w-75">
                            <el-input v-model="inptuFrom.phone" placeholder="Please input" clearable />
                        </div>
                    </div>
                </div>
            </div>
            <h4><strong>确认订单信息</strong></h4>
            <div class="card" style="width: 100%;">
                <div class="card-header">
                    <ul class="d-flex justify-content-between p-0 m-0">
                        <li>商品</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>小计</li>
                    </ul>
                </div>
                <ul class="list-group list-group-flush py-2 mx-3">
                    <li v-for="(item, index) in productItem" :key="index">
                        <div class="shop_order d-flex mb-2">
                            <div class="left">
                                <img :src="'src/assets/image/' + item.image" alt="">
                                <h4>{{ item.productName }}</h4>
                            </div>
                            <div class="right d-flex align-items-center justify-content-between">
                                <div class="price">
                                    <span>￥{{ item.productPrice }}</span>
                                </div>
                                <div>
                                    <counter :min="1" v-model="item.quantity" @change="letnum(index)"></counter>
                                </div>
                                <div class="total">
                                    <span>￥{{ item.total }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="w-100 mt-3 rounded d-flex justify-content-end">
                <div class="order_card border rounded d-flex flex-column align-items-end p-2"
                 v-for="(item, index) in productItem">
                    <h5><strong>实付款:￥<span class="text-danger">{{ item.total }}</span></strong></h5>
                    <h4>
                        <strong>寄送至:<small>{{ inptuFrom.address }}</small> 
                        <span v-if="inptuFrom.address === '' ">地址为空！！！</span> 
                        </strong>
                    </h4>
                    <h4>
                        <strong>收货人: <small>{{ inptuFrom.receiver }}</small>
                                        <small class="ps-2">{{ inptuFrom.phone }}</small>
                            <span v-if="inptuFrom.receiver === '' " >不能为空！！！</span>
                        </strong>
                    </h4>
                    <button class="mt-4 btn btn-outline-danger" @click="submitOrder">确认订单</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import useUserStore from '@/stores/user';

import navBar from '@/components/header.vue'
import { reactive, ref } from 'vue';

import { getItem } from '@/api/getItem'
import { createOrder } from '@/api/createOrder'
import { ElMessage } from 'element-plus';

const route = useRoute();

let id = route.params.id;

const userStore = useUserStore();
let user = userStore.user

const inptuFrom = reactive({
    address: '',
    receiver: '',
    phone: '',
})
const productItem = reactive([])

const Item = async()=>{
    await getItem({id: id}).then(response=>{
        // console.log(response);
        productItem.push(response.data.data[0])
    })
}
Item();

const submitOrder = async()=>{
    const orderFrom = reactive(
    {
        userId: user.id,
        itemId: id,
        receiver: inptuFrom.receiver,
        shippingAddress: inptuFrom.address,
        status: 2
    }
)
    console.log(orderFrom);
    await createOrder(orderFrom).then(response =>{
        console.log(response);
        if(response.data.status == 200){
            ElMessage.success("下单成功");
        }else{
            ElMessage.error("下单失败,请检查输入")
        }
    })
}
</script>

<style scoped>
.left {
    width: 35%;
    height: 100%;
}

.left img {
    width: 150px;
    height: 150px;
}

.right {
    width: 65%;
}

.shop_order {
    width: 100%;
}

.order_card{
    width: 400px;
    height: 200px;
}
</style>