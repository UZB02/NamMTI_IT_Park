<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import Nav from "./components/Nav/Main.vue";
import Footer from "./components/Footer/Footer.vue";
import AppLayout from "./layouts/AppLayout.vue";
import { useLayout } from "./layouts/composables/layout";
import { useRoute } from "vue-router";
import router from "./router";
const route = useRoute();
const layout = computed(() => route.meta.layout || AppLayout);
const { isDarkTheme } = useLayout();
</script>

<template>
  <header class="sticky top-0 z-[10]">
    <nav
      class="sticky top-0 px-4 py-4 flex justify-between items-center border-b"
      :class="isDarkTheme ? 'bg-slate-800 border-slate-700' : 'bg-white '"
    >
      <div class="container mx-0">
        <Nav></Nav>
        <!-- <AppTopbar /> -->
      </div>
    </nav>
  </header>
  <div :class="isDarkTheme ? 'bg-slate-800' : ''">
    <component :is="layout">
      <RouterView />
    </component>
  </div>

  <footer
    class="text-white bg-slate-800"
    :class="isDarkTheme ? 'border-t border-slate-700' : ' '"
  >
    <Footer></Footer>
  </footer>
</template>
