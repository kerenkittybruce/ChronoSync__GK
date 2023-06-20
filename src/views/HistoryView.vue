<template>
    <div v-if="user.role === 'admin'">
        <h1>User History</h1>
        <br>
        <h3>Search for a name and their timesheet will appear below :</h3>

        <h4 class="text-center">The timesheet will appear here</h4>
    </div>

    <div class="no-admin container" v-else>
        <div class="row vh-100 d-flex justify-content-center align-content-center">
          <div class="text-center">
            <h2>Sorry , it seems you are not registered <br/> as an administrative user for <br/>Life Choices – ChronoSync .</h2>
            <h2>Only admins are allowed here .</h2>
            <router-link to="/"><a class="btn btn-success">Back to Homepage</a></router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryView',

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
div {
    position: scroll;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height: 100vh;
    margin-top: 80px;
    background-color: black;
}
h1 {
    margin-top: 6%;
    padding-top: 12.5px;
    text-align: center;
    color: whitesmoke;
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: bold;
}
h3 {
    margin-top: 2%;
    padding-bottom: 12.5px;
    text-align: center;
    color: whitesmoke;
    font-size: clamp(0.95rem, 2.5vw, 1.5rem);
    font-weight: bold;
}
</style>