<template>

  <!-- Inspired by Abdul Abrahams' E-commerce Capstone Project -->
<div v-if="user">
  <div v-if="user.role === 'admin'">
    <div class="everythin bg-black">
      <div>
        <div class="cont">
          <div class="users container">
            <h1>Users</h1>
            <button type="button" class="btn btn-dark my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add User
            </button>
  
              <!-- Users Modal -->
  
              <div class="modal fade popped-up" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="setTimeout()"></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="addUser" method="POST" class="mx-4 my-5">
                        <div class="row">
                          <div class="col">
                            <p>FirstName</p>
                            <input type="text" class="form-control" v-model="register.firstname" name="firstName"  aria-label="First name" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <p>LastName</p>
                            <input type="text" class="form-control" v-model="register.lastname" name="lastName" aria-label="Last name" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <p>Email</p>
                            <input type="text" class="form-control" v-model="register.email" name="userEmail"  aria-label="First name" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <p>Password</p>
                            <input type="password" class="form-control"  v-model="register.password" name="userPass" aria-label="Last name" required="">
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="submit" class="btn btn-light" v-on:click="toggle"><span id="logs">Create User</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Users CRUD Table -->

            <div class="table crud-table">
              <table class="table align-middle container-sm">
                <thead class="">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role</th>
                    <th></th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody id="users-list" class="bg-dark">
                    <tr v-for="user in users" :key="user"  style="font-size: 14px;">
                      <td data-label="First Name">
                        {{ user?.firstname }}
                      </td>
                      <td data-label="Last Name">
                        {{ user?.lastname }}
                      </td>
                      <td data-label="Role">
                        {{ user?.role }}
                      </td>
                      <td>
                        <button class="btn logBtn" data-bs-toggle="modal" :data-bs-target= "`#HistoryModal${user?.userId}`"
                          @click.prevent="setClockingHistory(user?.userId)">Login History</button>
                            <div class="modal fade" :id="`HistoryModal${user?.userId}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <a class="btn btn-success dropdown-toggle w-100 mb-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
                                                  <input type="text" :value="record?.clockIn">
                                                </td>
                                                <td>
                                                  <input type="text" :value="record?.clockOut === null ? '---' : record?.clockOut">
                                                </td>
                                              </tr>
                                            </tbody>
                                          
                                          </table>
                                        </div>
                                        <div v-else>
                                          <h1 class="text-white">Nothing to display</h1>
                                        </div>
                                          
                                          <!-- <table>
                                            <thead>
                                              <tr>
                                                <th colspan="2">1 June 2023</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <input type="text" value="08:25 AM">
                                                </td>
                                                <td>
                                                  <input type="text" value="16:30 PM">
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table> -->
                                      </div>






                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </td>
                      <td data-label="Edit">
                        <a class="btn btn-dark btn-md edit" data-bs-toggle="modal" :data-bs-target="`#editModal${user?.userId}`" id="addCart" style="font-size: 12px;">
                          Edit
                        </a>
                        <div class="modal fade" :id="`editModal${user?.userId}`" :key="user?.userId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Edit User
                                </h5>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form autocomplete="off" @submit.prevent="editUser" method="POST">
                                  <p>First Name</p>
                                  <input class="col-12 my-3" id="Name" type="text" v-model="user.firstname" required>
                                  <p>Last Name</p>
                                  <input class="col-12 my-3" id="Brand" type="text" v-model="user.lastname" required>
                                  <p>Email Address</p>
                                  <input class="col-12 my-3 emailAdd" id="Price" type="text" v-model="user.email" required>
                                  <p>User Role</p>
                                  <input class="col-12 my-3" id="Price" type="text" v-model="user.role" required>
                                  <!-- <p>Edit 01</p>
                                  <input class="col-12 my-3" id="img" type="text" v-model="user.userProfile" required> -->
                                  <div class="modal-footer">
                                    <button @click="this.$store.dispatch('editUser', user)" class="btn btn-light" id="submit" data-bs-dismiss="modal">Edit User</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Delete Button -->

                        <button class="btn btn-success btn-md delete" @click="deleteUser(user.userId)" style="font-size: 12px;">Del</button>
                      </td>
                    </tr>
                </tbody>
              </table>  <!-- End of table -->
            </div>
        </div>
      </div>
    </div>
  </div>
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
</div>
</template>

<script>
export default {
  name: 'AdminView',

  data() {
    return {
      register: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      selectedUserId: null,
    };
  },

  mounted() {
    this.$store.dispatch("getUsers");
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

  methods: {
    setClockingHistory(userId){
      this.selectedUserId = userId;
      this.$store.dispatch("getClockings", this.selectedUserId);
    
      console.log(this.clockings);
    },
    async addUser () {
      await this.$store.dispatch("addUser", this.register);
      this.register.firstname = "";
      this.register.lastname = "";
      this.register.email = "";
      this.register.password = "";
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
      return console.log("User was deleted .");
    },
    setTimeout() {
      document.location.reload;
    },
    toggle: function() {
      document.querySelector("#icon").style.display = "inline-block";
      document.querySelector("#icon2").style.display = "inline-block";
      document.querySelector("#logs").style.display = "none";
      document.querySelector("#log").style.display = "none";
    }
  },
};
</script>

<style scoped>

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
.everythin{
  min-height: 100vh;
}

.logBtn{
  background-color: green;
  color: whitesmoke;
}

i{
  display: none;
}
  
.cont{
  overflow-x: hidden;
}
  
.users{
  justify-content: space-between;
  display: flex;
  margin-top: 150px;
}

table{
  border: 2px solid green !important;
  border-radius: 10px;
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
  border: 1px solid whitesmoke;
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
  
.modal-header{
  color: whitesmoke;
  border-bottom: 0px;
}
  
.modal-footer{
  border-top: 0px;
}
  
.btn-close{
  background-color: whitesmoke;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 100px;
}

.words{
  text-align: center;
  margin: 40px 0;
}

@media  (max-width: 600px ) {

  .table thead{
    display: none !important;
  }

  .table, .table tbody, .table tr, .table td{
    display: block !important;
    width: 100% !important;
  }

  .table tr{
    background: black;
    margin-bottom: 20px !important;
  }

  .table tbody{
    background: whitesmoke;
  }

  .table tbody tr td{
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td:before{
    display: block;
    color: whitesmoke;
    content: attr(data-label) !important;
    text-align: left;
  }

  .modal-body p{
    text-align: left;
  }
}
</style>
