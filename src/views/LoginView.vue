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
  
<style scoped>
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
  