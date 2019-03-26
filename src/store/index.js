import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        Rpath : '/',
    },
    mutations : {
        changeRpath(state,path) {
            state.Rpath = path
        }
    },
    actions : {
        useChangeRpath({commit},path) {
            commit('changeRpath',path)
        }
    },
    getters : {
        getRpath : state => state.Rpath,
    }
})

export default store