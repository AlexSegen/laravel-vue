import Vue from 'vue'
import Router from 'vue-router'


import Home from '../pages/home/Home'
import TodoList from '../pages/todo/TodoList'
import Users from '../pages/users/Users'




Vue.use(Router)

let router = new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/todo',
            name:'TodoList',
            component: TodoList
        },
        {
            path:'/users',
            name:'Users',
            component: Users
        },

    ]
})

export default router