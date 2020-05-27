import Vue from "vue";
import VueTheMask from "vue-the-mask"; // mask
import VueHtmlToPaper from "vue-html-to-paper"; // print

Vue.use(VueTheMask);

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
  ]
};

Vue.use(VueHtmlToPaper, options);
