import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import position from '../components/getPosition.vue'
import departament from '@/components/getDepartament.vue'
import user from '@/components/getUser.vue'
import employee from '@/components/getEmployee.vue'
import createDepartament from '@/components/createDepartament.vue'
import createEmployee from '@/components/createEmployee.vue'
import createUser from '@/components/createUser.vue'
import createPosition from '@/components/createPosition.vue'
import login from '@/components/Login.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/position',
        name: 'position',
        component: position
    },
    {
        path: '/departament',
        name: 'departament',
        component: departament
    },
    {
        path: '/employee',
        name: 'employee',
        component: employee
    },
    {
        path: '/user',
        name: 'user',
        component: user
    },
    {
        path: '/createDepartament',
        name: 'createDepartament',
        component: createDepartament
    },
    {
        path: '/createEmployee',
        name: 'createPosition',
        component: createEmployee
    },
    {
        path: '/createUser',
        name: 'createUser',
        component: createUser
    },
    {
        path: '/createPosition',
        name: 'createPosition',
        component: createPosition
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
