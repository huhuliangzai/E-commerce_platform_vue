<template>
    <div class="myInformation ms-2 border rounded p-2">
        <div class="information_content">
            <ul class="p-0 m-0 border rounded" >
                <li class="p-2 m-0 border rounded-top">
                    <strong>用户名:</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>性别:</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>手机号码:</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>我的邮箱:</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>实名认证:</strong>
                </li>
                <li class="p-2 m-0 border rounded-bottom">
                    <strong>我的爱好:</strong>
                </li>
                <li class="p-2 m-0 border rounded-bottom">
                    <strong>我的住址:</strong>
                </li>
            </ul> 
        </div>
        <div class="text-center mt-2">
            <button type="button" class="btn btn-outline-primary">编辑资料</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

import { getMyInformation } from '../../../api/getMyInformation';


// const getInformation = async () =>{
//     await getMyInformation().then(response =>{
//         console.log(response);
//     })
// }

// getInformation();

</script>

<style scoped>
.myInformation {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.information_content ul{
    background-color: rgba(255, 255, 255, 0.617);
}

.information_content ul li{
    height: 3rem;
    display: flex;
    align-items: center;
}
</style>