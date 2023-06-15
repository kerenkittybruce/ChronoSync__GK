<template>
    <div class="clockin-view">
        <h1>We're happy to see you again !</h1>
        <br>
        <h3>Clock in to your timesheet below :</h3>
    </div>
</template>

<script>
export default {
    name: 'ClockInView',

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
.clockin-view {
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