<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 justify-content-center">
                <form @submit.prevent="addItem()">
                    <label for="title">Title<br>
                    <input type="text" id="title" v-model="item.title"></label>
                    <button type="submit">Save</button>
                </form>
            </div>
            <div class="col-md-9">
                <div class="card card-default">
                    <div class="card-header">{{msg}}</div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li v-for="item in items" :key="item.id" class="list-group-item">{{ item.title }} 
                                <span class="badge" 
                                :class="item.completed ? 'badge-success':'badge-secondary'"
                                v-text="item.completed ? 'Completed':'Uncompleted'"
                                ></span></li>
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
                msg:'To Do list',
                urlApi:'https://jsonplaceholder.typicode.com/todos',
                item:
                    {
                        'title':'',
                        'completed': '' || false,
                        'userId': '' || 1
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
