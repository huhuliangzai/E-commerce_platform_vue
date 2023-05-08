<template>
    <div class="border">
        <h3 class="ps-3 pt-3">
            <i class="bi bi-signpost-split text-danger"></i>
            商品分类
        </h3>
        <el-tabs style="height: 100%;color:red;" class="demo-tabs p-3">
            <el-tab-pane label='牛肉类'>
                <list1></list1>
            </el-tab-pane>
            <el-tab-pane label="猪肉类">
                <list2></list2>
            </el-tab-pane>
            <el-tab-pane label="鸡肉类">
                <list3></list3>
            </el-tab-pane>
        </el-tabs>
    </div>
    
</template>
<script setup>
import { ref } from 'vue';
import list1 from '@/views/HomeView/ListView/list1.vue'
import list2 from '@/views/HomeView/ListView/list2.vue'
import list3 from '@/views/HomeView/ListView/list3.vue'



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
  