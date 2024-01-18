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
  </div>
</template>

<script>
export default {
  data() {
    return {
      polaziste: "",
      odrediste: "",
      datum: "",
    };
  },
  methods: {
    pretrazi() {
      // Implementirajte logiku za pretragu sa izabranim opcijama (this.polaziste, this.odrediste, this.datum)
      console.log("Pretraga:", this.polaziste, this.odrediste, this.datum);
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
  text-align: center;
}
</style> 