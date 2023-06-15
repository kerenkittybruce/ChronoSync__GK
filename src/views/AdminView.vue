<template>

  <!-- Inspired by Abdul Abrahams' E-commerce Capstone Project -->

  <div v-if="user.userRole === 'Admin'">
    <div class="everythin" v-if="users">
      <div v-if="users">
        <div class="cont">
          <div class="users container">
            <h1>Users</h1>
            <button type="button" class="btn btn-dark my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add User
            </button>

            <!-- Users Modal -->

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <input type="text" class="form-control" v-model="register.firstName" name="firstName"  aria-label="First name" required="">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p>LastName</p>
                          <input type="text" class="form-control" v-model="register.lastName" name="lastName" aria-label="Last name" required="">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p>Email</p>
                          <input type="text" class="form-control" v-model="register.userEmail" name="userEmail"  aria-label="First name" required="">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p>Password</p>
                          <input type="password" class="form-control"  v-model="register.userPass" name="userPass" aria-label="Last name" required="">
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

            <!-- Users CRUD Table -->

            <div class="table crud-table">
              <table class="table align-middle container-sm">
                <thead class="">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role</th>
                    <th>Edit 01</th>
                    <th>Edit 02</th>
                  </tr>
                </thead>
                <tbody id="users-list" class="">
                    <tr v-for="user in users" :key="user.id" style="font-size: 14px;">
                      <td data-label="First Name">
                        {{ user.firstName }}
                      </td>
                      <td data-label="Last Name">
                        {{ user.lastName }}
                      </td>
                      <td data-label="Role">
                        {{ user.userRole }}
                      </td>
                      <!-- <td data-label="Edit 01">
                        The user database modal goes here .
                      </td> -->
                      <td data-label="Edit">
                        <a class="btn btn-dark btn-md edit" data-bs-toggle="modal" :data-bs-target="`#editModal${user.userID}`" id="addCart" style="font-size: 12px;">
                          Edit
                        </a>
                        <div class="modal fade" :id="`editModal${user.userID}`" :key="user.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                  <input class="col-12 my-3" id="Name" type="text" v-model="user.firstName" required>
                                  <p>Last Name</p>
                                  <input class="col-12 my-3" id="Brand" type="text" v-model="user.lastName" required>
                                  <p>Email Address</p>
                                  <input class="col-12 my-3 emailAdd" id="Price" type="text" v-model="user.userEmail" required>
                                  <p>User Role</p>
                                  <input class="col-12 my-3" id="Price" type="text" v-model="user.userRole" required>
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

                        <button class="btn btn-danger btn-md delete" @click="deleteUser(user.userID)" style="font-size: 12px;">Del</button>
                      </td>
                    </tr>
                </tbody>
              </table>  <!-- End of table -->
            </div>

            <!-- Admin Modal -->

            <div class="admin container">
              <h1>Administrative Users</h1>
              <button type="button" class="btn btn-dark my-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Add Admin</button>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="setTimeout()"></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="addAdmin" action="POST">
                      <p>Admin Name</p>
                      <input class="col-12 my-3" v-model="addAdmin.adminFirstName" type="text"  required>
                      <p>Admin Surname</p>
                      <input class="col-12 my-3" v-model="addAdmin.adminLastName" type="text"  required>
                      <p>Admin Email</p>
                      <input class="col-12 my-3" v-model="addAdmin.adminEmail" type="text"  required>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-light" v-on:click="toggle"><span id="log">Add Admin</span><i class="fa fa-spinner fa-spin" id="icon2"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <!-- Admin CRUD Table -->

            <div class="table crud-table">
              <table class="table align-middle container-sm justify-content-between">
                <thead>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Edit</th>
                </thead>
                <tbody id="shoe-list">
                  <tr v-for="admin in admins" :key="admin" style="font-size: 14px;">
                    <td data-label="Name">{{ admin.name }}</td>
                    <td data-label="Surname">{{ admin.surname }}</td>
                    <td data-label="Email">{{ admin.email }}</td>
                    <td data-label="Edit">
                      <a  class="btn btn-dark btn-md edit" data-bs-toggle="modal" :data-bs-target="`#productModal${item.id}`" id="addCart" style="font-size: 12px;">Edit</a>
                      <div class="modal fade" :id="`productModal${item.id}`" :key="item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                              </h5>
                            </div>
                            <div class="modal-body">
                              <form autocomplete="off" @submit.prevent="editProduct" method="POST">
                                <p>Admin Name</p>
                                <input class="col-12 my-3" id="Name" type="text" v-model="admin.name" required>
                                <p>Admin Surname</p>
                                <textarea class="col-12 my-3" id="Des" type="text" v-model="admin.surname" required></textarea>
                                <p>Admin Email</p>
                                <input class="col-12 my-3" id="Brand" type="text" v-model="admin.email" required>
                                <div class="modal-footer">
                                  <button @click="this.$store.dispatch('editProduct', item)" class="btn btn-light" data-bs-dismiss="modal">Edit Product</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Delete Button -->

                      <button class="btn btn-danger btn-md delete" @click="deleteProduct(item.id)" style="font-size: 12px;">Del</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="no-admin-page" v-else>
    <div class="no-admin container">
        <div class="row vh-100 d-flex justify-content-center align-content-center">
          <div class="text-center">
            <h2>Sorry , it seems you are not registered <br/> as an administrative user for <br/>Life Choices – ChronoSync .</h2>
            <h2>Only admins are allowed here .</h2>
            <router-link to="/"><a class="btn btn-success">Back to Homepage</a></router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import { tsImportEqualsDeclaration } from "@babel/types";
