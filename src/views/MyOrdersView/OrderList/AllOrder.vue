<template>
    <div class="row p-0 m-0">
        <div class="card p-0 m-0">
            <div class="card-header p-0 m-0 py-2 d-flex justify-content-end">
                <ul class="d-flex p-0 m-0 justify-content-around" style="width: 65%;">
                    <li>收货地址</li>
                    <li>收货人</li>
                    <li>金额</li>
                    <li>订单状态</li>
                </ul>
            </div>
            <div class="d-flex card-body p-0 m-0 mb-2" style="height: 100px;" 
                v-for="(item,index) in Orders">
                <div class="left d-flex justify-content-center align-items-center">
                    <button class="btn btn-sm p-0 m-0 btn-outline-danger  ">删除订单</button>
                    <h4 class="ms-2">
                        <span>{{item.productName}}</span><br>
                        <span>共 <span class="text-danger">{{item.quantity}}</span> 件</span>  
                    </h4>
                    
                </div>
                <div class="right ms-2 d-flex justify-content-around align-items-center text-center rounded">
                    <div class="order_details">
                        <p class="m-0 p-0">
                            <small>
                                <strong>配送至:</strong>
                                <span>{{item.shippingAddress}}</span>
                            </small>
                        </p>
                    </div>
                    <div class="order_Receiver">
                        <span>{{item.receiver}}</span>
                    </div>
                    <div class="order_amount">
                        <span>￥{{item.orderTotal}}</span>
                    </div>
                    <div class="order_status">
                        <span>{{item.status}}</span>
                    </div>
                </div>
            </div>
            <div class="text-center" v-if="Orders.length == 0">
                <h4>我要去
                    <RouterLink to='home' >Shopping!!!</RouterLink>
                </h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'


import { getAllorders } from '@/api/getAllOrders';
import { ElMessage } from 'element-plus'
import useUserStore  from '@/stores/user';

const userStore = useUserStore();

// console.log(userStore.user);

const Orders = reactive([]);

const getOrdres = async() =>{
    await getAllorders({id: userStore.user.id}).then(response=>{
        console.log(response);
        if(response.data.data == null){
            ElMessage.error("你还没有下过单哦~~")
        }else{
            for(var i = 0; i <response.data.data.length; i++){
            Orders.push(response.data.data[i]);
            if(Orders[i].status === "1"){
                Orders[i].status =ref("已收货")
            }else if(Orders[i].status === "2"){
                Orders[i].status =ref("配送中")
            }else{
                Orders[i].status =ref("待收货")
            }
        }
        }
        // console.log(Orders);
    })
}

getOrdres();
</script>

<style lang="scss" scoped>

.left{
    width: 35%;
}

.left img{
    width: 100px;
    height: 100px;
}

.right{
    width: 65%;
    background-color: rgb(194, 249, 230);
}

.right div{
    width: 25%;
}
</style>