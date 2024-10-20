<template>
    <section class="py-5" :class="isDarkTheme ? 'bg-slate-800' : ' '">
        <div class="container">
            <div class="top p-3">
               <div class="lef flex flex-col gap-2">
                 <h2 class="md:text-6xl text-4xl font-bold text-green-500">NamMTi IT Park Kurslar bo'limiga hush kelibsiz</h2>
                <p class="text-sm md:text-lg font-mono text-slate-400">Bizda kurslar malakali ustozlar bilan sifatli va hamyonbop narxlarda o'tiladi. Kurslarimizni yakunlagan bitiruvchilarimiz Namangan muhandislik-texnalogiyalar institutu rahbaryati tomonidan sertifikat bilan taqdirlanadi!</p>
               </div>
               <!-- <div class="right flex items-center justify-center">
                <img class="" src="../img/logo.png" alt="">
               </div> -->
            </div>
            <div class="bottom">
                <CoursesCard></CoursesCard>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLayout } from "@/layouts/composables/layout";
import CoursesCard from "../components/Courses/CoursesCard.vue"
const { isDarkTheme } = useLayout();
</script>
<style scoped>

</style>