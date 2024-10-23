<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
    <button class="btn" @click="this.$router.push('/login')">Обратно к логину способ 2</button>
  </div>
</template>
<script>
export default {
  methods: {
    // Cоздаём метод позволяющий переходить r нужной странице
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>