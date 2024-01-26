<template>
    <div class="auth-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required />

            <label for="password">Password:</label>
            <input type="password" v-model="password" required />

            <button type="submit">Register</button>
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
        async register() {
            // Send register request to the server using Axios
            try {
                // Use your server endpoint for registration
                const response = await this.$axios.post("/api/register", {
                    username: this.username,
                    password: this.password,
                });

                // Handle successful registration (redirect, show success message, etc.)
                console.log("Registration successful", response.data);
            } catch (error) {
                // Handle registration error
                console.error("Registration failed", error);
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
}
</style>
  