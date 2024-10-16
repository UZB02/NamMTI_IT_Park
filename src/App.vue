<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav/Main.vue"
</script>

<template>
  <header>
    <nav class="sticky top-0 px-4 py-4 flex justify-between items-center bg-white border-b">
      <div class="container mx-0">
        <Nav></Nav>
      </div>
    </nav>
  </header>
<RouterView />
</template>

