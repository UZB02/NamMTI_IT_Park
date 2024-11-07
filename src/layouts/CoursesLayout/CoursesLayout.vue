<template>
  <section
  class="relative"
    :class="
      isDarkTheme
        ? 'bg-slate-800 container mx-auto grid grid-cols-12'
        : 'container mx-auto grid grid-cols-12'
    "
  >
  <div class="lg:hidden p-2">
    <div @click="toggleSideBar()">
        <i class="pi pi-align-left"></i>
    </div>
  </div>
    <div
    class="lg:border-r h-screen" 
     :class="isSibar ? 'lg:flex fixed top-24 w-full z-[9] flex-col col-span-12  gap-2 lg:col-span-3  border-b  ' : 'lg:flex flex-col col-span-12 w-full hidden gap-2 lg:col-span-3 h-screen  py-2'">
        <div
        class="h-screen flex flex-col gap-2 py-2"
      :class="isDarkTheme  ? 'bg-slate-800 px-2' : 'bg-white px-2' "
    >
      <div class="flex justify-between">
        <span class="">
            <h1 class="text-2xl font-bold text-center text-green-500">Kurslar</h1>
        </span>
        <span @click="toggleSideBar()" class="px-2 py-1 lg:hidden border">
            <i class="pi pi-times"></i>
        </span>
      </div>
      <div class="overflow-y-scroll  flex flex-col gap-2 items-center">
        <RouterLink
          v-for="item in categories"
          :to="item.path"
          @click="isSibar=false"
          :class="
            isDarkTheme
              ? 'bg-slate-700/50 transition-all duration-200 hover:bg-slate-700/20 rounded-lg w-full flex items-center gap-2  p-2'
              : 'bg-slate-200 transition-all duration-200 hover:bg-slate-200/50  rounded-lg w-full flex items-center gap-2  p-2'
          "
        >
          <i :class="item.icon"></i>{{ item.name }}
        </RouterLink>
      </div>
      <!-- <div class="flex items-center gap-3 border-t pt-2 justify-center">
        <a href="https://t.me/nammti_it_park" target="_blank">
          <svg
            width="24px"
            height="24px"
            :class="isDarkTheme ? 'fill-white' : 'fill-black'"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 1.41421;
            "
          >
            <path
              id="telegram-1"
              d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
            />
          </svg>
        </a>
        <span class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" :class="isDarkTheme ? 'fill-white' : 'fill-black'" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
        </span>
        <span class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" :class="isDarkTheme ? 'fill-white' : 'fill-black'" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </span>
      </div> -->
    </div>
    </div>
    <div class="col-span-12 h-screen overflow-y-scroll lg:col-span-9">
      <RouterView></RouterView>
    </div>
  </section>
</template>
<script setup>
import { RouterView, RouterLink } from "vue-router";
import { ref } from "vue";
import { useLayout } from "@/layouts/composables/layout";
const { isDarkTheme } = useLayout();

const isSibar=ref(false)
const categories = ref([
  { id: 1, name: "Barcha kurslar", path: "/", icon: "pi pi-warehouse" },
  {
    id: 2,
    name: "Kompyuter savodxonligi",
    path: "/courses/computer_literacy",
    icon: "pi pi-desktop",
  },
  { id: 3, name: "Frontend", path: "/404", icon: "pi pi-code" },
  { id: 4, name: "Backend", path: "/404", icon: "pi pi-database" },
  {
    id: 5,
    name: "Reackt.js, Node.js va TypeScript",
    path: "/404",
    icon: "pi pi-objects-column",
  },
  {
    id: 8,
    name: "Python && Telegram Bot",
    path: "/404",
    icon: "pi pi-objects-column",
  },
  { id: 7, name: "Next.js", path: "/404", icon: "pi pi-objects-column" },
  { id: 6, name: "Node.js", path: "/404", icon: "pi pi-inbox" },
]);

function toggleSideBar() {
  isSibar.value =!isSibar.value;
}

</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>
