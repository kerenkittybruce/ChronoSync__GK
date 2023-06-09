<template>
    <nav class="navbar bg-black fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand py-3" href="#">
        <img src="https://i.postimg.cc/MpGc6vG1/logo-429x99.png" alt="" height="45">
    </a>
    <div>
        <router-link to="/login"><button class="btn btn1 mx-2">Login</button></router-link>
        <button class="btn btn2 mx-2">Clock In</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <img src="https://i.postimg.cc/fR4H1tfT/User-avatar-svg.png" alt="" height="33">
        </button>
    </div>
    <div class="offcanvas offcanvas-end bg-black" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <img src="https://i.postimg.cc/MpGc6vG1/logo-429x99.png" alt="" height="37" class="offcanvas-title my-3 mx-2" id="offcanvasNavbarLabel">
        <button type="button" class="btn-close text-reset mx-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Login History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
    export default {
        name: "NavbarComponent"
    }
</script>
<style scoped>
.btn1{
    background-color: green;
    border: 2px solid green;
    color: white;
}
.btn2{
    border: 2px solid green;
    color: white;
}
.btn-close{
    background-color: white;
}
.offcanvas-body{
    text-align: left;
}
.nav-link{
    color: white;
}
.nav-link:hover{
    color: rgb(12, 173, 12) !important;
    transition: 0.5s;
}
</style>