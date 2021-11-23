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
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
    },
    loginState(state, payload) {
      state.loginEmail = payload.loginEmail
      state.loginPassword = payload.loginPassword
    },
    setUser(state, payload) {
      state.username = payload.username
    }
  },
  actions: {
    setUser(context, payload) {
      firebase.auth().onAuthStateChanged((username) => {
        payload.username = username.displayName;
      })
      console.log(payload)
      context.commit('setUser', payload)
    },
    newRegister(context, payload) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: payload.username,
        },)
        .then(() => {
          const db = firebase.firestore();
          db.collection('user').add({
            username: payload.username,
            namber: firebase.firestore.Timestamp.fromDate(new Date())
          })
        })
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
        firebase.auth().currentUser.updateProfile({
          displayName: payload.username,
        },)
        .then(() => {
          firebase.auth().onAuthStateChanged(async (username) => {
            // ログイン時
            if (username) {
              // ログイン済みのユーザー情報があるかをチェック
              await firebase.firestore().collection('user').doc(payload.username).get()
            }
          });
        })
        .then(() => {
          alert("ログイン成功!");
          router.push('/about');
        })
      })
      .catch((e) => {
        console.error('エラー :', e.message)
      })
    }
  },
  plugins: [createPersistedState()]
})



