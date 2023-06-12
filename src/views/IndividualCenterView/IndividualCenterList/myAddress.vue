<template>
    <div class="myAddress ms-2 border rounded p-2">
        <div class="my_address">
            <ul class="p-0 m-0">
                <li class="p-0 mb-2" v-for="(item, index) in userAddress" :key="index">
                    <span>
                        <strong>地址:</strong>
                        <small>{{ userAddress[index].addressDetail }}</small>
                    </span>
                    <span>
                        <strong>手机号:</strong>
                        <small>{{userAddress[index].phoneNumber}}</small>
                    </span>
                    <span>
                        <strong>收货人:</strong>
                        <small>{{userAddress[index].name}}</small>
                    </span>
                </li>
            </ul>
            <div class="text-center mt-2">
                <button class="btn btn-outline-primary w-25">添加地址</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import useUserStore from '../../../stores/user';
import { getAddress } from '../../../api/getAddress';
import { reactive, ref } from 'vue';

const userStore = useUserStore();
let user = userStore.user

const userId = reactive({
    userId: user.id
});

const userAddress = reactive([]);

const getAddresses =async ()=>{
    await getAddress(userId).then(response=>{
        console.log(response);
        userAddress.push(response.data.data)
    })
}

getAddresses();
console.log(userAddress);
</script>

<style scoped>
.myAddress {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.myAddress ul li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.617);
}
</style>