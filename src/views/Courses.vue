<template>
    <section class="py-5" :class="isDarkTheme ? 'bg-slate-800' : ' '">
        <div class="container">
            <div class="top p-3">
               <div class="lef flex flex-col gap-4">
                 <h2 class="md:text-6xl text-4xl font-bold text-green-500">NamMTi IT Park Kurslar bo'limiga hush kelibsiz</h2>
                 <span class="flex justify-between flex-col-reverse gap-2 sm:flex-row">
                    <Select v-model="selectedCourse" :options="courses" optionLabel="name" placeholder="Kursni tanlang" class="w-full md:w-56" />
                    <span class="w-full md:w-auto flex gap-1 justify-end">
                        <InputText type="text" class="w-full" placeholder="Qidiruv" v-model="value" />
                        <Button label="Search" icon="pi pi-search" />
                    </span>
                 </span>
               </div>
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
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const { isDarkTheme } = useLayout();
import { ref, watch } from "vue";

const value = ref('');
const selectedCourse = ref('');
const courses = ref([
    { name: 'Kompyuter savodxonligi', code: 'KS' },
    { name: 'Frontend', code: 'FE' },
    { name: 'Backend', code: 'BK' },
]);

watch(selectedCourse, (newValue) => {
    console.log('Tanlangan shahar:', newValue.name);
});
</script>
<style scoped>

</style>