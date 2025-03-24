import { createRouter,createwebHistory } from 'vue-router'
import login from './src/components/login.vue'
import signup from './src/components/signup.vue'

const routes =[
    {
        path: '/' ,
        name: 'login',
        component:'login'
    },

    {
        path: '/signup' ,
        name: 'signup',
        component:'signup'
    }
]

const router =createRouter({
    history: createwebHistory(),
    routes
})

export default router