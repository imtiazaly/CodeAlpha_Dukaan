<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.name" />

    <h2>{{ product.name }}</h2>

    <p>{{ product.description }}</p>

    <p>Price: Rs. {{ product.price }}</p>

    <p>Category: {{ product.category }}</p>
  </article>
</template>
