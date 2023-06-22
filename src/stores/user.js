import axios from 'axios';
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue'


//创建User Store
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: reactive([])
        }
    },
    // getter 函数接收 state 作为参数，推荐使用箭头函数
    getters: {
        getUser() {
            return this.user
        }
    },
    //定义 actions，有同步和异步两种类型
    actions: {
        setUser(value){
            this.user = value
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'my_user',
                storage: sessionStorage,
            }
        ]
    }
})

export default useUserStore;