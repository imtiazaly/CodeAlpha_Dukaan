<script setup>
import Navbar from "../components/Navbar.vue";
import CartDrawer from "../components/CartDrawer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50/50">
    <!-- Floating Header -->
    <Navbar />

    <!-- Interactive Cart Drawer -->
    <CartDrawer />

    <!-- Main Content Area -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>

    <!-- Minimal Footer -->
    <footer class="mt-auto border-t border-slate-200/60 py-6 text-center text-xs text-slate-400">
      <p>&copy; {{ new Date().getFullYear() }} Dukaan. Crafted with premium glassmorphism.</p>
    </footer>
  </div>
</template>