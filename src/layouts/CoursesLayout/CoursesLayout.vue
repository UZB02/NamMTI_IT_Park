<template>
  <section
  class="relative"
    :class="
      isDarkTheme
        ? 'bg-slate-800 container mx-auto grid grid-cols-12'
        : 'container mx-auto grid grid-cols-12'
    "
  >
  <div class="lg:hidden p-2 col-span-12 flex justify-between items-center" :class="isDarkTheme ? 'border-b border-slate-700' :''">
    <div @click="toggleSideBar()" class="px-2" :class="isDarkTheme ? 'bg-slate-900/50 p-1 px-2 rounded font-bold flex items-center justify-center gap-2' : 'flex items-center justify-center gap-2 bg-green-400 p-1 rounded text-white font-bold'">
        <i class="pi pi-align-left"></i><h3>Kurslar</h3>
    </div>
    <div class="flex items-center justify-center gap-2 font-bold">
      <a href="https://t.me/nammti_it_park" class="pi pi-send active:scale-50"  :class="isDarkTheme ? 'border p-1 rounded border-slate-700' : 'text-slate-500 border p-1 rounded '"></a>
      <i @click="redirectToPhoneNumber()" class="pi pi-phone" :class="isDarkTheme ? 'border p-1 rounded border-slate-700' : 'text-slate-500 border p-1 rounded '"></i>
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
  { id: 1, name: "Barcha kurslar", path: "/courses", icon: "pi pi-warehouse" },
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

function redirectToPhoneNumber() {
  const phoneNumber = "+998917622603";
  window.location.href = `tel:${phoneNumber}`;
}

</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>
