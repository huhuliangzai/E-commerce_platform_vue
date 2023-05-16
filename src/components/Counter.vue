<template>
    <el-input-number v-model="num" :min="1" :max="99" @change="handleChange" name="buy_num" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const num = ref(1)
  const handleChange = (value: number) => {
    // console.log(value)
  }
  </script>
  