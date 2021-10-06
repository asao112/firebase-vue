import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgzxSSRfb6A04H8I8-AKGUmYR3AgNseKs",
  authDomain: "fire-467a2.firebaseapp.com",
  databaseURL: "https://fire-467a2-default-rtdb.firebaseio.com",
  projectId: "fire-467a2",
  storageBucket: "fire-467a2.appspot.com",
  messagingSenderId: "850942250799",
  appId: "1:850942250799:web:ad06939ea285fd652b5bda",
  measurementId: "G-QXLZ6RGPWF"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
