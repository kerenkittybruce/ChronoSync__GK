<template>

    <!-- If user is an 'admin', show 'history modal' -->

    <div v-if="user.role === 'admin'">
        <h1>User History</h1>
        <br>
        <h3>Search for a name and their timesheet will appear below :</h3>

        <button type="button" class="btn modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login History
        </button>

        <!-- Bootstrap Modal By Abdul Abrahams -->

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">User Login History</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-dark">
                        <div>
                            <a class="btn modal-btn dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            June 2023
                            </a>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    1 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                    2 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                    3 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a class="btn modal-btn dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            July 2023
                        </a>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                1 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                2 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                3 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a class="btn modal-btn dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            August 2023
                        </a>
                        <div class="collapse" id="collapseExample3">
                            <div class="card card-body">
                                1 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                2 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                3 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn modal-btn">Save changes</button>
            </div>
        </div>
    </div>

    <!-- If user is a 'user', show 'error message' -->

    <div class="no-admin container" v-else>
        <div class="row vh-100 d-flex justify-content-center align-content-center">
          <div class="text-center">
            <h2>Sorry , it seems you are not registered <br/> as an administrative user for <br/>Life Choices – ChronoSync .</h2>
            <h2>Only admins are allowed here .</h2>
            <router-link to="/"><a class="btn btn-dark">Back to Homepage</a></router-link>
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

/* History Modal */

.modal-btn{
    background-color: green;
    color: whitesmoke;
    width: 80%;
}
h5 {
    margin-top: 2%;
    padding-bottom: 12.5px;
    text-align: center;
    color: whitesmoke;
    font-size: clamp(0.425rem, 1.25vw, 0.75rem);
    font-weight: bold;
}
</style>