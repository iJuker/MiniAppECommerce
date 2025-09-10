<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import Navigator from "./components/Navigator.vue";
</script>
<template>
  <div class="h-dvh flex flex-col bg-white">
    <Navbar />
    <main class="flex-1 overflow-hidden px-4">
      <RouterView class="flex-1 h-full" />
    </main>
    <Navigator />
  </div>
</template>
