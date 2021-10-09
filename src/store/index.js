import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    password: '',
    LoginEmail: '',
    LoginPassword: ''
  },
  mutations: {
    registerState(state, payload) {
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
    },
    loginState(state, payload) {
      state.LoginEmail = payload.LoginEmail
      state.LoginPassword = payload.LoginPassword
    }
  },
  actions: {
    newRegister(context, payload) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        context.commit('registerState', payload)
      })
      .then(() => {
        router.push('/about')
      })
      .catch((e) => {
        console.error('エラー :', e.message)
      })
    },
    LoginUser(context, payload) {
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.LoginEmail, payload.LoginPassword)
      .then(() => {
        context.commit('loginState', payload)
      })
      .then(() => {
        router.push('/about');
      })
      .catch((e) => {
        console.error('エラー :', e.message)
      })
    }
  },
  modules: {
  }
})
