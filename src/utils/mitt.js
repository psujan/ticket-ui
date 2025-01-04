// eventBus.js
import mitt from 'mitt'

const eventBus = mitt()

const EVENT = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  VALIDATION_ERROR: 'valiation-error',
  TICKET_STAUS_UPDATE: 'ticket-status-update',
  TICKET_DELETE: 'ticket-delete',
}

const EVENT_SOLUTIONGUIDE = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  VALIDATION_ERROR: 'validation-error',
}

const EVENT_COMMENT = {
  ADD: 'add',
}

const EVENT_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export default eventBus

export { EVENT, EVENT_STATUS, EVENT_SOLUTIONGUIDE, EVENT_COMMENT }
