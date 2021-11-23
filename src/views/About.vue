<template>
  <div class="login-user">
    <ul>
      <li class="userList" v-for="(user,index) in userData" :key="index">{{ user.username }}さんようこそ</li>
      <span class="balance">残高 : 1000</span>
      <button class="login-btn button is-info"><router-link to="/login">ログアウト</router-link></button>
    </ul>
    <h1 class="title">ユーザー覧</h1>
    <div class="userName">
      <h4 class="subtitle1">ユーザ名</h4>
      <form class="userlist">
        <ul>
          <li>
            <span></span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span></span>
            <button>walletを見る</button>
            <button>送る</button>
          </li>
          <li>
            <span></span>
            <button >walletを見る</button>
            <button>送る</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import 'firebase/firestore';
export default {
  data() {
    return {
      username: '',
      userData: []
    }
  },
  mounted() {
    const db = firebase.firestore()
    db.collection('user').orderBy('namber', 'desc').limit(1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
            this.userData.push(doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    console.log(this.username)
    this.$store.dispatch('setUser', {
      username: this.username
    },)
  }
};
</script>