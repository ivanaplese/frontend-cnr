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
    <div v-if="nemaVoznji" class="mt-4">
      <p>Nema dodanih vožnji u odabranom periodu.</p>
    </div>
  </div>
</template>

<script>
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
      console.log("Pretraga:", this.polaziste, this.odrediste, this.datum);
      this.nemaVoznji = false; // Reset this before the search
      try {
        const response = await this.$axios.get('/api/voznja', {
          params: {
            origin: this.polaziste,
            destination: this.odrediste,
            date: this.datum,
          }
        });
        this.rides = response.data;
        this.nemaVoznji = this.rides.length === 0; // Set this if no rides are found
      } catch (error) {
        console.error("Error fetching rides:", error);
        this.nemaVoznji = true; // Show no rides message on error
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
</style>


