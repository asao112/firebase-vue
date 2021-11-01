<template>
  <div class="login-user">
    <div>
      <span>{{user}}さんようこそ！</span>
      <span>残高 : 1000</span>
      <button class="login-btn button is-info"><router-link to="/login">ログアウト</router-link></button>
    </div>
    <h1 class="title">ユーザー覧</h1>
    <div class="userName">
      <h4 class="subtitle1">ユーザ名</h4>
      <form class="userlist">
        <ul>
          <li>
            <span>{{user}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span>{{user}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span>{{user}}</span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
//import firebase from 'firebase';
export default {
  data() {
    return {
      user: ''
    };
  },
  methods: {
    setUser() {
      this.$store.dispatch('setUser', )
    }
  },
};
</script>
