<template>
    <div>
        <navBar></navBar>
        <div class="container border p-2">
            <div class="row border m-0 title d-flex align-items-center">
                <h3 class="p-0 m-0">我的订单</h3>
            </div>
            <div class="row border m-0 p-0 mt-3 all_orders">
                <el-tabs v-model="activeName" class="demo-tabs">
                    <el-tab-pane label="全部订单" name="first">
                        <allorder/>
                    </el-tab-pane>
                    <el-tab-pane label="待收货/使用" name="second">
                        <ToBeReceived/>
                    </el-tab-pane>
                    <el-tab-pane label="待评价" name="third">
                        <BeEvaluated/>
                    </el-tab-pane>
                  </el-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink,RouterView } from "vue-router";
import { ref } from 'vue'

import navBar from '@/components/header.vue'
import allorder from './OrderList/AllOrder.vue'
import ToBeReceived from "./OrderList/ToBeReceived.vue";
import BeEvaluated from "./OrderList/BeEvaluated.vue";

const activeName = ref('first')
</script>

<style scoped>

.title{
    width: 100%;
    height: 50px;
    background-color: rgb(234, 239, 245);
}

.demo-tabs > .el-tabs__content {
    color: #6b778c;
    font-weight: 600;
    
}
</style>