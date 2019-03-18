import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      statemachine: 'start', // start | loading | waiting | end 
      usermsg:  '',         // msg from user
      msgs: [],
      options: [],
      total : 0
  },
  mutations: {
    ADD_PROMPT: (state) => {
        var newMsg = {
            txt: 'test',
            type: 'bot',
            createdAt : moment().format('h:mm a'), // Now
            isloading : true
        }
        state.total++;
        state.msgs.push(newMsg);
    },
    UPDATE_MSG: (state,msg) => {
        state.msgs[state.total-1].txt = msg; 
        state.msgs[state.total-1].isloading = false; 
    },
    SET_STATEMACHINE: (state,value) => {
        state.statemachine = value;
    },
    ADD_OPTION: (state,option) => {
        state.options.push(option);
    },
  },
  actions: {
    addMsg: (context, payload) => {
        context.commit("ADD_MSG", payload)
    }, 
    addPrompt: (context) => {
        context.commit("ADD_PROMPT")
    }, 
    deleteMsg: (context, payload) => {
        context.commit("DELETE_TODO", payload)
    },
    updateMsg: (context, payload) => {
        context.commit("UPDATE_MSG", payload)
    },
    setStateMachine: (context, payload) => {
        context.commit("SET_STATEMACHINE", payload)
    },
    addOption: (context, payload) => {
        context.commit("ADD_OPTION", payload)
    }
  }
})