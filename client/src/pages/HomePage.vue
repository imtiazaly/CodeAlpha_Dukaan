<script setup>
import { onMounted, ref } from "vue";
import { getProducts } from "../services/productService";
import HeroSection from "../components/HeroSection.vue";
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
  <div class="space-y-12">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Products Section Anchor -->
    <div id="products-grid" class="scroll-mt-24">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Featured Products</h2>
          <p class="text-xs text-slate-500">Browse through our handpicked essentials</p>
        </div>
      </div>

      <p v-if="loading" class="text-sm text-slate-500">Loading products...</p>
      <p v-else-if="error" class="text-sm text-rose-500">{{ error }}</p>
      <p v-else-if="products.length === 0" class="text-sm text-slate-500">No products available.</p>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>