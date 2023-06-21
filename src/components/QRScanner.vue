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
            function renderScanner(){
                scanner.render(success, error);
            }
            renderScanner();

            // function success: excecuted if the QRCode has been scanned successfully
            async function success(result) {
                // clear the scanner and bring it back after 4 seconds
                scanner.clear();
                setTimeout( ()=> {
                    renderScanner();
                }, 4000)

                try {
                    // return an error if the results scanned is not a number
                    if (parseInt(result) === NaN) return console.error("Value is not a number!");

                    console.log("Id: " + result);
                    // get the latest record of the user
                    let clockingResponse = await axios.get('https://spring-render-clocking-system.onrender.com/clocking/all/user/' + result);
                    let latestRecord = clockingResponse?.data;
                    latestRecord = latestRecord[latestRecord.length-1];

                    // if the user is clocked in

                    // check if the date is the same
                    const currentFormattedDate = () => {
                        let date = new Date();
                        // options to set the current date
                        let options = {
                            timeZone: 'Africa/Johannesburg',     
                        };
                        // south african date
                        let saDate = date.toLocaleDateString('en-ZA', options);
                        let splittedDate = saDate.split('/');
                        return `${splittedDate[0]}-${splittedDate[1]}-${splittedDate[2]}`;
                    }
            
                    // boolean: true if dates are the same else false
                    let sameDate = currentFormattedDate() === latestRecord?.date;

                    // if there is a clock in, no clockout and still same date
                    if (latestRecord?.clockIn && !latestRecord?.clockOut && sameDate){
                        console.log("Debug1: Same date? : " + sameDate);
                        console.log("Last clocked in at " + latestRecord?.clockIn);
                        let clockOutURL = `https://spring-render-clocking-system.onrender.com/clocking/user/${result}/clockout`;
                        let clockOutResponse = await axios.put(clockOutURL);
                        console.log("Clockout response: ", clockOutResponse);
                        alert(clockOutResponse?.data ? "Successfully clocked out" : "Could not clock out!");
                    } 
                    
                    else if (
                        // if there is a clock in, no clockout but different date
                        (latestRecord?.clockIn && !latestRecord?.clockOut && !sameDate) ||
                        // or if there is a clock out
                        (latestRecord?.clockOut)
                    ){
                        console.log("Debug2: Same date? : " + sameDate);
                        let clockInURL = `https://spring-render-clocking-system.onrender.com/clocking/add`;
                        let clockinResponse = await axios.post(clockInURL, {
                            userId: result,
                        });
                        alert(clockinResponse ? "successfully clocked In": "Could not clock in");
                    }

                
                // catch errors that are thrown
                } catch (err) {
                    return console.error(err);
                }
            }

            // ignore this error while scanning
            function error (err) {
                return
            }
        },
        
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

</style>