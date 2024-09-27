import { createPinia, defineStore } from "pinia";

const pinia = createPinia()
export const useMainStore = defineStore('main',{
  state:()=>({
    loading:false as boolean
  }),
  actions:{
    
  }
})
export default pinia