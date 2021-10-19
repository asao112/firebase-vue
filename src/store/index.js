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
    loginEmail: '',
    loginPassword: '',
  },
  mutations: {
    registerState(state, payload) {
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
    },
    loginState(state, payload) {
      state.loginEmail = payload.loginEmail
      state.loginPassword = payload.loginPassword
    },
  },
  actions: {
    newRegister(context, payload) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: payload.username,
        },)
      .then(() => {
        context.commit('registerState', payload)
      })  
      .then(() => {
        router.push('/about')
      })
      })
      .catch((e) => {
        console.error('エラー :', e.message)
      })
    },
    loginUser(context, payload) {
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.loginEmail, payload.loginPassword)
      .then(() => {
        context.commit('loginState', payload)
      })
      .then(() => {
        alert("ログイン成功!");
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
