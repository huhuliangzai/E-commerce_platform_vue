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
                        <small>{{ userAddress[index].phoneNumber }}</small>
                    </span>
                    <span>
                        <strong>收货人:</strong>
                        <small>{{ userAddress[index].name }}</small>
                    </span>
                </li>
                <li class="text-center" v-if="userAddress.length == 0">
                    <h6>添加一个地址吧...</h6>
                </li>
            </ul>
            <div class="text-center mt-2">
                <button type="button" class="btn btn-outline-primary" @click="dialogFormVisible = true">
                    添加地址
                </button>
                

                <el-dialog v-model="dialogFormVisible" title="添加地址">
                    <el-form :model="form">
                        <el-form-item label="地址" :label-width="formLabelWidth">
                            <el-input v-model="form.addressDetail" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="收货人" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="电话号码" :label-width="formLabelWidth">
                            <el-input v-model="form.phoneNumber" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">返回</el-button>
                            <el-button type="primary" @click="insert_address">
                                确认
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script setup>
import useUserStore from '@/stores/user';
import { getAddress } from '@/api/getAddress';
import { reactive, ref } from 'vue';
import { insertAddress } from '@/api/insertAddress';
import { ElMessage } from 'element-plus';


const userStore = useUserStore();
let user = userStore.user

const userId = reactive({
    userId: user.id
});

const userAddress = reactive([]);

const getAddresses = async () => {
    await getAddress(userId).then(response => {
        console.log(response);
        if(response.data.data == null){
            return
        }else{
            for(var i = 0; i < response.data.data.length; i++) {
            userAddress.push(response.data.data[i]);
        }
        }
    })
}

getAddresses();
// console.log(userAddress);

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    userId: user.id,
    addressDetail: '',
    name: '',
    phoneNumber: '',
})

const insert_address = async()=>{
    await insertAddress(form).then(response=>{
        console.log(response);
        if(response.data.status == 200){
            ElMessage.success("添加成功");
            userAddress.length = 0;
            getAddresses();
        }
    })
}

</script>

<style scoped>
.myAddress {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.myAddress ul li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.617);
}

.dialog-footer button:first-child {
    margin-right: 10px;
}

.el-form-item__label{
    color: black!important;
}
</style>