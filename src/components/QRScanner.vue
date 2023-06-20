<template>
    <div class="wrapper">

        <!-- QR Code Functionality by Lazola Makubalo -->

        <div id="reader"></div>
        <div id="result"></div>
    </div>
</template>

<script>
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios'; 

export default {
    name: 'QRScanner',

    data() {
        return {
            
        };
    },

    mounted() {
       this.createScanner(); 
    },

    methods: {
        createScanner(){
            // defining the scanner
            let scanner = new Html5QrcodeScanner ('reader', {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 20
            });

            // rendering the scanner, will perform function success or error
            scanner.render(success, error);

            // function success: excecuted if the QRCode has been scanned successfully
            async function success (result) {
                scanner.clear();
                document.getElementById('reader').remove();

                console.log("Result: ", result);

                // try {
                
                //     // return an error if the results scanned is not a number
                //     // if (parseInt(result) === NaN) return console.error("Value is not a number!");

                //     console.log("Id: " + result);
                //     // get the latest record of the user
                //     let clockingResponse = await axios.get('https://spring-render-clocking-system.onrender.com/clocking/all/user/' + result);
                //     let latestRecord = clockingResponse?.data;
                //     latestRecord = latestRecord[latestRecord.length-1];

                //     // if the user is clocked in
                //     if (latestRecord?.clockIn){
                //         console.log("Last clocked in at " + latestRecord?.clockIn);
                //         let clockOutURL = `https://spring-render-clocking-system.onrender.com/clocking/user/${result}/clockout`;
                //         let clockOutResponse = await axios.put(clockOutURL);
                //         // alert("Clockout response: " ,clockOutResponse);
                //         console.log("Clockout response: " ,clockOutResponse);
                        
                //         console.log(clockOutResponse?.data ? "Successfully clocked out" : "Could not clock out!");
                //     }

                //     // if the user is not clocked in
                //     else {
                //         let clockInURL = `https://spring-render-clocking-system.onrender.com/clocking/add`;
                //         let clockinResponse = await axios.post(clockInURL, {
                //             userId: result,
                //         });
                //         console.log(clockinResponse ? "successfully clocked In": "Could not clock in");
                //     }
                
                // // catch errors that are thrown
                // } catch (error) {
                //     return error;
                // }
            }

            function error (err) {
                console.error("Could not scan");
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
    right: 25px;
    background-image:  linear-gradient(rgba(51, 255, 0, 0), rgba(30, 185, 6, 0.514),rgba(51, 255, 0, 0));   
    z-index: 1000;
    animation: move 1.5s infinite linear;
}

@keyframes move {
    0% { 
        top: 0;
    }

    50% {
        top: 75%;
    }

    100% {
        top: 0;
    }
}
</style>