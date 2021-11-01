import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'

//りローしてもデータを保持する
const initialState = {
  username: '',
  email: '',
  password: '',
  loginEmail: '',
  loginPassword: '',
  loggedIn: false,
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: initialState,
  mutations: {
    registerState(state, payload) {
      state.user = payload.user
      state.email = payload.email
      state.password = payload.password
    },
    loginState(state, payload) {
      state.loginEmail = payload.loginEmail
      state.loginPassword = payload.loginPassword
    },
    setUser(state, payload) {
      state.user = payload.user
    }
  },
  actions: {
    setUser() {
      console.log('こんにちは')
    },
    newRegister(context, payload) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: payload.user,
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
  plugins: [createPersistedState()]
})
