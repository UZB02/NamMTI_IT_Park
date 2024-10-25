<template>
  <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 p-3">
    <RouterLink
      v-for="item in data"
      :key="item.id"
      :to='item.path'
      class="card border rounded-tl-lg rounded-tr-lg relative flex flex-col justify-center gap-2 bg-slate-50"
      :class="isDarkTheme ? 'bg-slate-700 border-slate-700' : ''"
    >
    <span :class="isDarkTheme ? 'absolute right-1 top-1 bg-slate-800 z-[8] px-1 rounded text-white' : 'absolute right-1 top-1 bg-green-400 px-1 rounded text-white z-[8]'">
      {{ item.price }}
    </span>
      <div class="top rounded-tl-lg rounded-tr-lg overflow-hidden">
        <img
          class="w-full h-[150px] md:h-[250px] rounded-tl-lg rounded-tr-lg object-cover transition-transform duration-300 hover:scale-110"
          :src="item.image"
          alt=""
        />
      </div>
      <div class="bottom  flex justify-center flex-col gap-2">
        <span class="flex flex-col px-2">
          <h1
          class="md:text-xl text-lg font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis"
        >
          {{ item.title }}
        </h1>
        <p  :class="isDarkTheme ? 'text-slate-50' : 'text-slate-400'">{{ item.description }}</p>
        </span>
        <RouterLink
          :to='item.path'
          class="flex w-full bg-green-500 items-center  justify-center gap-2 text-white p-2 font-bold"
        >
          Ko'proq 
        </RouterLink>
      </div>
    </RouterLink>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
import { useLayout } from "@/layouts/composables/layout";
const { isDarkTheme } = useLayout();

const data = ref([
  {
    id: 1,
    title: "Komputer Savodxonligi",
    path:"/404",
    price:"200 ming",
    image:
      "https://avatars.mds.yandex.net/i?id=ab557b4735adf502e4350528c21bca11-4478965-images-thumbs&n=13",
    description:
      "Muhsinbek Mirzamatov",
  },
  {
    id: 2,
    title: "Frontend",
     path:"/404",
      price:"400 ming",
    image:
      "https://i.pinimg.com/736x/16/3f/59/163f59388d9cd84e184c5e0bdf6647a7.jpg",
    description: "Muhsinbek Mirzamatov",
  },
  {
    id: 3,
    title: "Backend",
     path:"/404",
      price:"tez orada",
    image:
      "https://avatars.mds.yandex.net/i?id=eacaed3574366176bc9694d2bd9111d592b1267e-5486461-images-thumbs&n=13",
    description:
      "Tez orada",
  },
  {
    id: 4,
    title: "Grafik Dizayn",
     path:"/404",
     price:"tez orada",
    image:
      "https://avatars.mds.yandex.net/i?id=5c51f45808bf9ad6c8e85487c7c149127baeb98f-8389316-images-thumbs&n=13",
    description:
      "Tez orada",
  },
]);
</script>
<style scoped></style>
