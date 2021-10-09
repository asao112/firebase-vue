<template>
  <div>
    <h1 class="title">ログイン画面</h1>
    <form>
      <ul>
        <li>
          <label for="email">メールアドレス</label>
          <input type="email" id="email" placeholder="E-mail" v-model="LoginEmail" />
        </li>
        <li>
          <label for="password">パスワード</label>
          <input type="password" id="password" placeholder="PassWord" v-model="LoginPassword" />
        </li>
      </ul>
    </form>
    <button class="button is-info is-outlined" @click="LoginUser">ログイン</button>
    <br />
    <router-link to="/">新規登録はこちらから</router-link> 
  </div>
</template>
<script>
export default {
  name: 'singin',
  data() {
    return {
      LoginEmail: '',
      LoginPassword: ''
    };
  },
  methods: {
    LoginUser() {
      this.$store.dispatch('LoginUser', {
        LoginEmail: this.LoginEmail, 
        LoginPassword: this.LoginPassword
      })
    }
  }
};
</script>
