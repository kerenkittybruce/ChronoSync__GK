<template>
    <div class="home">
        <h1>Welcome Back !</h1>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.home {
    position: scroll;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content:left;
    align-items: left;
    min-height: 100vh;
    background-image: url("https://i.postimg.cc/zBrgBmqZ/eliott-reyna-j-CEp-N62o-WL4-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: Poppins, sans-serif;
}
h1{
    position: absolute;
    top: 68%;
    left: 80%;
    width: 80%;
    transform: translate(-96%, -30%);
    -ms-transform: translate(-96%, -30%);
    color: whitesmoke;
    font-weight: bolder;
    font-size: clamp(3.6rem, 10vw, 6.8rem);
    text-align: left;
    text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6);
}
@media screen and (width <= 650){
    h1{
        font-size: clamp(1.8rem, 5vw, 3.4rem);
    }
}
</style>