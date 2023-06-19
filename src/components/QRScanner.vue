<template>
    <div class="wrapper">

        <!-- QR Code Functionality by Lazola Makubalo -->

        <div id="reader"></div>
        <div id="result"></div>
    </div>
</template>

<script>
export default {
    name: 'QRScanner',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {

        createScanner(){
            let scanner = new Html5QrcodeScanner ('reader', {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 20
            });

            scanner.render(success, error);

            function success (result) {
                scanner.clear();
                document.getElementById('reader').remove();

                try {
                    axios.post(URL + result);
                } catch (error) {
                    return error;
                }
            }

            function error (err) {
                console.error(err);
            }
        }
    },
};
</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 6rem;
}

#reader {
    height: 300px;
    width: 300px;
    border: 1px solid rgb(235, 252, 235);
    box-shadow: 0 0 5px 0 gray;
    border-radius: .5rem;
    position: relative;
}

#reader::before {
    content: "";
    height: 10px;
    width: 100%;
    position: absolute;
    right: 26px;
    background-image:  linear-gradient(rgba(51, 255, 0, 0), rgba(30, 185, 6, 0.514),rgba(51, 255, 0, 0));   
    z-index: 1000;
    animation: move 1.5s infinite linear;
}

@keyframes move {
    0% { 
        top: 0;
    }

    50% {
        top: 73%;
    }

    100% {
        top: 0;
    }
}


</style>