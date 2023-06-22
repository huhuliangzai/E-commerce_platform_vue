<template>
    <div class="border">
        <h3 class="ps-3 pt-3">
            <i class="bi bi-signpost-split text-danger"></i>
            商品分类
        </h3>
        <el-tabs style="height: 100%;color:red;" class="demo-tabs p-3">
            <el-tab-pane :label=category[0]>
                <list1 :label="label"></list1>
            </el-tab-pane>
            <el-tab-pane :label=category[1]>
                <list2 :label="label2"></list2>
            </el-tab-pane>
            <el-tab-pane :label=category[2]>
                <list3 :label="label3"></list3>
            </el-tab-pane>
        </el-tabs>
    </div>
    
</template>
<script setup>
import { ref, reactive } from 'vue';
import list1 from '@/views/HomeView/ListView/list1.vue'
import list2 from '@/views/HomeView/ListView/list2.vue'
import list3 from '@/views/HomeView/ListView/list3.vue'
import {getAllCategory} from '@/api/getAllCategory'

const category = reactive([]);
let label = '';
let label2 = '';
let label3 = '';
const getCategory = async () =>{
    await getAllCategory().then(response =>{
        // console.log(response.data.data);
        for(var i = 0; i < response.data.data.length; i++){
            category.push(response.data.data[i].categoryName);
        }
        label = response.data.data[0].categoryName
        label2 = response.data.data[1].categoryName
        label3 = response.data.data[2].categoryName
    })
};
getCategory();


</script>
<style>
.demo-tabs>.el-tabs__content {
    color: #6b778c;
    font-weight: 600;
}

.el-tabs__item.is-active{
    color: red;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;
}



</style>
  