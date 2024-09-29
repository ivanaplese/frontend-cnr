<template>
  <div id="app">
    <nav id="nav" v-if="showNavbar" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">cars 'n' rides</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pretraži" class="nav-link active">Pretraži</router-link>
            </li>
            <li class="nav-item">
          
              <router-link to="/dodaj" class="nav-link active">Dodaj</router-link>
            </li>
          </ul>


          <!-- Right-aligned section -->
          <ul class="navbar-nav ms-auto">
            <!-- Show if the user is logged in -->
            <li class="nav-item" v-if="isLoggedIn">
              <span class="nav-link">Welcome, {{ username }}!</span>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a href="#" @click="logout" class="nav-link">Logout</a>
            </li>

          
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <!-- <li class="nav-item" v-if="isLoggedIn">
  <router-link to="/profile" class="nav-link">Profil</router-link>
</li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
  
      username: "", 
      isLoggedIn: false, 
    };
  },
  mounted() {
    this.checkLoginStatus();
    this.$router.afterEach(() => {

      this.checkLoginStatus();
    });
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem("authToken");
      const username = localStorage.getItem("username"); 
      if (token && username) {
        this.isLoggedIn = true;
        this.username = username;
      } else {
        this.isLoggedIn = false;
        this.username = "";
      }
    },
    logout() {
      
      // Remove token and username from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
        
      this.isLoggedIn = false;
      this.username = "";
 
      this.$router.push({ name: 'home' });
    },
  },
  watch: {
    $route(to) {
      this.showNavbar = to.name !== 'home';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  margin-top: 0;
}
.nav-link {
  font-weight: bold;
  color: black !important;
}
span.nav-link {
 
  color: green !important; 
}
.nav-link.router-link-exact-active {
  color: green !important;
}
body {
  background-color: black;
  color: white;
}
.container {
  background-color: black;
  color: white;
}
.form-label {
  color: white;
}
.form-control {
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
}
.btn {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
</style>