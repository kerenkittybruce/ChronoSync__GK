import { createStore } from 'vuex'
import router from "@/router"

export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
  },
  actions: {

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
            document.location.reload();
          } else {
            console.log("Registered");
          context.commit("setUsers", data)
            router.push({name: "login"})
          }
        });
    },
  },
  modules: {
  }
})
