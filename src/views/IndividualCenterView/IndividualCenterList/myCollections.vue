<template>
    <div class="myCollection ms-2 border rounded p-2">
        <div class="collection_show">
            <div class="thing_show m-2 rounded border" v-for="(item,index) in collections">
                <img :src="'src/assets/image/'+item.image" class="img-fluid rounded" alt="">
                <h6 class="p-0 m-0">
                    <span>名称:</span>
                    <span class="me-2">{{item.name}}</span>
                    <span>{{item.quantity}}</span>
                </h6>
                <h4 class="p-0 m-0">
                    <span>单价:</span>
                    <span>￥{{ item.price }}</span>
                </h4>
                <div class="text-center mb-2">
                    <button class="btn btn-outline-danger mx-auto" @click="delete_collection(index)">取消收藏</button>
                </div>
            </div>
            <div class="text-center" v-if="collections.length == 0">
                <h4>还没有收藏商品哦~~</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useUserStore from '@/stores/user';
import { ElMessage } from 'element-plus'

import { getMyCollectin } from '@/api/getMyCollection';
import { deleteCollection } from '@/api/deleteCollection';

const collections = reactive([]);
const userStore = useUserStore();


const get_collectins = async () =>{
    await getMyCollectin({id: userStore.user.id}).then(response=>{
        console.log(response);
        if(response.data.data == null){
            return
        }else{
            for(var i=0; i<response.data.data.length; i++){
            collections.push(response.data.data[i]);
        }
        }
    })
}

get_collectins();


const delete_collection = async (index)=>{
    await deleteCollection({id: collections[index].id}).then(response=>{
        if(response.data.status == 200){
            ElMessage.success("取消成功");
            collections.length = 0;
            get_collectins();
        }else{
            ElMessage.error("出现异常请联系管理员！")
        }
    })
}
</script>

<style scoped>
.myCollection {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.collection_show {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.thing_show {
    width: 30%;
    background-color: rgba(232, 247, 253, 0.639);
}

.thing_show img {
    width: 250px;
    height: 250px;
}
</style>