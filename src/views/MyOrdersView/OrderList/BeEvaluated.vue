<template>
    <div class="row p-0 m-0">
        <div class="card p-0 m-0">
            <div class="card-header p-0 m-0 py-2 d-flex justify-content-end" >
                <ul class="d-flex p-0 m-0 justify-content-around" style="width: 65%;">
                    <li>收货地址</li>
                    <li>收货人</li>
                    <li>金额</li>
                    <li>订单状态</li>
                </ul>
            </div>
            <div class="d-flex card-body p-0 m-0 mb-2" style="height: 100px;" v-for="(item,index) in Orders">
                <div class="left d-flex justify-content-center align-items-center">
                    <h4 class="ms-2">
                        <span>{{item.productName}}</span><br/>
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
                        <span>￥{{ item.orderTotal }}</span>
                    </div>
                    <div class="order_status">
                        <button class="btn btn-sm btn-outline-primary">去评价</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getAllorders } from '@/api/getAllOrders';
import { reactive, ref } from 'vue'
import useUserStore  from '@/stores/user';

const userStore = useUserStore();

// console.log(userStore.user);

const Orders = reactive([]);

const getOrdres = async() =>{
    await getAllorders({id: userStore.user.id}).then(response=>{
        // console.log(response);
        if(response.data.data == null){
            return
        }else{
            for(var i = 0; i <response.data.data.length; i++){
            if(response.data.data[i].status === "1"){
                Orders.push(response.data.data[i]);
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