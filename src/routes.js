import { createRouter, createWebHistory } from 'vue-router'
import login from './components/login.vue'
import signup from './components/signup.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
