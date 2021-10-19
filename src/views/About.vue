<template>
  <div class="login-user">
    <div>
      <span>{{username}}さんようこそ！</span>
      <span>残高 : 1000</span>
      <button class="login-btn button is-info"><router-link to="/login">ログアウト</router-link></button>
    </div>
    <h1 class="title">ユーザー覧</h1>
    <div class="userName">
      <h4 class="subtitle1">ユーザ名</h4>
      <form class="userlist">
        <ul>
          <li>
            <span>{{username}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span>{{username}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span>{{username}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      username: ''
    };
  },
  computed: mapGetters(['getUserName']),
  // リロードしてもユーザー名が消えないようにする処理
  created () {
  firebase.auth().onAuthStateChanged((username)=> {
    if (username) {
      this.username = username.displayName
    }
  });
},
  mounted() {
    this.username = this.getUserName
  }
};
</script>
