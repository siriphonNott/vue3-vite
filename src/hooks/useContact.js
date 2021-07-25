import { reactive } from 'vue'
import { alertSuccess, alertError } from './useNotification'

const useContact = () => {

  const contactForm = reactive({
    name: '',
    email: ''
  })
  
  const onSubmitContact = () => {
    if(!contactForm.name) return alertError('Please input your name')
    if(!contactForm.email) return alertError('Please input your email')
    alertSuccess('Sent your message successfully!');
    resetForm()
  }
  const resetForm = () => {
    contactForm.name = ''
    contactForm.email = ''
  }
  return { contactForm, onSubmitContact }  
}

export default { useContact }