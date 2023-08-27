import { defineStore,acceptHMRUpdate } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      isLogin: false,
      user:{}
    }
  },
  actions:{
    login(payload:object){
      this.isLogin=true;
      this.user=payload;
    },
    logout(){
      this.isLogin=false;
      this.user={};
    }
  },
  persist: {
    storage:localStorage
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
