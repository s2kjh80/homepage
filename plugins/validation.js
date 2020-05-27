import _ from "lodash";
import Vue from "vue";
// import {
//   ValidationObserver,
//   ValidationProvider,
//   extend,
//   localize,
//   configure
// } from "vee-validate";
// import * as rules from "vee-validate/dist/rules";

// localize({
//   kr: {
//     messages: {
//       required: "입력",
//       min: "최소 {length}",
//       max: (_, { length }) =>
//         `this field must have no more than ${length} characters`
//     },
//     fields: {
//       password: {
//         required: "비밀번호 입력필요!",
//         //max: 'Are you really going to remember that?',
//         min: "Too few, you want to get doxed?"
//       }
//     }
//   },
// });

// localize("kr");

// Object.keys(rules).forEach((v) => {
//   extend(v, rules[v])
// })

// _.forEach(rules, (v, k) => {
//   extend(k, v)
// })

// extend('required', {
//   validate (value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value) === -1
//     };
//   },
//   computesRequired: true
// });

// extend('min', {
//   validate(value, args) {
//     return value.length >= args.length;
//   },
//   params: ['length']
// })

//Vue.component("ValidationObserver", ValidationObserver);
//Vue.component("ValidationProvider", ValidationProvider);


///// vuetify valid
const rules = {
  required: (v, msg = "필수입력값입니다.") => {
    return !!v || msg
  }
}

Vue.prototype.$rules = rules

