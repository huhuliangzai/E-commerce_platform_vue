<template>
    <div class="complaintsFeedback ms-2 border rounded p-2">
        <div class="enter_text">
            <el-input v-model="complaintFrom.complaint" maxlength="999" 
                :autosize="{ minRows: 12, maxRows: 20 }" 
                placeholder="请输入您的投诉与反馈" 
                show-word-limit type="textarea" />
                <p>
                    您的联系方式:<input v-model="complaintFrom.userPhone" type="text" placeholder="请输入您的手机号">
                </p>
        </div>
        <div class="text-center mt-2">
            <button class="btn btn-outline-danger" @click="submitComplaint">提交</button>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
import useUserStore from '@/stores/user';
import { insertComplaint } from '@/api/insertComplaint'
import { ElMessage } from 'element-plus';


const userStore = useUserStore();

const complaintFrom = reactive({
    userId: userStore.user.id,
    userName: userStore.user.userName,
    complaint: '',
    userPhone: '',
})

const submitComplaint = async()=>{
    console.log(complaintFrom);
    await insertComplaint(complaintFrom).then(response=>{
        if(response.data.status == 200){
            ElMessage.success("提交成功");
        }else{
            ElMessage.error("提交失败");
        }
    })
}
</script>

<style scoped>
.complaintsFeedback {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}
</style>