import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";

// vue.filter("dollar", dollarFilter);

createApp(App).use(router).use(VueChartkick).use(VueSpinners).mount("#app");
