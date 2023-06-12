<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="50px" class="demo-ruleForm"
        style="color: white;">
        <el-form-item label="账号:" prop="userName">
            <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
        </el-form-item>
        <div class="d-flex w-100 align-items-center justify-content-around mb-2">
            <span>验证码:</span>
            <el-input v-model="state.InfoVerify" type="text" class="w-25" />
            <ImgVerify ref="verifyRef"/>
        </div>
        <el-form-item label="密码:" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="w-100">
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref, } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { login } from '../../../api/login'
import ImgVerify  from '../../../components/ImgVerify.vue'

import { Router, useRouter } from 'vue-router';
import useUserStore from "../../../stores/user";

const router = useRouter();
const userStore:any = useUserStore();

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号！！'))
    } else {
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空！！'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    userName: '',
    password: '',
})

const state = reactive({
    InfoVerify: '',
})


const rules = reactive<FormRules>({
    userName: [{ validator: validatePass, trigger: 'blur' }],
    password: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    const verify = sessionStorage.getItem('verify');
    // console.log(verify, state.InfoVerify.toUpperCase());
    if(state.InfoVerify.toUpperCase() !== verify){
        ElMessage.error("验证码不正确！！")
        return
    }
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!');
            // console.log(ruleForm);
        } else {
            console.log('error submit!')
            return false
        }
    })
    await login(ruleForm).then(response => {
        console.log(response);
        if (response.status == 200) {
            if (response.data.status == 200) {
                ElMessage.success(response.data.message);
                if (response.data.data.token !== null) {
                    const userToken = response.data.data.token;
                    //将从后端接收token后存入本地存储并设置有效期
                    sessionStorage.setItem('token', JSON.stringify(userToken));
                    userStore.setUser(response.data.data.users);

                    router.push({
                        path: '/home',
                        // query: {
                        //     id: response.data.data.id
                        // }
                    });
                }
            } else {
                ElMessage.error(response.data.message);
            }
        } else {
            ElMessage.error(404 + "" + "请联系管理员");
        }
    });
}


</script>

<style>
.el-form-item__label {
    color: white !important;
}
</style>
  