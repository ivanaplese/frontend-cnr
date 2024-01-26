<template>
    <div class="home-container">
        <h1>Trebaš prijevoz?</h1>
        <div class="menu">
            <router-link to="/pretraži">Pretraži</router-link>
            <router-link to="/dodaj">Dodaj vožnju</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Registracija</router-link>
        </div>
    </div>
</template>
  
<style >
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* Puni ekran */
    color: white;
}

.menu {
    margin-top: 20px;
}

.menu a {
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 5px;
}

.menu a:hover {
    background-color: green;
    color: white;
}
</style>
  