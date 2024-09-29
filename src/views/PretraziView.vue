<template>
  <div class="container mt-4">
    <h1 class="mb-4">Pretraži</h1>
    <form @submit.prevent="pretrazi">
      <div class="mb-3">
        <label for="polaziste" class="form-label">Unesite polazište:</label>
        <input v-model="polaziste" type="text" class="form-control" id="polaziste" required>
      </div>


      <div class="mb-3">
        <label for="odrediste" class="form-label">Unesite odredište:</label>
        <input v-model="odrediste" type="text" class="form-control" id="odrediste" required>
      </div>

      <div class="mb-3">
        <label for="datum" class="form-label">Odaberi datum:</label>
        <input v-model="datum" type="date" class="form-control" id="datum" required>
      </div>

      <button type="submit" class="btn btn-primary">Pretraži</button>
    </form>

    <div v-if="rides.length > 0" class="mt-4">
      <h2>Rezultati pretrage:</h2>
      <ul>
        <li v-for="ride in rides" :key="ride._id">
          Polazište: {{ ride.origin }} | Odredište: {{ ride.destination }} | Datum: {{ new Date(ride.date).toLocaleDateString() }}
        </li>
      </ul>
    </div>

    <div v-if="nemaVoznji" class="mt-4">
      <p>Nema dodanih vožnji u odabranom periodu.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      polaziste: "",
      odrediste: "",
      datum: "",
      rides: [], 
      nemaVoznji: false, 
    };
  },

  methods: {
    async pretrazi() {
      try {
        // Make a GET request to the backend
        // const response = await axios.get("${process.env.VUE_APP_API_URL}/api/voznja", {
          const response = await axios.get("http://localhost:8080/api/voznja", {
          params: {
            origin: this.polaziste,
            destination: this.odrediste,
            date: this.datum,
          },
        });

        // Store the rides in the state
        this.rides = response.data;

        // Check if no rides were found
        if (this.rides.length === 0) {
          this.nemaVoznji = true;
        } else {
          this.nemaVoznji = false;
        }
      } catch (error) {
        console.error("Error fetching rides:", error);
        this.nemaVoznji = true; 
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

.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>

