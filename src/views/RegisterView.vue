<template>
  <div class="auth-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" v-model="formData.username" required />

      <label for="password">Password:</label>
      <input type="password" v-model="formData.password" required />

      <button type="submit">Register</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {

        const response = await axios.post('${process.env.VUE_APP_API_URL}/api/register', {
          username: this.formData.username,
          password: this.formData.password
        });

        this.successMessage = 'Registration successful!';
        this.errorMessage = '';  


        // Redirect to login page after successful registration
        setTimeout(() => {
          this.$router.push({ name: 'login' });
        }, 1000);  
        
        console.log('Registration successful', response.data);
      } catch (error) {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';  
        console.error('Registration failed', error);
      }
    }
  }
};
</script>

<style>
/* Existing styles... */
.success {
  color: green;
  margin-top: 10px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>

