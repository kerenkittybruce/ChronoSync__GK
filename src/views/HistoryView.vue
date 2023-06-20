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

    <div class="no-admin-page" v-else>
        <div class="no-admin container">
            <div class="row vh-100 d-flex justify-content-center align-content-center">
                <div class="text-center">
                    <h2 class="words">Sorry , it seems you are not registered <br/> as an administrative user for <br/>Life Choices – ChronoSync .</h2>
                    <h2 class="words">Only admins are allowed here .</h2>
                    <router-link to="/"><a class="btn back-btn">Back to Homepage</a></router-link>
                 </div>
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

    computed: {
        users() {
            return this.$store.state.users;
        },
        user() {
            return this.$store.state.user;
        },
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

/* If user is not 'admin' */

.back-btn{
    background-color: green;
    border: 2px solid green;
    color: whitesmoke;
}
.back-btn:hover{
    color: rgb(229, 229, 229);
    background-color: rgb(5, 162, 5);
    transition: 0.5s;
}

.no-admin-page{
    background-color: black;
    color: whitesmoke;
    min-height: 100vh;
    margin-bottom: -100px;
    margin-top: 90px;
}

.no-admin{
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* margin-top: -30px;
  margin-bottom: 100px; */
}

.words{
  text-align: center;
  margin: 40px 0;
}
</style>