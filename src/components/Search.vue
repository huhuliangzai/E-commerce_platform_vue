<template>
    <div class="text-center">
        <el-input
            v-model="input2"
            class="w-50 m-2"
            placeholder="请输入你想要搜索的商品"
            :suffix-icon="Search"
        />
    </div>
</template>

<script setup> 
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input2 = ref('')
</script>

<style scoped>

</style>