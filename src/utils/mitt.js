// eventBus.js
import mitt from 'mitt';

const eventBus = mitt();

const EVENT = {
  ADD :'add',
  UPDATE :'update',
  DELETE : 'delete'
}

export default eventBus;

export {EVENT}