import { createStore } from 'vuex'
import router from "@/router"
import axios from 'axios';

export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    clockings: null,
    admin: null,
    userHistory: null
  },

  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUserHistory(state, userHistory){
      state.userHistory = userHistory;
    },

    setUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },

    setClockings(state, clockings) {
      state.clockings = clockings;
    },
  },

  actions: {

    // Register New Users

    registerUser: async (context, payload) => {
      const { firstname, lastname, email, password } = payload;
      await fetch("https://spring-render-clocking-system.onrender.com/users/add", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      })
      // console.log(payload)
        .then((response) => response.json())
        .then((data) => {
          if (data.err === "Email already in use") {
            alert( "Email already in use." );
          } else {
            console.log("Registered");
          context.commit("setUsers", data)
            router.push({name: "login"})
          }
        });
    },
    
    

    // Log In Existing User
    
    async loginUser(context, payload) {
      let URL = "https://spring-render-clocking-system.onrender.com/users/";
      let result = await axios.post(URL + "login", payload)
      context.commit("setUser", result?.data);
      console.log("Logged user: ",this.state.user?.firstname); 
      router.push({name: "home"})     
    },

    // Get All Users
    getUsers: async (context) => {
      let res = await fetch("https://spring-render-clocking-system.onrender.com/users/all");
      let data = await res.json();
        context.commit("setUsers", data);
      console.log(data);
    },

    // Get A Single User

    async getUser (context, userId) {
      // let id = JSON.parse(userId)
      // let data = await fetch(`https://spring-render-clocking-system.onrender.com/users/user/${userId}`);
      // let user = await data.json();
      // console.log(data);
      let URL = "https://spring-render-clocking-system.onrender.com/users/user/";
      let data = await axios.get(URL + userId);
      // console.log(data.data)
      let user = await data.data;
      context.commit("setUser", user)
      console.log(user);
    },

    // Delete A User

    deleteUser: async (context, userID) => {
      await fetch("https://spring-render-clocking-system.onrender.com/users/user/" + userID, {
        method: "DELETE",
      })
      .then(() => context.dispatch("getUsers", userID));
    },

    // Add A Single User

    addUser: async (context, payload) => {
      const { firstname, lastname, email, password } = payload;
      await fetch("https://spring-render-clocking-system.onrender.com/users/add", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      })
      // console.log(payload)
        .then((response) => response.json())
        .then((data) => {
          if (data.err === "Email already in use") {
            alert( "Email already in use." );
            document.location.reload();
          } else {
            console.log("Registered");
          context.commit("setUsers", data)
            // router.push({name: "admin"})
            location.reload();
          }
        });
    },

    // Update A Single User

    updateUser: async (context, user) => {
      await fetch("https://spring-render-clocking-system.onrender.com/users/update/user/" + user.userId, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      })
      .then((editUser) => editUser.json())
      .then((data) => {
        context.dispatch("getUser");
        console.log(data);
        document.location.reload()
      });
    },

    getClockings: async (context, id) => {
      let res = await fetch(`https://spring-render-clocking-system.onrender.com/clocking/all/user/${id}`);
      console.log(id);
      let data = await res.json();
      context.commit("setClockings", data);
      console.log("Clocking history: ", data);
    },
  },

  modules: {
  }
})
