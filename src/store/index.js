import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
    state:{
        items:[]
    },
    actions,
    mutations
})

export default store