// import axios from "axios";

export default {
  name: 'AdminView',

  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        userEmail: "",
        userPass: "",
      },

      addAdmin: {
        adminName: "",
        adminSurname: "",
        adminEmail: "",
      }
    };
  },

  mounted() {
    this.$store.dispatch("getUsers"),
    this.$store.dispatch("getUser"),
    this.$store.dispatch("getAdmins");
    
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
    user () {
      return this.$store.state.user;
    },
    admins () {
      return this.$store.state.admins;
    }
  },

  methods: {
    async addUser () {
      await this.$store.dispatch("addUser", this.register);
      this.register.firstName = "";
      this.register.lastName = "";
      this.register.userEmail = "";
      this.register.userPass = "";
    },
    async addAdmin () {
      await this.$store.dispatch("addAdmins", this.addAdmin);
      this.addAdmin.adminName = "";
      this.addAdmin.adminSurname = "";
      this.addAdmin.adminEmail = "";
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
      return console.log("User was deleted .");
    },
    deleteAdmin(id) {
      this.$store.dispatch("deleteAdmin", id);
      return console.log("Admin was deleted .")
    },
    setTimeout() {
      document.location.reload;
    },
    toggle: function() {
      document.querySelector("#icon").style.display = "inline-block";
      document.querySelector("#icon2".style.display = "inline-block");
      document.querySelector("#logs").style.display = "none";
      document.querySelector("#log").style.display = "none";
    }
  },
};
</script>

<style scoped>
i {
  display: none;
}
.btn {
  width: 50%;
  border-radius: 10px !important;
  padding: 0.7rem 1.9rem;
  margin: 0 0 10px;
  font-size: 1rem;
  background-color: green;
  color: whitesmoke;
}
.btn:hover{
    color: rgb(229, 229, 229);
    background-color: rgb(5, 162, 5);
    transition: 0.5s;
}
.cont {
  overflow-x: hidden;
}
.users {
  justify-content: space-between;
  display: flex;
  margin-top: 150px;
}
.admin {
  justify-content: space-between;
  display: flex;
  margin-top: 30px;
}
thead {
  background: black;
  color: whitesmoke;
}
tbody {
  background: black;
  color: whitesmoke;
}
.modal-content {
  background: black;
}
.modal-body p {
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: whitesmoke;
}
.modal-body input {
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid whitesmoke;
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
  height: 150px;
  color: whitesmoke;
}
.modal-body input {
  border-radius: 0px;
}
.modal-header {
  color: whitesmoke;
  border-bottom: 0px;
}
.modal-footer {
  border-top: 0px;
}
.btn-close {
  background-color: whitesmoke;
}

/* If not admin user : */

.no-admin-page{
  position: scroll;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin-top: 80px;
  background-color: black;
}
.no-admin{
  min-width: 300px;
  max-width: 700px;
  width: 100%;
  background-color: black;
  color: whitesmoke;
  font-family: 'Poppins', sans-serif;
}
h2{
  margin-bottom: 2.5rem;
  line-height: 3.5rem;
}

@media (max-width: 600px) {
  .table thead {
    display: none !important;
  }
  .table, .table tbody, .table tr, .table td {
    display: block !important;
    width: 100% !important;
  }
  .table tr {
    background: black;
    margin-bottom: 20px !important;
  }
  .table tbody {
    background: whitesmoke;
  }
  .table tbody tr td {
    text-align: right;
    position: relative;
    width: 100%;
  }
  .table td:before {
    display: block;
    color: whitesmoke;
    content: attr(data-label) !important;
    text-align: left;
  }
  .modal-body p {
    text-align: left;
  }
}
</style>
