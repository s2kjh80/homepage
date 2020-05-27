import Vue from 'vue'
import moment from 'moment'

// const onlyNum = {
//   inserted: (el) => {
//     el.style.cssText += 'ime-mode: disabled;'
//     el.addEventListener('keydown', event => {
//       if (!/[0-9]|\./.test(event.key) && event.key != 'Backspace' && event.key != 'Tab') {
//         event.preventDefault()
//         el.value = el.value.replace(/[ㄱ-ㅎ]/gi, 'test')
//       }
//     })
//   }
// }

// Vue.directive('only-num', onlyNum)

Vue.directive('focus', {
  inserted: (el) => {
      el.focus()
  }
})

Vue.directive('currentTime', {
  inserted: (el, binding) => {
    setInterval(() => {
      let format = moment().format(binding.value)
      el.innerHTML = format
    }, 1000)
  }
})
