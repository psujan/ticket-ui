// eventBus.js
import mitt from 'mitt'

const eventBus = mitt()

const EVENT = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  VALIDATION_ERROR :'valiation-error'
}

const EVENT_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export default eventBus

export { EVENT, EVENT_STATUS }