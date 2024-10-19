<template>
  <div class="container flex mx-auto justify-between items-center">
    <RouterLink to="/" class="text-3xl font-bold leading-none" >
      <img class="w-24" src="../../img/logo.png" alt="" />
    </RouterLink>
    <div class="lg:hidden">
      <button class="navbar-burger flex items-center text-green-600 p-3">
        <svg
          class="block h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul
      class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
    >
      <li>
        <RouterLink to="/" class="text-sm text-green-600 hover:text-gray-500"
          >Asosiy Sahifa</RouterLink
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <RouterLink to="/404" class="text-sm text-gray-400 "
          >Biz haqimizda</RouterLink
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <RouterLink
          to="/404"
          class="text-sm text-gray-400 hover:text-gray-500"
          
          >Kurslar</RouterLink
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <RouterLink
          to="/404"
          class="text-sm text-gray-400 hover:text-gray-500"
          
          >Loyihalar</RouterLink
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <RouterLink
          to="/404"
          class="text-sm text-gray-400 hover:text-gray-500"
          
          >Yangiliklar</RouterLink
        >
      </li>
    </ul>
    <button
      class="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-xl transition duration-200"
      @click="redirectToPhoneNumber()"
      >Bog'lanish</button
    >
  </div>
  <div class="navbar-menu transition duration-200 relative z-50 hidden">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav
      class="fixed top-0 left-0 z-50 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
    >
      <div class="flex items-center mb-8">
        <a class="mr-auto text-3xl font-bold leading-none" >
          <img class="w-24" src="../../img/logo.png" alt="" />
        </a>
        <button class="navbar-close">
          <svg
            class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1">
            <RouterLink
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
              to="/"
              >Asosiy Sahifa</RouterLink
            >
          </li>
          <li class="mb-1">
            <RouterLink
			to="/404"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
              >Biz haqimizda</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
			to="/404"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
              >Kurslar</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
			to="/404"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
              >Loyihalar</RouterLink
            >
          </li>
          <li class="mb-1">
            <RouterLink
			to="/404"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
              >Yangiliklar</RouterLink
            >
          </li>
          <li class="w-full">
            <button
              class="block w-full p-4 text-sm font-semibold bg-green-500 text-center text-white hover:bg-green-50 hover:text-green-600 rounded"
              @click="redirectToPhoneNumber()"
              >Bog'lanish</button
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

function redirectToPhoneNumber() {
    const phoneNumber = "+998917622603";
    window.location.href = `tel:${phoneNumber}`;
}
</script>
