<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 justify-content-center">
                <form @submit.prevent="addItem()">
                    <label for="name">Name<br>
                    <input type="text" id="name" v-model="item.name"></label><br>
                    <label for="username">Username<br>
                    <input type="text" id="username" v-model="item.username"></label><br>
                    <label for="email">Email<br>
                    <input type="email" id="email" v-model="item.email"></label><br>
                    <button type="submit">Save</button>
                </form>
            </div>
            <div class="col-md-9">
                <div class="card card-default">
                    <div class="card-header">{{msg}}</div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li v-for="item in items" :key="item.id" class="list-group-item">{{ item.name }} | {{ item.email }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                msg:'User list',
                urlApi:'https://jsonplaceholder.typicode.com/users',
                item:
                    {
                        'name':'',
                        'email': '',
                        'username': ''
                    },
                items:[]
            }
        },
        methods:{
            getItems(){
                axios.get(this.urlApi).then(response =>{
                    this.items = response.data
                }).catch(err=>{
                    console.log('Cannot connect. ' + err);
                })
            },
            addItem(){
                axios.post(this.urlApi, this.item).then(response=>{
                    const myItem = JSON.stringify(this.item);
                    console.log('Item added! ' + myItem)
                    this.item = ''
                }).catch(err=>{
                    console.log('Cannot add item. ' + err);
                })
            }
        },
        mounted() {
            this.getItems();
        }
    }
</script>
