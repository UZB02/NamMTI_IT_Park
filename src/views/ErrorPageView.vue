<template>
  <section
    class="flex items-center justify-center h-[85vh] bg-gray-100"
    :class="isDarkTheme ? 'bg-slate-800' : 'bg-gray-100'"
  >
    <div class="container px-2 text-center">
      <div
        class="text-6xl font-bold text-blue-600 animate-bounce relative z-[5]"
      >
        409
      </div>
      <p class="text-2xl mt-4">Kechirasiz tez orada qo'shiladi!</p>
      <p class="mt-2 text-gray-500">
        Sahifa tez orada ishga tushiriladi. Bizdan uzoqlashmang.
      </p>
      <button
        @click="goHome"
        class="mt-6 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-all duration-300"
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  </section>
</template>

<script setup>
import { useLayout } from "@/layouts/composables/layout";
import { useRouter } from "vue-router";

const { isDarkTheme } = useLayout();

const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Qo'shimcha animatsiyalar uchun */
.container {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
