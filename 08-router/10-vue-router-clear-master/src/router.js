import { createRouter, createWebHistory } from "vue-router";
import Login from './views/Login';
import Forget from './views/Forget';
import Dashboard from './views/Dashboard';
import Mail from './views/Mail';

export default createRouter({
  // позволяет настроить спорсобы переходов
  // createMemoryHistory - vue помнит какие переходы делал пользователь
  // но непоказывает их в url
  // 
  // createWebHashHistory - переходы по хешу
  history: createWebHistory(), // переходы между страницами по слешу
  routes: [
    // aliace - позволяет задавать страницы для которых
    // ещё будет действовать данный роутер
    { path: '/login', component: Login, alias: '/'},
    { path: '/forget', component: Forget},
    { path: '/dashboard', component: Dashboard},
    // дорбавляем динамические страницы
    // через ":" - указываем придуманный нами динамический параметр
    // знак вопроса в конце дин. параметра указывает на не обязательный параметр
    { path: '/mail/:mailId?', component: Mail},
  ],
  // изменяем класс активной ссылки по умолчанию
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})