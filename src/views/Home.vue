<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>新規登録画面</h1>
    <form>
      <ul>
        <li class="user-name">
          <label for="user-name">ユーザー名</label>
          <input type="text" id="user-name" placeholder="UserName" v-model="username" />
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

    <button @click="register">新規登録</button>
    <br />
    <router-link to="/">ログインはこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
