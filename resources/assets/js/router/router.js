import Vue from 'vue'
import Router from 'vue-router'


import Home from '../pages/home/Home'
import TodoList from '../pages/todo/TodoList'
import Users from '../pages/users/Users'
import UserId from '../pages/users/_Id'




Vue.use(Router)

let router = new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/todo',
            name:'todoList',
            component: TodoList
        },
        {
            path:'/users',
            name:'users',
            component: Users
        },
        {
            path:'/user/:id',
            component: UserId
        }
    ]
})

export default router