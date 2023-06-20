<template>
    <div>

        <!-- QR Code Functionality by Lazola Makubalo -->

        <div class="wrapper">
            <div class=" px-4 qrcode not-generated element d-flex flex-column align-items-center justify-content-center mb-5">
            </div>
            <button class="btn-generate btn element my-3"  @click.prevent="generateQRCode">Generate QR Code</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'QRGenerator',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {

        generateQRCode(){
            let qrCodeContainer = document.querySelector(".qrcode");
            // let link =  document.querySelector(".text").value;
            let link = `https://spring-render-clocking-system.onrender.com/clocking/add`;

            // clear previous QR code
            qrCodeContainer.innerHTML = "";

            // Calculate size in pixels based on percentage
            let containerWidth = qrCodeContainer.offsetWidth;
            let containerHeight = qrCodeContainer.offsetHeight;


            // // generate new QR code
            let qrcode = new QRCode(qrCodeContainer,{
                text: 5,
                width: 290,
                height: 290,
                border: 2
            });
        }    
    },
}
</script>

<style scoped>
body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}
​
.wrapper {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}
​
.element {
    width: 300px;
}
​
.title {
    width: 300px;
    font-size: 33px;
}
​
.qrcode {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    border: 1px solid rgb(218, 218, 218);
    overflow: hidden;
}
​
.qr-title, .qr-paragraph {
    color: rgb(185, 185, 185);
    font-weight: 500;
}

.btn-generate{
    background-color: green;
    color: whitesmoke;
}
</style>