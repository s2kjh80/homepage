import Vue from "vue";
//import InputUi from '~/components/ui/TextInputUi.vue'

//Vue.component('input-ui', InputUi)

import SingleImageUpload from "~/components/xdf-common/SingleImageUpload.vue";
Vue.component("xdf-single-image", SingleImageUpload);

import MultiImageUpload from "~/components/xdf-common/MultiImageUpload.vue";
Vue.component("xdf-multi-image", MultiImageUpload);

import TinyEditor from "~/components/editor/Tinymce.vue";
Vue.component("xdf-tiny-editor", TinyEditor);

import ListFilter from "~/components/xdf-common/ListFilter.vue";
Vue.component("xdf-list-filter", ListFilter);

import Datepicker from "~/components/xdf-common/Datepicker.vue";
Vue.component("xdf-datepicker", Datepicker);

import ItemList from "~/components/xdf-common/ItemList.vue";
Vue.component("xdf-item-list", ItemList);

import DataTable from "~/components/xdf-common/DataTable.vue";
Vue.component("xdf-data-table", DataTable);
