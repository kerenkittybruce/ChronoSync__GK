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

    computed: {
    user() {
      return this.$store.state.user;
    },
  },

    methods: {

        generateQRCode(){
            // console.log(this.$store.);
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
                text: `${this.user?.userId}`,
                width: 290,
                height: 290,
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
    border: 4px solid rgb(255, 255, 255);
    overflow: hidden;
}
.wrapper div{
    display: block;
    margin-top: 2.8rem;
    margin-left: auto;
    margin-right: auto;
    background: #9b9b9b;
    width: 380px;
    padding: 2rem 0;
    border-radius: 10px;
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