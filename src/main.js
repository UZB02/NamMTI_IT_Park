import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
import AnimateOnScroll from "primevue/animateonscroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { MotionPlugin } from "@vueuse/motion";

AOS.init();

const app = createApp(App);
app.use(MotionPlugin);
app.directive("animateonscroll", AnimateOnScroll);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
});
app.use(ToastService);
app.mount("#app");
