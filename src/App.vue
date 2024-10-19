<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav/Main.vue"
import Footer from "./components/Footer/Footer.vue"
</script>

<template>
  <header class="sticky top-0 z-[10]">
    <nav class="sticky top-0 px-4 py-4 flex justify-between items-center bg-white border-b">
      <div class="container mx-0">
        <Nav></Nav>
      </div>
    </nav>
  </header>
<RouterView />

<footer class="text-white bg-gray-800">
  <Footer></Footer>
</footer>

</template>

