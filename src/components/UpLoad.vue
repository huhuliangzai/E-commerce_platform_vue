<template>
    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:8080/upload"
      method="POST"
      :before-upload="beforeUpload"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖入文件或者 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png 文件不得大于 500kb
        </div>
      </template>
    </el-upload>
  </template>
  
  <script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import useUserStore from '../stores/user';
import { updateAvatar } from '../api/updateAvatar'
import { reactive } from 'vue';

const userStore:any = useUserStore();

const updateFrom = reactive({
    userID: userStore.user.id,
    avatar: ''
})

const beforeUpload = async(file: { type: string; size: number; name: string; })=> { 
            // 文件上传前的校验逻辑 
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' 
            const isLt500K = file.size / 1024 < 500 
            if (!isJPG) { 
                ElMessage.error('只能上传jpg/png文件！') } 
            if (!isLt500K) { 
                ElMessage.error('文件大小不能超过500kb！') 
            }
            // console.log(file.name);
            userStore.setAvatar(file.name);
            updateFrom.avatar = file.name;
            // console.log(updateFrom);
            await updateAvatar(updateFrom).then(response=>{
              // console.log(response);
              if(response.data.status == 200){
                ElMessage.success("更换成功");
              }else{
                ElMessage.error("更换失败",response.data.message)
              }
            })
            return isJPG && isLt500K 
        }
  </script>
  