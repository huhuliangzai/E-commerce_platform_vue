<template>
    <div class="myInformation ms-2 border rounded p-2">
        <div class="information_content">
            <ul class="p-0 m-0 border rounded" v-for="(item,index) in userInfo">
                <li class="p-2 m-0 border rounded-top">
                    <strong>用户名:{{ item.userName }}</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>性别:{{ item.gender }}</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>手机号码:{{ item.userPhone }}</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>我的邮箱:{{ item.email }}</strong>
                </li>
                <li class="p-2 m-0 border">
                    <strong>实名认证:已认证</strong>
                </li>
                <li class="p-2 m-0 border rounded-bottom">
                    <strong>我的爱好:{{ item.userHabby }}</strong>
                </li>
                <li class="p-2 m-0 border rounded-bottom">
                    <strong>我的住址:{{ item.address }}</strong>
                </li>
            </ul> 
        </div>
        <div class="text-center mt-2">
            <button type="button" class="btn btn-outline-primary" @click="dialogFormVisible = true">
                编辑资料
            </button>
            <el-dialog v-model="dialogFormVisible" title="编辑资料">
                <el-form :model="user">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="user.userName" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-input v-model="user.gender" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="电话号码" :label-width="formLabelWidth">
                        <el-input v-model="user.userPhone" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                        <el-input v-model="user.email" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="爱好" :label-width="formLabelWidth">
                        <el-input v-model="user.userHabby" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                        <el-input v-model="user.address" autocomplete="off" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">返回</el-button>
                        <el-button type="primary" @click="user_editInformation">
                            确认
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
import useUserStore from '@/stores/user';
import { editInformation } from '@/api/editInformation'
import { getUser } from '@/api/getUser'
import { ElMessage } from 'element-plus';

const userStore = useUserStore();

// console.log(users);
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const user = reactive({
    id: userStore.user.id,
    userName: userStore.user.userName,
    gender: userStore.user.gender,
    userPhone: userStore.user.userPhone,
    email: userStore.user.email,
    userHabby: userStore.user.userHabby,
    address: userStore.user.address
})

const userInfo = reactive([]);

const user_editInformation = async () => {
    await editInformation(user).then(response=>{
        // console.log(response);
        if(response.data.status == 200) {
            ElMessage.success("修改成功");
            userInfo.length = 0;
            get_user();
        }else{
            ElMessage.error("修改失败，请与管理员联系");
        }
    })
}

const get_user = async() =>{
    await getUser({id: userStore.user.id}).then(response=>{
        // console.log(response);
        userInfo.push(response.data.data)
        // console.log(userInfo)
    })
}
get_user();

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

:deep(.el-form-item__label){
    color: black!important;
}
</style>