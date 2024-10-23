<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <router-link to="/forget" v-slot="{ navigate}">
      <button class="btn warning" @click="navigate">Забыл пароль?</button>
    </router-link>
    <router-link to="/forget">Забыл пароль?</router-link>
  </form>
</template>

<script>
import { inject } from 'vue';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid() {
      return this.email !== '' && this.password !== ''
    }
  },
  inject: ['login'],
  methods: {
    submit() {
      if (this.isValid) {
        // login
        // metod replace - устраняет список переходов
        // this.$router.replace('dashboard')

        // чтобы не писать на какой роут переходить, можно вызвать метод "login"
        // описанный в App.vue
        // this.$router.push('dashboard')

        this.login();
      }
    }
  }
}
</script>

<style scoped>

</style>