import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/sass/index.sass";
import "animate.css";
import "fullpage-vue/src/fullpage.css";
import VueFullpage from "fullpage-vue";

Vue.use(VueFullpage);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
