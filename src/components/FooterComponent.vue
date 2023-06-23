<template>
    <div>
       <footer class="text-light pt-5 pb-4">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left">
                    <div class="logo col-md-3 mx-auto">
                        <img src="https://i.postimg.cc/MpGc6vG1/logo-429x99.png" alt="lifechoices-logo" height="60">
                    </div>
                    <div class="column col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 class="heading mb-4">Life Choices — ChronoSync</h5>
                        <hr class="mb-4">
                        <p class="quote">❝ Some people dream of success , while other people get up every morning and make it happen . ❞
                        </p>
                        <p class="quote"> — Wayne Huizenga</p>
                    </div>
                    <div class="column col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 class="heading mb-4">
                            Keep Showing Up !
                        </h5>
                        <hr class="mb-4">
                        <p>+27 21 696 4157</p>
                        <p>314 Imam Haron Road</p>
                        <p>Lansdowne</p>
                        <p>Cape Town, 7779</p>
                    </div>
                </div>
            </div>
            <hr class="mb-4">
            <div class="copyright text-center">
                Copyright © 2023 Life Choices — ChronoSync Clocking Attendance System . All Rights Reserved .
            </div>
       </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',

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
footer {
    background-color: black;
    box-shadow: -6px -25px 98px -50px green !important;
    font-family: 'Poppins', sans-serif;
}
.heading {
    color: whitesmoke;
    font-weight: bold;
}
p:hover {
    color: green;
    transition: 0.6s;
}
.quote {
    margin: 26px;
}
.logo {
    margin: 80px;
}
.copyright {
    margin: 20px;
    padding: 10px;
    color: whitesmoke;
    word-spacing: 2.5px;
}
.copyright:hover {
    color: green;
    transition: 0.6s;transition: 0.6s;
}
</style>