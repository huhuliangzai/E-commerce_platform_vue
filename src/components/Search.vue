<template>
        <el-input
            v-model="inputForm"
            class="w-50 m-2"
            placeholder="请输入你想要搜索的商品"
            :suffix-icon="Search"
            clearable
        />
</template>

<script setup> 
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const inputForm = ref('')

</script>

<style scoped>

</style>