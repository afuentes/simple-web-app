import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      statemachine: 'start', // start | loading | waiting | end 
      msgs: []
  },
  mutations: {
    ADD_PROMPT: (state) => {
        var newMsg = {
            data: '',
            source: 'bot',
            type : null,
            options : null,
            createdAt : null,
            isloading : true
        }
        state.msgs.push(newMsg);
    },
    UPDATE_MSG: (state,data) => {
        var msg = state.msgs[state.msgs.length-1];
        // Minimal length of data , fill with spaces
        if(data.data.length < 8) {
            msg.data = data.data.padEnd(10); 
        }else {
            msg.data = data.data;    
        }
        msg.type = data.type; 
        msg.createdAt = moment().format('h:mm a'),
        msg.options = data.options; 
        msg.isloading = false; 
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