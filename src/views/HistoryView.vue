<template>

    <!-- If user is an 'admin', show 'history modal' -->

    <div v-if="user" class="bg-black history-section">
        <h1>User History</h1>
        <br>
        <h3>Your timesheet will appear below :</h3>

        <button class="btn logBtn" data-bs-toggle="modal" :data-bs-target= "`#HistoryModal${user?.userId}`"
            @click.prevent="setClockingHistory(user?.userId)">
            Login History
        </button>

        <div class="modal fade" :id="`HistoryModal${user?.userId}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <a class="btn modBtn dropdown-toggle w-100 mb-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            June 2023
                        </a>
                        <div class="collapse" id="collapseExample">
                            <div v-if="clockings?.length > 0">
                                <table v-for="record in clockings" :key="record?.recordId" class="mb-3">
                                    <thead>
                                        <tr>
                                            <th colspan="2">{{ record?.date }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <!-- <input type="text" :value="record?.clockIn"> -->
                                                <p>{{ record?.clockIn }}</p>
                                            </td>
                                            <td>
                                                <!-- <input type="text" :value="record?.clockOut === null ? '---' : record?.clockOut"> -->
                                                <p>{{ record?.clockOut === null ? '---' : record?.clockOut }}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else>
                                <h1 class="text-white">Nothing to display</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- If user is a 'user', show 'error message' -->

    <div class="no-admin-page" v-else>
        <div class="no-admin container">
            <div class="row vh-100 d-flex justify-content-center align-content-center">
                <div class="text-center">
                    <h2 class="words">Sorry , it seems you are not registered <br/> as an administrative user for <br/>Life Choices — ChronoSync .</h2>
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
        clockings(){
        return this.$store.state.clockings;
        }
    },

    mounted() {
        
    },

    methods: {
        setClockingHistory(userId){
      this.selectedUserId = userId;
      this.$store.dispatch("getClockings", this.selectedUserId);
    
      console.log(this.clockings);
    },
    },
};
</script>

<style scoped>
.history-section{
    margin-top: 90px;
    padding: 40px;
}
table{
  border: 2px solid green !important;
  border-radius: 10px;
}

.modBtn{
    background-color: green;
    color: whitesmoke;
}
  
thead{
  background: green;
  color: whitesmoke;
}

tr, td{
  border: 2px solid green;
}
  
tbody{
  background: rgb(0, 0, 0);
  color: whitesmoke;
}
  
.modal-content{
  background: black;
}
.modal-body p{
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: whitesmoke;
  /* border: 1px solid whitesmoke; */
  width: 98%;
}
  
.modal-body input{
  /* width: 100%; */
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke;
  outline: none;
  height: 40px;
  color: whitesmoke;
}
.modal-body textarea{
  justify-content: end;
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid whitesmoke;
  outline: none;
  height: 40px;
  color: whitesmoke;
  height: 150px;
}

.modal-body form input{
  border-radius: 0px;
}
.logBtn{
  background-color: green;
  color: whitesmoke;
}

.modal-content {
  /* border: .5px solid green; */
  box-shadow: 0 0 10px 0 green;
}
.collapse table{
  width: 100%;
}

.collapse table input{
  margin: 0;
  padding: 0;
  outline: none;
  border: 0px;
}
  
.modal-header{
  color: whitesmoke;
  border-bottom: 0px;
}
  
.modal-footer{
  border-top: 0px;
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

/* .logBtn{
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
} */

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

/* Media Queries */

@media screen and (max-width : 720px) {
    .history-section{
        margin-top: -30px;
    }
}

</style>