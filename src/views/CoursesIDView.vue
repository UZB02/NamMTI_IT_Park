<template>
    <section class="sm:h-screen py-5 font-sans">
        <div class="container">
            <div class="top flex flex-col gap-2 sm:flex-row justify-center">
                <span class="w-full flex flex-col gap-2 sm:w-[67%] px-2">
                   <div class="flex flex-col gap-2">
                     <h1 class=" text-xl font-bold md:text-5xl">Kompyuter Savodxonligi kurslari</h1>
                    <h2 class="font-bold text-sm text-slate-400">O'qituvchi: Muhsinbek Mirzamatov</h2>
                    <p class="text-justify px-2">Kompyuter savodxonligi kurslarimizda siz kompyuter bilan ishlash Office dasturlari (Word, Excel, PowerPoint), kompyuterlarni sistema qilish, internet tarmog'i va Chat GPTdan to'g'ri foydalanishlarni o'rganishingiz mumkin. </p>
                   </div>
                   <div>
                    <span class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''"  class="card shadow p-2  rounded-lg w-full flex gap-2">
                         <div class="left flex w-1/2 items-center">
                            <img class="w-full h-28 object-cover" src="../img/Word.png" alt="">
                        </div>
                        <div class="right w-full">
                            <h1 class="font-bold">Microsoft Word</h1>
                            <p class="text-sm text-justify">Bu Microsoft kompaniyasi tomonidan ishlab chiqilgan matn muharriri dasturi bo'lib, hujjatlar yaratish, tahrirlash, formatlash va ularni turli xil formatlarda saqlash imkoniyatini beradi.</p>
                        </div>
                       </div>
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''" class="card shadow p-2 rounded-lg w-full flex gap-2">
                         <div class="left flex items-center w-1/2">
                            <img class="w-full h-28 object-cover" src="../img/Excel.png" alt="">
                        </div>
                        <div class="right w-full ">
                            <h1 class="font-bold">Microsoft Excel</h1>
                            <p class="text-sm">Bu Microsoft kompaniyasi tomonidan ishlab chiqilgan matn muharriri dasturi bo'lib, hujjatlar yaratish, tahrirlash, formatlash va ularni turli xil formatlarda saqlash imkoniyatini beradi.</p>
                        </div>
                       </div>
                       <div :class="isDarkTheme ? 'shadow-slate-400' : ''" class="card shadow p-2 rounded-lg w-full flex gap-2">
                         <div class="left flex items-center w-1/2">
                            <img class="w-full h-28 object-cover" src="../img/powerpoint.png" alt="">
                        </div>
                        <div class="right w-full ">
                            <h1 class="font-bold">Microsoft Word</h1>
                            <p class="text-sm">Bu Microsoft kompaniyasi tomonidan ishlab chiqilgan matn muharriri dasturi bo'lib, hujjatlar yaratish, tahrirlash, formatlash va ularni turli xil formatlarda saqlash imkoniyatini beradi.</p>
                        </div>
                       </div>
                    </span>
                   </div>
                </span>
                <span class="w-full flex justify-center sm:w-1/3">
                    <img src="../img/muhsinbek1.png" alt="">
                </span>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLayout } from "@/layouts/composables/layout";
const { isDarkTheme } = useLayout();
</script>
<style scoped>
    
</style>