<template>
    <div class="login-section">
        <h1>Login</h1>
        <form @submit.prevent="loginUser" class="login-form" method="POST" au>
            <br>
            <div class="group email">
                <label for="email">E-mail Address</label>
                <br>
                <input type="text" v-model="email" name="email" id="email" required>
            </div>
            <div class="group password">
                <label for="password">Password</label>
                <br>
                <input type="password" v-model="password" name="password" id="password" required>
            </div>
            <!-- <button type="submit" class="btn btn-success" id="logs" v-on:click="toggle"><span id="logs">Submit</span><i class="fa fa-spinner fa-spin" id="icon"></i></button> -->
            <button type="submit" class="btn btn-success" v-on:click="toggle"><span id="logs">Submit</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
            <br>
            <router-link to="/register"><a href="">Don't have an account yet? <span>Sign up here .</span></a></router-link>
        </form>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: 'LoginView',

    data() {
        return {
            email: "",
            password: "",
        };
    },

    mounted() {

    },

    methods: {
        async loginUser () {
            const payload = {
                email: this.email,
                password: this.password
            };
            await this.$store.dispatch("loginUser", payload)
        },

        toggle: function () {
            document.querySelector("#icon").style.display = "inline-block";
            document.querySelector("#logs").style.display = "none";
        }
    },
};
</script>

<style scoped>

I{
    display: none;
}
#logs{
    color: white;
}
.login-section{
    background-color: black;
    min-height: 100vh;
    padding-bottom: 100px;
}
.login-form {
    min-width: 300px;
    max-width: 700px;
    margin-top: 4rem;
    color: whitesmoke;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 6%;
    border-radius: 2rem;
}
h1 {
    padding-top: 90px;
    text-align: center;
    color: whitesmoke;
    font-size: clamp(3.6rem, 10vw, 6rem);
    font-weight: bold;
}
.login-form p {
    margin: 0;
    padding: 0;
}

/* Animated Input */

.group{
    position: relative;
}
label{
    position: absolute;
    left: 5%;
    top: -20%;
    padding: 0.4rem;
    pointer-events: none;
    transform: translateY(1.8rem);
    transition: 0.6s ease;
    background-color: black;
    border-radius: 10px;
}
input {
    width: 100%;
    font-family: Poppins, sans-serif;
    margin-bottom: 20px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.1rem;
    background-color: black;
    border: 2px solid green;
    border-radius: 10px;
    outline: none;
    height: 40px;
    color: whitesmoke;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}
input:focus{
    background-color: black !important;
    color: whitesmoke !important;
}
input:valid ~ label, input:focus ~ label{
    transform: translateY(-50px);
    font-size: 0.6rem;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px black inset;
    -webkit-text-fill-color: whitesmoke !important;
}

/* End of animated input */

.password{
    margin-bottom: 20px;
}
a{
    text-decoration: none;
    color: whitesmoke;
}
span{
    color: green;
}
span:hover{
    color: green;
    text-decoration: 2px underline solid green;
}
button {
    width: 100%;
    border-radius: 10px !important;
    padding: 0.7rem 1.9rem;
    margin: 0 0 10px;
    font-size: 1rem;
    background-color: green;
    color: whitesmoke;
}
button:hover{
    color: rgb(229, 229, 229);
    background-color: rgb(5, 162, 5);
    transition: 0.5s;
}

@media screen and (width < 550px) {

    h1{
        display: none;
    }
}
</style>