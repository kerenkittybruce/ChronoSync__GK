<template>

    <!-- If user is an 'admin' , show 'QRScanner' -->

    <div v-if="user.role === 'admin'">
        <div class="clockin-view pb-4">
            <h1>Hello admin !</h1>
            <br>
            <h3>Scan below :</h3>
            <QRScanner/>
        </div>
    </div>

    <!-- If user is a  'user' , show 'QRGenerator' -->

    <div v-else>
        <div class="clockin-view pb-4">
            <h1>We're happy to see you again !</h1>
            <br>
            <h3>Clock in to your timesheet below :</h3>
            <QRGenerator/>
        </div>
    </div>
</template>

<script>
import QRScanner from '../components/QRScanner.vue';
import QRGenerator from '../components/QRGenerator.vue';
export default {
    name: 'ClockInView',
    components: {QRGenerator, QRScanner},

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    computed: {
        user() {
            return this.$store.state.user;
        },
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
    padding-top: 80px;
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