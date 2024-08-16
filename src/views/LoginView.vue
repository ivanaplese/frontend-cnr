<!-- <template>
    <div class="auth-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required />

            <label for="password">Password:</label>
            <input type="password" v-model="password" required />

            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async login() {
            // Send login request to the server using Axios
            try {
                // Use your server endpoint for login
                const response = await this.$axios.post("/api/login", {
                    username: this.username,
                    password: this.password,
                });

                // Handle successful login (redirect, store token, etc.)
                console.log("Login successful", response.data);
            } catch (error) {
                // Handle login error
                console.error("Login failed", error);
            }
        },
    },
};
</script>
 
 
<style >
.auth-container {
    color: white;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;

}

label {
    margin-bottom: 10px;
    display: block;
}

input {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
}

button {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
</style> -->

<template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
        successMessage: ""
      };
    },
    methods: {
      // async login() {
      //   try {
      //     const response = await this.$axios.post("http://localhost:3000/login", {
      //       username: this.username,
      //       password: this.password,
      //     });
  
      //     this.errorMessage = '';  // Clear any previous error messages
      //     console.log("Login successful", response.data);
      //     // Handle successful login (redirect, store token, etc.)
      //   } catch (error) {
      //     this.errorMessage = 'Login failed. Please check your username and password.';
      //     console.error("Login failed", error);
      //   }
      // },
      async login() {
  try {
    const response = await this.$axios.post("http://localhost:3000/login", {
      username: this.username,
      password: this.password,
    });

    // Spremi token u localStorage + username
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("username", this.username);


      // Osvježi stanje aplikacije
      this.checkLoginStatus();
      
    this.errorMessage = '';  // Očisti prethodne greške
    this.successMessage = 'Login successful!'; 
    console.log("Login successful", response.data);

    // this.$router.push({ name: 'home' });
    setTimeout(() => {
          this.$router.push({ name: 'home' });
        }, 2000);

  } catch (error) {
    this.successMessage = ''; // Očisti uspješnu poruku
    this.errorMessage = 'Login failed. Please check your username and password.';
    console.error("Login failed", error);
  }
},

    },
  };
  </script>
  
  <style>
  .auth-container {
    color: white;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;

}

label {
    margin-bottom: 10px;
    display: block;
}

input {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
}

button {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
  /* Existing styles... */
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>