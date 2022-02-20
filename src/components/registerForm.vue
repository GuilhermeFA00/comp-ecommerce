<template>
    <form class="register-container">
        <form class="register" @submit.prevent="register">
            <h1 class="heading">Register</h1>
            <p>E-mail:</p>
            <input 
                type="email" 
                placeholder="Email address"
                v-model="register_form.email" />
            <p>Your Password:</p>
            <input 
                type="password" 
                placeholder="Password" 
                v-model="register_form.password" />
            <router-link to="/login"><h3>You already have an account?get in</h3></router-link>
            <input type="submit" value="Register &#8594;">
        </form>
    </form>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex';
export default {
    setup() {
        const register_form = ref({});
        const store = useStore();
        const register = () => {
            store.dispatch('register', register_form.value);
        }
        return{
            register_form,
            register
        }
    }
}
</script>

<style>
.register-container {
    height: 100%;
    background: rgb(170, 252, 145);
    overflow: visible;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 20px;
    margin: 10px 10px;
    padding: 30px;
    width: 50%;
    position: absolute;
    left: 25%;
}
.register{
    background-color: rgb(248, 169, 169);
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