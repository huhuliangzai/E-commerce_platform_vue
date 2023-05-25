<template>
    <div class="complaintsFeedback ms-2 border rounded p-2">
        <div class="enter_text">
            <el-input v-model="textarea" maxlength="999" 
                :autosize="{ minRows: 12, maxRows: 20 }" 
                placeholder="请输入您的投诉与反馈" 
                show-word-limit type="textarea" />
                <p>
                    您的联系方式:<input type="text" placeholder="请输入您的手机号">
                </p>
        </div>
        <div class="text-center mt-2">
            <button class="btn btn-outline-danger">提交</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<style scoped>
.complaintsFeedback {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}
</style>