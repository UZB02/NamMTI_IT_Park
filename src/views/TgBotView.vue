<template>
   <section class="sm:h-screen py-5">
    <div class="container">
        <!-- <h1 class="text-2xl lg:text-4xl font-bold text-center">Front-End dasturlash kurslari</h1> -->
        <div class="flex justify-center lg:mt-8">
            <div v-motion-pop-visible-once class="grid grid-cols-1 gap-2 lg:grid-cols-2 items-center justify-center bg-slate-100 w-[95%] rounded-xl lg:w-[85%] p-2"
            :class="isDarkTheme ? 'bg-slate-700/50 shadow-xl' : ' shadow-xl'"
            >
               <div class="flex flex-col gap-3 justify-center">
                 <h1 class="text-2xl md:text-6xl">Python Telegram bot kurslari</h1>
                <h2 class="text-lg md:text-2xl">Hozirgi kundagi eng talabgor dasturlash sohalaridan biri!</h2>
                <ul class="grid grid-cols-1 items-center justify-center gap-2">
                    <li class="flex items-center "><h1 class="text-base text-slate-400" :class="isDarkTheme ? 'text-slate-200' : ''">Pythone</h1></li>
                    <!-- <li class="flex items-center "><h1 class="text-xl text-slate-400" :class="isDarkTheme ? 'text-slate-200' : ''">Node.js</h1></li>
                    <li class="flex items-center "><h1 class="text-xl text-slate-400" :class="isDarkTheme ? 'text-slate-200' : ''">TypeScript</h1> </li> -->
                    <!-- <li class="flex items-center "><h1 class="text-xl text-slate-400" :class="isDarkTheme ? 'text-slate-200' : ''">Reakt</h1></li> -->
                </ul>
                <!-- <div><h3 :class="isDarkTheme ? 'text-slate-300' : 'text-slate-400'">Kurs narxi: 500 ming so'm / oy</h3></div> -->
                <Button label="Bog'lanish" severity="success" @click="redirectToPhoneNumber()" />
               </div>
               <div class="flex items-center justify-center">
                <img class="w-[80%]" src="../img/tgbot.png" alt="">
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