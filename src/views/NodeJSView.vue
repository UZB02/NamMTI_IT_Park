<template>
   <section class="sm:h-screen py-5">
    <div class="container">
        <!-- <h1 class="text-2xl lg:text-4xl font-bold text-center">Front-End dasturlash kurslari</h1> -->
        <div class="flex justify-center lg:mt-8">
            <div v-motion-pop-visible-once class="grid grid-cols-1 gap-2 lg:grid-cols-2 items-center justify-center bg-slate-100 w-[95%] rounded-xl lg:w-[85%] p-2"
            :class="isDarkTheme ? 'bg-slate-700/50 shadow-xl' : ' shadow-xl'"
            >
               <div class="flex flex-col gap-3 justify-center">
                 <h1 class="text-2xl md:text-6xl">Node.js kurslari</h1>
                <h2 class="text-lg lg:text-xl text-slate-500 font-thin">Node.js — bu JavaScript ishlatish muhiti, u server tomonida JavaScript kodini bajarishga imkon beradi. Dastlab JavaScript faqat veb-brauzerlarda ishlatilgan bo‘lsa, Node.js tufayli uni serverlarda, mustaqil dasturlarda va turli xil qurilmalarda ishlatish mumkin!</h2>
                <ul class="grid grid-cols-3 items-center justify-center gap-2">
                    <li class="flex items-center "><h1 class="text-slate-500">Node.js</h1></li>
                </ul>
                <!-- <div><h3 :class="isDarkTheme ? 'text-slate-300' : 'text-slate-400'">Kurs narxi: 500 ming so'm / oy</h3></div> -->
                <Button label="Bog'lanish" severity="success" @click="redirectToPhoneNumber()" />
               </div>
               <div class="flex items-center justify-center">
                <img class="w-[80%]" src="../img/NodeJS.png" alt="">
               </div>
            </div>
        </div>
        <!-- <div class="flex justify-center lg:mt-8">
            <div class="text-center">
                <h2 class="text-2xl font-semibold">Current Date</h2>
                <p>{{ currentDate }}</p>
            </div>
        </div> -->
    </div>
   </section>
</template>
<script setup>
import { useLayout } from '@/layouts/composables/layout';
import Button from 'primevue/button';
const { isDarkTheme } = useLayout();

function redirectToPhoneNumber() {
  const phoneNumber = "+998917622603";
  window.location.href = `tel:${phoneNumber}`;
}
</script>
<style scoped>
    
</style>