<template>
    <div class="row justify-content-center">
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h3>{{item.name}} <br><small>{{item.email}}</small></h3>
                    <router-link class="btn btn-secondary" to='/users'>Ir atrás</router-link>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'UserId',
    data(){
        return{
            urlApi:'https://jsonplaceholder.typicode.com/users',
            item:{}
        }
    },
    mounted(){
        this.getItem();
    },
    methods:{
        getItem(){
            axios.get(this.urlApi + '/' + this.$route.params.id).then(response=>{
                this.item = response.data
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    
}
</script>
