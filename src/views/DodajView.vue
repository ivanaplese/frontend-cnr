<template>
  <div class="auth-container">
    <h1 class="mb-4">Dodaj vožnju</h1>
    <form @submit.prevent="dodajVoznju">
      <div class="mb-3">
        <label for="polaziste" class="form-label">Unesite polazište:</label>
        <input v-model="voznja.polaziste" type="text" class="form-control" id="polaziste" required>
      </div>

      <div class="mb-3">
        <label for="odrediste" class="form-label">Unesite odredište:</label>
        <input v-model="voznja.odrediste" type="text" class="form-control" id="odrediste" required>
      </div>

      <div class="mb-3">
        <label for="datum" class="form-label">Odaberi datum:</label>
        <input v-model="voznja.datum" type="date" class="form-control" id="datum" required>
      </div>

      <div class="mb-3">
        <label for="vrijeme" class="form-label">Odaberi vrijeme vožnje:</label>
        <input v-model="voznja.vrijeme" type="time" class="form-control" id="vrijeme" required>
      </div>

      <button type="submit" class="btn btn-primary">Dodaj</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div v-if="voznjaDodana" class="mt-4">
      <p>Vožnja uspješno dodana!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      voznja: {
        polaziste: "",
        odrediste: "",
        datum: "",
        vrijeme: ""
      },
      voznjaDodana: false,
      errorMessage: "",
    };
  },
  methods: {

    dodajVoznju() {
this.voznjaDodana = false;
this.errorMessage = "";
      console.log(this.voznja.polaziste,"<------");

      if (!this.isUserLoggedIn()) {
  this.errorMessage = "Morate se prvo registrirati kako biste dodali vožnju.";
  return;
}

const token = localStorage.getItem("authToken");

axios.post("${process.env.VUE_APP_API_URL}/api/voznja", {
  origin: this.voznja.polaziste,
    destination: this.voznja.odrediste,
    date: `${this.voznja.datum}T${this.voznja.vrijeme}`
}, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then(response => {
  this.voznjaDodana = true;
  console.log("Vožnja uspješno dodana:", response.data);
}).catch(error => {
  this.errorMessage = "Nešto je pošlo po zlu. Pokušajte ponovo.";
  console.error("Greška prilikom dodavanja vožnje:", error);
});
},

    isUserLoggedIn() {
      return !!localStorage.getItem("authToken");
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
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
}

label {
  margin-bottom: 10px;
  display: block;
}

input {
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
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
</style>
