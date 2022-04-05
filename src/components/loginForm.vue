<template>
    <form class="login-container">
        <h1>LOGIN</h1>
        <form class="login" @submit.prevent="login">
            <h1 class="heading">Join Us!</h1>
            <p>E-mail:</p>
            <input 
                type="email" 
                placeholder="Email address"
                v-model="login_form.email" />
            <p>Your Password:</p>
            <input 
                type="password" 
                placeholder="********" 
                v-model="login_form.password" />
            <router-link to="/register"><h3>You don't have an account?Make here</h3></router-link>
            <input type="submit" value="Login &#8594;">
        </form>
    </form>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex';
export default {
    setup() {
        const login_form = ref({});
        const store = useStore();
        const login = () => {
            store.dispatch('login', login_form.value);
        }
        return{
            login_form,
            login
        }
    }
}
</script>

<style>
.login-container {
        height: 100%;
        background: rgb(10, 36, 71);
        overflow: visible;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        font-size: 20px;
        margin: 10px 10px;
        padding: 30px;
        position: absolute;
        width: 50%;
        left: 25%;
}
.login{
    background-color: rgb(255, 255, 255);
    padding: 5px 30px 30px 30px;
    border: 0px solid black;
    border-radius: 5px;
    box-shadow: 0px 3px 15px 1px rgb(88, 176, 248);
}
.heading {
    text-align: center;
}
input[type="text"],
input[type="email"],
select,
textarea {
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 10px;
    border-top: 0px solid;
    border-right: 0px solid;
    border-left: 0px solid;
    border-bottom: 2px solid rgba(107, 107, 107, 0.397);
    border-radius: 1px;
}
input[type="submit"] {
    background-color: rgb(10, 36, 71);
    border: 0px solid black;
    border-radius: 50px;
    padding: 8px 15px 8px 15px;
    margin-top: 25px;
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    color: white;
}
input[type="submit"]:hover {
    background-color: turquoise;
    color: black;
}
</style>