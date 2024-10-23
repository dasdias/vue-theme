<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
    login() {
      this.isAuth = true;
      // при логине проверяем присутствует ли квери параметр
      // если "да" то переходим на страницу указанную в квери page
      this.$router.push(this.$route.query.page ? this.$route.query.page : '/dashboard' )
      console.log('this.$route.query: ', this.$route.query);
    },
    logout() {
      this.isAuth = false;
      // передаём объект c параметрами
      this.$router.push({
        path: '/login',
        // указываем квери параметры
        query: {
          // добавляем параметр page и c помощью метода $route
          // узнаём текущию страницу
          page: this.$route.path,
        }
      })
    },
  },
  components: {TheNavbar},
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 1, theme: 'Купил себе PlayStation 5'},
        {id: 2, theme: 'Выучил Vue Router'},
        {id: 3, theme: 'Хочу изучить весь Vue'},
        {id: 4, theme: 'А следующий блок про Vuex!'},
        {id: 5, theme: 'А что там на счет Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>
</style>
