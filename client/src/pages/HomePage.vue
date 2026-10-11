<script setup>
import { onMounted, ref } from "vue";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    products.value = await getProducts();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section>
    <h1>Welcome to Dukaan</h1>

    <p v-if="loading">Loading products...</p>

    <p v-else-if="error">{{ error }}</p>

    <p v-else-if="products.length === 0">No products available.</p>

    <div v-else>
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </section>
</template>
