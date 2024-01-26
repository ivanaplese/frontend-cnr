<template>
    <div class="container mt-4">
        <h1 class="mb-4">Dodaj vožnju</h1>
        <form @submit.prevent="dodajvožnju">
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

            <button type="submit" class="btn btn-primary">Dodaj</button>
        </form>
        <div v-if="voznjaDodana" class="mt-4">
            <p>Vožnja uspješno dodana!</p>
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
            voznjaDodana: false,
        };
    },
    methods: {
        dodajvožnju() {
            // Implementirajte logiku za pretragu sa izabranim opcijama (this.polaziste, this.odrediste, this.datum)
            console.log("Dodaj vožnju:", this.polaziste, this.odrediste, this.datum);
            this.voznjaDodana = true;
        },
    },
};
</script>
