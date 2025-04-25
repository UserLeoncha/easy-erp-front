<template>
  <div>
    <h1>产品列表</h1>
    <!-- ElementPlus 的表格组件 -->
    <el-table :data="products" stripe>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="quantity" label="产品数量"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="editProduct(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteProduct(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h2>添加新产品</h2>
    <!-- ElementPlus 的表单组件 -->
    <el-form :model="newProduct" @submit.prevent="addProduct">
      <el-form-item label="产品名称">
        <el-input v-model="newProduct.name" required></el-input>
      </el-form-item>
      <el-form-item label="产品数量">
        <el-input-number v-model="newProduct.quantity" required></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// 存储产品列表的响应式数据
const products = ref([]);
// 用于添加新产品的响应式数据
const newProduct = ref({
  name: '',
  quantity: 0
});

// 获取产品列表
const fetchProducts = async () => {
  try {
    const response = await axios.get('/products');
    products.value = response.data;
  } catch (error) {
    console.error('获取产品列表失败:', error);
    alert('获取产品列表失败，请稍后重试');
  }
};

// 添加新产品
const addProduct = async () => {
  try {
    await axios.post('/products', newProduct.value);
    fetchProducts();
    newProduct.value = {
      name: '',
      quantity: 0
    };
    alert('产品添加成功');
  } catch (error) {
    console.error('添加产品失败:', error);
    alert('添加产品失败，请稍后重试');
  }
};

// 编辑产品
const editProduct = (product) => {
  console.log('编辑产品:', product);
  alert('编辑功能暂未实现');
};

// 删除产品
const deleteProduct = async (product) => {
  if (window.confirm('确定要删除该产品吗？')) {
    try {
      await axios.delete(`/products/${product.id}`);
      fetchProducts();
      alert('产品删除成功');
    } catch (error) {
      console.error('删除产品失败:', error);
      alert('删除产品失败，请稍后重试');
    }
  }
};

// 组件挂载后获取产品列表
fetchProducts();
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>