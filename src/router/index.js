import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import position from '../views/GetPosition.vue'
import departament from '../views/GetDepartament.vue'
import user from '../views/GetUser.vue'
import employee from '../views/GetEmployee.vue'
import CreateDepartament from '../views/CreateDepartament.vue'
import CreateEmployee from '../views/CreateEmployee.vue'
import CreateUser from '../views/CreateUser.vue'
import CreatePosition from '../views/CreatePosition.vue'

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
        name: 'CreateDepartament',
        component: CreateDepartament
    },
    {
        path: '/createEmployee',
        name: 'CreateEmployee',
        component: CreateEmployee
    },
    {
        path: '/createUser',
        name: 'CreateUser',
        component: CreateUser
    },
    {
        path: '/createPosition',
        name: 'CreatePosition',
        component: CreatePosition
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
