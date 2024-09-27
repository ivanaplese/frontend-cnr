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
    async login() {
      try {
        const response = await this.$axios.post("http://localhost:8080/api/login", {
          username: this.username,
          password: this.password
        });

        // Save token and username to localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("username", this.username);
        localStorage.setItem('userId', user.id); // Ovo je user ID nakon prijave

        // Clear error message and display success message
        this.errorMessage = '';
        this.successMessage = 'Login successful!';
        console.log("Login successful", response.data);

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          this.$router.push({ name: 'home' });
        }, 2000);

      } catch (error) {
        // Clear success message and display error message
        console.log(error);
        this.successMessage = '';
        this.errorMessage = 'Login failed. Please check your username and password.';
        console.error("Login failed", error);
      }
    }
  }
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

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>