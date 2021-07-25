import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export const alertSuccess =  (msg) => createToast(msg, { type: 'success', timeout: 3000 })
export const alertError = (msg) => createToast(msg, { type: 'warning', timeout: 2000 })