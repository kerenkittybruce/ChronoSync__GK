<template>
    <nav class="navbar bg-black fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand py-3" href="#">
        <img src="https://i.postimg.cc/MpGc6vG1/logo-429x99.png" alt="lifechoices-logo" height="45">
    </a>
    <div>
      <div v-if="user">

        <!-- Admin Navbar -->

        <div v-if="user.role === 'admin'">
          <router-link to="/admin"><button class="btn btn1 mx-2">Admin</button></router-link>
          <button class="btn btn1 mx-2" @click="LogOut()">LogOut</button>
          <router-link to="/clockin"><button class="btn btn2 mx-2">Scan</button></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <img src="https://i.postimg.cc/fR4H1tfT/User-avatar-svg.png" alt="" height="33">
          </button>
        </div>

        <!-- User Navbar -->

        <div v-if="user.role === 'user'">
          <button class="btn btn1 mx-2" @click="LogOut()">LogOut</button>
          <router-link to="/clockin"><button class="btn btn2 mx-2">Clock In</button></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <img src="https://i.postimg.cc/fR4H1tfT/User-avatar-svg.png" alt="" height="33">
          </button>
        </div>
      </div>

      <!-- No User Logged In -->

      <div v-else>
        <router-link to="/login"><button class="btn btn1 mx-2"  v-on:click="toggle">Login</button></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <img src="https://i.postimg.cc/fR4H1tfT/User-avatar-svg.png" alt="" height="33">
        </button>
      </div>
    </div>

    <!-- OffCanvas Menu -->

    <div class="offcanvas offcanvas-end bg-black" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <img src="https://i.postimg.cc/MpGc6vG1/logo-429x99.png" alt="" height="27" class="offcanvas-title my-3 mx-2" id="offcanvasNavbarLabel">
        <button type="button" class="btn-close text-reset mx-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/history">
              <a class="nav-link" aria-current="page">
              Login History
            </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin">
              <a class="nav-link" aria-current="page">
                Admin
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import router from '@/router';

    export default {
        name: "NavbarComponent",

        computed: {
          user() {
            return this.$store.state.user;
          },
        },

        methods: {
          LogOut() {
          this.$store.state.user = null;
          localStorage.clear();
          router.push("login");
          },

          removeBtn(){
            
          }
        }
    }

</script>

<style scoped>
.btn1{
    background-color: green;
    border: 2px solid green;
    color: whitesmoke;
}
.btn1:hover{
    color: rgb(229, 229, 229);
    background-color: rgb(5, 162, 5);
    transition: 0.5s;
}
.btn2{
    border: 2px solid green;
    color: whitesmoke;
}
.btn-close{
    background-color: whitesmoke;
}
.offcanvas{
    max-width: 60vw !important;
}
.offcanvas-body{
    text-align: left;
}
.nav-link{
    color: whitesmoke;
    text-decoration: none;
}
.nav-link:hover{
    color: rgb(12, 173, 12) !important;
    transition: 0.5s;
    text-decoration: none !important;
}

.navbar {
    position: fixed;
    width: 100%;
    z-index: 1000;
}

/* Media Queries */

@media screen and (max-width : 720px) {
  .navbar>.container-fluid{
    position:static !important;
    justify-content: space-around;
  }
}

@media screen and (max-width: 550px) {
  .navbar {
    position: relative;
    width: 100%;
    z-index: 1000;
  }
}
</style>