<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav/Main.vue";
import Footer from "./components/Footer/Footer.vue";
import { useLayout } from "./layouts/composables/layout";

const { isDarkTheme } = useLayout();
</script>

<template>
  <header class="sticky top-0 z-[10]">
    <nav
      class="sticky top-0 px-4 py-4 flex justify-between items-center bg-white border-b"
      :class="isDarkTheme ? 'bg-slate-800' : ' '"
    >
      <div class="container mx-0">
        <Nav></Nav>
        <!-- <AppTopbar /> -->
      </div>
    </nav>
  </header>
  <div :class="isDarkTheme ? 'bg-slate-800' : ''">
    <RouterView />
  </div>

  <footer class="text-white bg-slate-800" :class="isDarkTheme ? 'border-t' : ' '">
    <Footer></Footer>
  </footer>
</template>
