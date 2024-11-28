import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const tAgo = new TimeAgo('en-AU')

const generateRandomString = () => {
  console.log('generating')
}

const timeAgo = (date) => {
  return tAgo.format(new Date(date), 'round')
}

export { generateRandomString, timeAgo }
