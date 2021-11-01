<template>
  <div>
    <h1 class="title">新規登録画面</h1>
    <form>
      <ul>
        <li class="user-name">
          <label for="user-name">ユーザ名</label>
          <input type="text" id="user-name" placeholder="UserName" v-model="user" />
        </li>
        <li class="email">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" placeholder="E-mail" v-model="email" />
        </li>
        <li class="password">
          <label for="password">パスワード</label>
          <input type="password" id="password" placeholder="PassWord" v-model="password" />
        </li>
      </ul>
    </form>
    <button class="button is-info is-outlined" @click="newRegister">新規登録</button>
    <br />
    <router-link to="/login">ログインはこちらから</router-link>
  </div>
</template>
<script>
//import firebase from 'firebase';
export default {
  name: 'Register',
  data() {
    return {
      user: '',
      email: '',
      password: '',
    };
  },
  methods: {
    newRegister() {
      this.$store.dispatch('newRegister', {
        user: this.user,
        email: this.email,
        password: this.password,
      },
      )
    },
  }
};
</script>

