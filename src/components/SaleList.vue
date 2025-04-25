<template>
  <div>
    <h1>销售记录列表</h1>
    <el-table :data="sales" stripe>
      <el-table-column prop="productId" label="关联产品ID"></el-table-column>
      <el-table-column prop="saleQuantity" label="销售数量"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="editSale(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteSale(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h2>添加新销售记录</h2>
    <el-form :model="newSale" @submit.prevent="addSale">
      <el-form-item label="关联产品ID">
        <el-input-number v-model="newSale.productId" required></el-input-number>
      </el-form-item>
      <el-form-item label="销售数量">
        <el-input-number v-model="newSale.saleQuantity" required></el-input-number>
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

const sales = ref([]);
const newSale = ref({
  productId: 0,
  saleQuantity: 0
});

const fetchSales = async () => {
  try {
    const response = await axios.get('http://localhost:8080/sales');
    sales.value = response.data;
  } catch (error) {
    console.error('获取销售记录列表失败:', error);
    alert('获取销售记录列表失败，请稍后重试');
  }
};

const addSale = async () => {
  try {
    await axios.post('http://localhost:8080/sales', newSale.value);
    fetchSales();
    newSale.value = {
      productId: 0,
      saleQuantity: 0
    };
    alert('销售记录添加成功');
  } catch (error) {
    console.error('添加销售记录失败:', error);
    alert('添加销售记录失败，请稍后重试');
  }
};

const editSale = (sale) => {
  console.log('编辑销售记录:', sale);
  alert('编辑功能暂未实现');
};

const deleteSale = async (sale) => {
  if (window.confirm('确定要删除该销售记录吗？')) {
    try {
      await axios.delete(`http://localhost:8080/sales/${sale.id}`);
      fetchSales();
      alert('销售记录删除成功');
    } catch (error) {
      console.error('删除销售记录失败:', error);
      alert('删除销售记录失败，请稍后重试');
    }
  }
};

fetchSales();
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>