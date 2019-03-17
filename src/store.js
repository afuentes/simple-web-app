import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      flow: 'begin',        // begin|load| dialog| think | wait | end 
      cmd:  'botstart',    //  botstart | botnextaction | usercmd
      usermsg:  '',         // msg from user
      msgs: [],
      options: [],
      total : 0
  },
  mutations: {
    ADD_PROMPT: (state) => {
        var newMsg = {
            txt: '',
            type: 'bot',
            isloading : true
        }
        state.total++;
        //state.msgs.unshift(newMsg);
        state.msgs.push(newMsg);
    },
    UPDATE_MSG: (state,msg) => {
        state.msgs[state.total-1].txt = msg; 
        state.msgs[state.total-1].isloading = false; 
    },
    SET_FLOW: (state,value) => {
        state.flow = value;
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
    setFlow: (context, payload) => {
        context.commit("SET_FLOW", payload)
    },
    addOption: (context, payload) => {
        context.commit("ADD_OPTION", payload)
    }
  }
})