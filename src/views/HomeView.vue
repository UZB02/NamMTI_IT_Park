<script setup>
import { RouterLink } from "vue-router";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import InputMask from "primevue/inputmask";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();
import { ref } from "vue";
import { useLayout } from "@/layouts/composables/layout";

const { isDarkTheme } = useLayout();

const name = ref("");
const surname = ref("");
const phone = ref("");
const course = ref("");
const courses = ref([
  { name: "Kompyuter savodhonligi", code: "KS" },
  { name: "Front-End kursi", code: "FE" },
  { name: "Backend kursi", code: "BE" },
  { name: "React.js, Node.js va Typescript kurslari", code: "RNT" },
  { name: "Python va Telegram bot kurslari", code: "PTG" },
  { name: "Next.js kursi", code: "N" },
]);

function sendToTelegram() {
  if (
    name.value === "" ||
    surname.value === "" ||
    phone.value === "" ||
    course.value === ""
  ) {
    toast.add({
      severity: "error",
      summary: "Xatolik",
      detail: "Barcha ma'lumotlarni to'ldiring!",
      life: 3000,
    });
  } else {
    // Telegram Botning API manzilini va chat ID sini o'zgartiring
    const telegramBotAPI =
      "https://api.telegram.org/bot7701567113:AAGztO-X16VG_jG0AkJy2lZJ3s7bYKXtnnY/sendMessage";
    const chatId = "7742492388";

    // Xabarni tayyorlash
    const message = `Kursga qabul bo'yicha so'rov:
  Ism: ${name.value}
  Familiya: ${surname.value}
  Talab: ${course.value.name}
  Telefon raqami:${phone.value}
  `;

    // Telegramga so'rov yuborish uchun XMLHttpRequest obyektini yaratish
    const request = new XMLHttpRequest();

    // POST so'rovi uchun so'rovni tayyorlash
    request.open("POST", telegramBotAPI, true);
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    // So'rovni yuborish va javobni tekshirish
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        toast.add({
          severity: "success",
          summary: "Muvofaqqiyatli yuborildi",
          detail: "Siz bilan tez orada aloqaga chiqamiz",
          life: 3000,
        });
        name.value = "";
        surname.value = "";
        phone.value = "";
        course.value = "";
      }
    };

    // Xabarni so'rovga joylash va yuborish
    const params = `chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    request.send(params);
  }
}
</script>

<template>
  <section class="w-full">
    <div class="container p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div
      data-aos="zoom-in-down"
        class="left flex flex-col justify-e gap-9 rounded-lg p-5 md:p-10 bg-green-500 text-white"
        :class="isDarkTheme ? 'bg-slate-900/50' : ''"
      >
        <h1 class="text-2xl md:text-4xl font-bold">NamMTi IT Park</h1>
        <h3>Ro'yxatdan O'tish bo'limi</h3>
        <p>
          Assalomu aleykum. Ushbu sayt hozirda test rejimda o'z faoliyatini
          boshladi. Bizni kuzatishda davom eting saytimizga yangiliklar qo'shib
          boriladi. Bizda Kompyuter savodhonligi va Web dasturlashning Front-End
          yo'nalishlari o'rgatiladi.
        </p>
        <RouterLink
          to="/404"
          class="bg-green-600 w-full md:w-1/2 rounded-lg font-bold hover:bg-green-400 duration-200 text-center p-3"
          >Biz haqimizda</RouterLink
        >
        <div class="marquee-container">
          <div class="marquee">Sayt test rejimda ishlamoqda!</div>
        </div>
      </div>
      <div
      data-aos="zoom-in-down"
        class="right p-5 md:p-10 rounded-lg bg-slate-100 flex flex-col gap-4"
        :class="isDarkTheme ? 'bg-slate-900/50' : ''"
      >
        <Toast
          position="top-center"
          style="width: 80%; @media screen and (min-width: 768px) {width: auto}"
        />
        <h1 class="text-2xl md:text-4xl text-center font-bold">
          Ro'yxatdan o'tish
        </h1>
        <form class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <label for="username">Ism</label>
            <InputText
              id="username"
              v-model="name"
              aria-describedby="username-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="usersecondname">Familiya</label>
            <InputText
              id="usesecondname"
              v-model="surname"
              aria-describedby="usersecondname-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="course">Kurslar</label>
            <Select
              v-model="course"
              :options="courses"
              optionLabel="name"
              placeholder="Kursni tanlang"
              class="w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="phone">Tell</label>
            <InputMask
              v-model="phone"
              mask="+999(99) 999-99-99"
              placeholder="+998(99) 999-99-99"
              fluid
            />
          </div>
          <button
            @click="sendToTelegram()"
            type="button"
            class="bg-green-600 w-full text-white rounded-lg font-bold hover:bg-green-400 duration-200 text-center p-3"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  </section>
  <section>
   <div class="container flex flex-col items-center justify-center gap-2">
    <span class="flex items-center justify-center gap-2 text-xl font-bold lg:text-3xl">
      <!-- <i class="pi pi-map-marker"></i> -->
      <h1>Bizning Manzil</h1>
    </span>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.2604855642!2d71.59037677585793!3d40.99779447135197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4babfd770f23%3A0x49c196c8aec07577!2sNamMTI%208-BINO!5e1!3m2!1sen!2s!4v1732189556820!5m2!1sen!2s" class="w-[98%] lg:w-full h-[200px] lg:h-[350px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
  </section>
</template>
<style scoped>
.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
}

.marquee {
  font-family: "Courier New", Courier, monospace;
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite alternate;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (min-width: 768px) {
}
</style>
