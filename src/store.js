import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      statemachine: 'start', // start | loading | waiting | end 
      usermsg:  '',         // msg from user
      msgs: [],
      total : 0
  },
  mutations: {
    ADD_PROMPT: (state) => {
        var newMsg = {
            data: 'test',
            source: 'bot',
            type : null,
            options : null,
            createdAt : moment().format('h:mm a'), // Now
            isloading : true
        }
        state.total++;
        state.msgs.push(newMsg);
    },
    UPDATE_MSG: (state,data) => {
        state.msgs[state.total-1].data = data.data; 
        state.msgs[state.total-1].type = data.type; 
        state.msgs[state.total-1].options = data.options; 
        state.msgs[state.total-1].isloading = false; 
    },
    SET_STATEMACHINE: (state,value) => {
        state.statemachine = value;
    },
    ADD_OPTION: (state,option) => {
        var newMsg = {
            data: option,
            source: 'human',
            type : null,
            createdAt : moment().format('h:mm a'), // Now
            isloading : false
        }
        state.total++;
        state.msgs.push(newMsg);
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