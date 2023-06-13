<template>
    <div class="body">
        <h1 class="my-5 head">Register</h1>
        <div class="loginbox animate__animated animate__fadeIn">
            <form @submit.prevent="registerUser" method="POST" class="mx-4 my-5">
                <div class="row">
        <div class="col">
            <label for="firstname" class="names">FirstName</label>
            <input type="text" class="form-control" v-model="register.firstname" name="firstname" aria-label="First name" required="">
        </div>
        <div class="col">
            <label for="lastname" class="names">LastName</label>
            <input type="text" class="form-control" v-model="register.lastname" name="lastname"  aria-label="Last name" required="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <label for="email">Email</label>
            <input type="text" class="form-control" v-model="register.email" name="email" aria-label="First name" required="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <label for="password">Password</label>
            <input type="password" class="form-control"  v-model="register.password" name="password" aria-label="Last name" required="">
        </div>
      </div>
<div>
<button type="submit" class="btn btn-success reg" value="register" v-on:click="toggle"><span id="logs">Register</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
</div>
<router-link to="/login"><a href="">Already have an account?</a></router-link>
</form>
    </div>
        </div>
</template>

<script>
import 'animate.css';
    export default {
        name: 'RegisterView',
        data() {
        return {
            register: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            }
        };
    },
    methods: {
        async registerUser() {
           await this.$store.dispatch("registerUser", this.register);
            this.register.firstname = "";
            this.register.lastname = "";
            this.register.email = "";
            this.register.password = "";
            },
            toggle: function(){
        document.querySelector("#icon").style.display = "inline-block";
        document.querySelector("#logs").style.display = "none";
       }
        }
    }
</script>

<style scoped>
i{
    display: none;
}
.my-element {
  animation: fadeIn;
  animation-duration: 5s;
}
.body{
    margin: 0;
    padding: 0;
    background-color: #000;
    min-height: 100vh;
}
.loginbox{
    min-width: 300px;
    max-width: 700px;
    margin: 100px 0 60px 0;
    background-color: #00000000;
    color: whitesmoke;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}
h1{
    margin-top: 80%;
    padding-top: 60px;
    text-align: center;
    color: whitesmoke;
    font-size: clamp(3.6rem, 10vw, 6rem);
    font-weight: bold;
}
.loginbox p{
    margin: 0;
    padding: 0;
}

/* Animated Input */

.col{
    position: relative !important;
}
label{
    position: absolute;
    left: 5%;
    top: -44%;
    padding: 0.4rem;
    pointer-events: none;
    transform: translateY(1.8rem);
    transition: 0.6s ease;
    background-color: black;
}

.names{
    position: absolute;
    left: 10%;
    top: -44%;
    padding: 0.4rem;
    pointer-events: none;
    transform: translateY(1.8rem);
    transition: 0.6s ease;
    background-color: black;
}
input {
    width: 100%;;
    font-family: Poppins, sans-serif;
    margin-bottom: 40px;
    padding: 2px;
    background-color: transparent;
    border: 2px solid green;
    border-radius: 10px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.1rem;
    outline: none;
    height: 40px;
    color: whitesmoke;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}
input:focus {
    background-color: transparent !important;
    border: 2px solid green !important;
    color: whitesmoke !important;
    outline: none !important;
}
input:valid ~ label, input:focus ~ label{
    transform: translateY(-50px);
    font-size: 0.6rem;
}

/* End of animated input */

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
}
.loginbox button:hover{
    transition: 0.3s;
    opacity: 80%;
}
.loginbox a{
    text-decoration: none;
    color: whitesmoke;
}
.loginbox a:hover{
    color: rgb(174, 188, 176);
    transition: 0.35s;
}
.head{
    font-family: Poppins, sans-serif !important;
}
.reg{
    font-family: Poppins, sans-serif !important;
}
button {
    border-radius: 10px !important;
    padding: 0.7rem 1.9rem;
    font-size: 1rem;
    background-color: green;
    color: whitesmoke;
}
button:hover{
    color: rgb(229, 229, 229);
    background-color: rgb(5, 162, 5);
    transition: 0.5s;
}
@media screen and (width <= 650){
    .loginbox{
        width: 70% !important;
    }
}

@media screen and (width < 550px) {
    h1{
        padding-top: 70px; 
    }  
}
</style>