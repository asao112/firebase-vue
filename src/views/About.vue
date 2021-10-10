<template>
  <div class="login-user">
    <div>
      <span>{{loginUser}}さんようこそ！</span>
      <span>残高 : 1000</span>
      <button class="login-btn button is-info"><router-link to="/login">ログアウト</router-link></button>
    </div>
    <h1 class="title">ユーザー覧</h1>
    <div class="userName">
      <h4 class="title is-4">ユーザ名</h4>
    </div>
  </div>
</template>
