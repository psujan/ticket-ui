import { useToast } from 'vuestic-ui'
const colorMap = {
  success: 'success',
  error: 'danger',
  info: 'primary',
  warning: 'warning',
}

const { init } = useToast()

export default function toast(msg = 'Successful', type = 'success', duration = 2500) {
  init({ message: msg, color: colorMap[type], duration: duration })
}
