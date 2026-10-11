<template>
  <div class="main-layout">
    <header>
      <nav>
        <RouterLink to="/">Dukaan</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Dukaan</p>
    </footer>
  </div>
</template>
