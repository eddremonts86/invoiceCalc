import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import calculatorModule from "./domains/calculator";

import { registerModules } from "./register-modules";
import vuetify from "./plugins/vuetify";

registerModules({
  calculator: calculatorModule,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
