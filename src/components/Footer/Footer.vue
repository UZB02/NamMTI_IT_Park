<template>
    <div class="container bg-gray-800 p-2 md:p-8 mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Logo -->
      <div class="mb-4 md:mb-0">
        <img src="../../img/logo.png" alt="Logo" class="h-10" />
      </div>
      <!-- Links -->
      <nav class="flex space-x-4 flex-wrap items-center justify-center">
        <RouterLink to="/404" href="#" class="text-gray-400 text-xs md:text-sm hover:text-white">Asosiy Sahifa</RouterLink >
        <RouterLink to="/404" href="#" class="text-gray-400 text-xs md:text-sm hover:text-white">Biz haqimizda</RouterLink >
        <RouterLink to="/404" href="#" class="text-gray-400 text-xs md:text-sm hover:text-white">Kurslar</RouterLink >
        <RouterLink to="/404" href="#" class="text-gray-400 text-xs md:text-sm hover:text-white">Loyihalar</RouterLink >
        <RouterLink to="/404" href="#" class="text-gray-400 text-xs md:text-sm hover:text-white">Yangiliklar</RouterLink >
      </nav>
      <!-- Developer Info -->
      <div class="mt-4 md:mt-0 text-gray-400 text-sm">
        © 2024 Muhsinbek Mirzamatov
      </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

