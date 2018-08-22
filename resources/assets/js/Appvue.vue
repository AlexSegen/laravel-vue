<template>
<div class="container">
    <nav class="nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/todo">Todo List</router-link>
        </li>
    </nav>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Appvue",
  data() {
    return {};
  }
};
</script>

