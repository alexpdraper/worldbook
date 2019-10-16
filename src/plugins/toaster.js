import ToastBox from '@/components/ToastBox'

export default {
  install (Vue) {
    if (Vue.prototype.$toast) return
    const el = document.createElement('div')
    document.body.appendChild(el)
    const toastBox = new Vue({
      el,
      render: h => h(ToastBox, { ref: 'toastBox' })
    })

    Vue.prototype.$toast = message => toastBox.$refs.toastBox.toast(message)
  }
}
