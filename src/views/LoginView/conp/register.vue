<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="77px" class="demo-ruleForm" style="color: white;">
        <el-form-item label="用户名:" prop="user_name">
            <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
            <el-input v-model="ruleForm.email" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="手机号码:" prop="user_phone">
            <el-input v-model="ruleForm.userPhone" type="text" autocomplete="off" />
        </el-form-item>
        <div class="d-flex w-100 align-items-center justify-content-around mb-2">
            <span>验证码:</span>
            <el-input v-model="state.InfoVerify" type="text" class="w-25" />
            <ImgVerify/>
        </div>
        <el-form-item label="密码:" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { register } from '../../../api/register'

import ImgVerify  from '../../../components/ImgVerify.vue'

let ruleFormRef = ref<FormInstance>()

const validateName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名！！'))
    } else {
        callback()
    }
}

const validateEmail = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入邮箱！！'))
    } else {
        callback()
    }
}

const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空！！'))
    } else {
        callback()
    }
}

const validatePhone = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入手机号码！！'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    userName: '',
    email: '',
    password: '',
    userPhone: ''
})

const state = reactive({
    InfoVerify: '',
})

const rules = reactive<FormRules>({
    userName: [{ validator: validateName, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
    userPhone: [{ validator: validatePhone, trigger: 'blur' }]
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
            console.log(ruleForm);
        } else {
            console.log('error submit!')
            return false
        }
    })
    await register(ruleForm).then(response =>{
        console.log(response);
        if (response.status==200) {
            if(response.data.status==200) {
                ElMessage.success(response.data.message);
            }else{
                ElMessage.error(response.data.message);
            }
        }else{
            ElMessage.error(404+""+"请联系管理员");
        }
        
    });
}

</script>

<style>
.el-form-item__label{
    color: white !important;
}

</style>
  