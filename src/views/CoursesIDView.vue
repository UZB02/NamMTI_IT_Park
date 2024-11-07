<template>
    <section class="sm:h-screen py-5 font-sans">
        <div class="container">
            <!-- <div class="px-4">
                <Breadcrumb :home="home" :model="items" :class="isDarkTheme ? 'bg-slate-800' : ''"/>
            </div> -->
            <div class="top flex flex-col gap-2 sm:flex-row justify-center">
                <span class="w-full flex flex-col gap-2  px-2">
                   <div class="flex flex-col gap-2 px-2">
                     <h1 class=" text-xl font-bold md:text-5xl">Kompyuter Savodxonligi kurslari</h1>
                    <h2 class="font-bold text-sm text-slate-400">O'qituvchi: Muhsinbek Mirzamatov</h2>
                    <p class="text-justify ">Kompyuter savodxonligi kurslarimizda siz kompyuter bilan ishlash Office dasturlari (Word, Excel, PowerPoint), kompyuterlarni sistema qilish, internet tarmog'i va Chat GPTdan to'g'ri foydalanishlarni o'rganishingiz mumkin. </p>
                   </div>
                   <div>
                    <span class="grid grid-cols-1 gap-2 sm:grid-cols-3">
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''"  class="card shadow p-2  rounded-lg  flex gap-2">
                         <div class="left flex w-1/2 items-center">
                            <img class="w-full h-28 object-cover" src="../img/Word.png" alt="">
                        </div>
                        <div class="right w-full">
                            <h1 class="font-bold">Microsoft Word</h1>
                            <p class="text-sm text-justify">Microsoft kompaniyasi tomonidan ishlab chiqilgan matn muharriri bo‘lib, dunyo bo‘ylab eng ommabop va keng foydalaniladigan dasturlardan biridir. Word matn hujjatlarini tayyorlash, tahrirlash, formatlash va saqlash imkoniyatini beradi.</p>
                        </div>
                       </div>
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''" class="card shadow p-2 rounded-lg  flex gap-2">
                         <div class="left flex items-center w-1/2">
                            <img class="w-full h-28 object-cover" src="../img/Excel.png" alt="">
                        </div>
                        <div class="right w-full ">
                            <h1 class="font-bold">Microsoft Excel</h1>
                            <p class="text-sm">Microsoft tomonidan ishlab chiqilgan va jahon bo'ylab eng keng qo'llaniladigan elektron jadval dasturlaridan biridir. U hisoblash, tahlil qilish va taqdim etish uchun mo'ljallangan kuchli vosita bo'lib, turli sohalarda faoliyat yuritadigan foydalanuvchilar uchun qulay imkoniyatlar yaratadi.</p>
                        </div>
                       </div>
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''" class="card shadow p-2 rounded-lg  flex gap-2">
                         <div class="left flex items-center w-1/2">
                            <img class="w-full h-28 object-cover" src="../img/powerpoint.png" alt="">
                        </div>
                        <div class="right w-full ">
                            <h1 class="font-bold">Microsoft Word</h1>
                            <p class="text-sm">Taqdimotlar tayyorlash uchun mo'ljallangan mashhur dasturiy ta'minot. U, ayniqsa, taqdimotlarni qulay va professional tarzda tayyorlash uchun keng imkoniyatlarga ega bo'lib, ishbilarmonlar, talaba va o'qituvchilar orasida keng qo'llaniladi.</p>
                        </div>
                       </div>
                    </span>
                   </div>
                </span>
            </div>
            <div class="bottom">
                <div class="left">

                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLayout } from "@/layouts/composables/layout";
const { isDarkTheme } = useLayout();
import Breadcrumb from 'primevue/breadcrumb'
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([
    { label: 'Electronics' }, 
    { label: 'Computer' }, 
    { label: 'Accessories' }, 
    { label: 'Keyboard' }, 
    { label: 'Wireless' }
]);
</script>
<style scoped>
    
</style>