import Vue from 'vue'
import moment from 'moment'

const tpNm = (value, tps = []) => {
  if (tps.find(val => val.value == value)) {
    return tps.find(val => val.value == value).text;
  } else {
    return "";
  }
}

const dateFormat = (value, format) => {
  return moment(value).format(format)
}

Vue.filter('tpNm', tpNm)
Vue.filter('dateFormat', dateFormat)