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
        <!--Start Messanger linklari joylanadi -->
        <!-- <div class="links">
          <span>
            <a href="/"><svg width="30px" height="30px" :class="isDarkTheme ? 'fill-green-500' : 'fill-white'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/></svg></a>
          </span>
        </div> -->
        <!-- End -->
      </div>
      <div
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
   <div class="container flex flex-col gap-2">
    <span class="flex items-center justify-center gap-2 text-xl font-bold lg:text-3xl">
      <i class="pi pi-map-marker"></i>
      <h1>Bizning Manzil</h1>
    </span>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.2604855642!2d71.59037677585793!3d40.99779447135197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4babfd770f23%3A0x49c196c8aec07577!2sNamMTI%208-BINO!5e1!3m2!1sen!2s!4v1732189556820!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
