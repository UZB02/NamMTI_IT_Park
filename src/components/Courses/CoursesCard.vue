<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-3">
    <div
      v-for="item in data"
      :key="item.id"
      class="card border rounded-tl-lg rounded-tr-lg flex flex-col justify-center gap-2 bg-slate-50"
      :class="isDarkTheme ? 'bg-slate-700' : ''"
    >
      <div class="top rounded-tl-lg rounded-tr-lg overflow-hidden">
        <img
          class="w-full h-[150px] md:h-[300px] rounded-tl-lg rounded-tr-lg object-cover transition-transform duration-300 hover:scale-110"
          :src="item.image"
          alt=""
        />
      </div>
      <div class="bottom p-2 flex justify-center flex-col gap-2">
        <h1
          class="md:text-xl text-lg font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis"
        >
          {{ item.title }}
        </h1>
        <!-- <p>{{ item.description }}</p> -->
        <RouterLink
          to="/"
          class="flex w-full bg-green-500 items-center justify-center gap-2 text-white p-2 font-bold"
        >
          Ko'proq <i class="pi pi-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "primeicons/primeicons.css";
import { useLayout } from "@/layouts/composables/layout";
const { isDarkTheme } = useLayout();

const data = ref([
  {
    id: 1,
    title: "Komputer Savodhonligi",
    image:
      "https://avatars.mds.yandex.net/i?id=ab557b4735adf502e4350528c21bca11-4478965-images-thumbs&n=13",
    description:
      "Kompyuter Savodhonligi kurslarida Ofice dasturlari bilan ishlashni kompyuterlar...",
  },
  {
    id: 2,
    title: "Frontend",
    image:
      "https://i.pinimg.com/736x/16/3f/59/163f59388d9cd84e184c5e0bdf6647a7.jpg",
    description: ".",
  },
  {
    id: 3,
    title: "Backend",
    image:
      "https://avatars.mds.yandex.net/i?id=eacaed3574366176bc9694d2bd9111d592b1267e-5486461-images-thumbs&n=13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non velit scelerisque pellentesque. Sed tincidunt, ipsum eget dictum viverra, dolor mauris semper neque, vitae congue neque neque vel velit.",
  },
  {
    id: 4,
    title: "Grafik Dizayn",
    image:
      "https://avatars.mds.yandex.net/i?id=5c51f45808bf9ad6c8e85487c7c149127baeb98f-8389316-images-thumbs&n=13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non velit scelerisque pellentesque.",
  },
]);
</script>
<style scoped></style>
