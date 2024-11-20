import axios from "axios";
export default class Api {

  static get(url){
    axios.get(url).then((res)=>{
      return res;
    })
    console.log('get', url);
  }

  static post(url , payload){
    console.log(url , payload);
  }

  static delete(url , payload){
    console.log(url , payload)
  }

  static update(url , payload){
    console.log(url , payload)
  }
}