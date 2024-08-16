<!-- <template>
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

            <div class="mb-3">
        <label for="vrijeme" class="form-label">Odaberi vrijeme vožnje:</label>
        <input v-model="vrijeme" type="time" class="form-control" id="vrijeme" required>
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
            vrijeme: "",
            voznjaDodana: false,
            errorMessage: "", // Poruka o grešci
        };
    },
    methods: {
        dodajvožnju() {
            // // Implementirajte logiku za pretragu sa izabranim opcijama (this.polaziste, this.odrediste, this.datum)
            // console.log("Dodaj vožnju:", this.polaziste, this.odrediste, this.datum, this.vrijeme);
            // this.voznjaDodana = true;
            // Provjera je li korisnik prijavljen
      if (!this.isUserLoggedIn()) {
        this.errorMessage = "Morate se prvo registrirati kako biste dodali vožnju.";
        this.voznjaDodana = false;
        return;
      }

      // Ako je korisnik prijavljen, dodajte vožnju
      console.log("Dodaj vožnju:", this.polaziste, this.odrediste, this.datum, this.vrijeme);
      this.voznjaDodana = true;
      this.errorMessage = ""; // Očisti poruku o grešci ako je vožnja uspješno dodana
    },
    isUserLoggedIn() {
      // Provjerite autentifikacijsko stanje korisnika (ovo je jednostavan primjer)
      // U pravoj aplikaciji, možete provjeriti token ili neku drugu autentifikacijsku logiku
      return !!localStorage.getItem("authToken");
    
  
        },
    },
};
</script> 
 
 -->



 <!-- 16.08. PROMJENE  -->

<!-- 
 
 <template>
    <div class="auth-container">
      <h1 class="mb-4">Dodaj vožnju</h1>
      <form @submit.prevent="dodajVoznju">
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
  
        <div class="mb-3">
          <label for="vrijeme" class="form-label">Odaberi vrijeme vožnje:</label>
          <input v-model="vrijeme" type="time" class="form-control" id="vrijeme" required>
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
  export default {
    data() {
      return {
        polaziste: "",
        odrediste: "",
        datum: "",
        vrijeme: "",
        voznjaDodana: false,
        errorMessage: "", // Poruka o grešci
      };
    },
    methods: {
      dodajVoznju() {
        // Resetiraj poruke prije nego što pokušaš dodati vožnju
        this.voznjaDodana = false;
        this.errorMessage = "";
  
        // Provjera je li korisnik prijavljen
        if (!this.isUserLoggedIn()) {
          this.errorMessage = "Morate se prvo registrirati kako biste dodali vožnju.";
          return;
        }
  
        // Ako je korisnik prijavljen, dodajte vožnju
        console.log("Dodaj vožnju:", this.polaziste, this.odrediste, this.datum, this.vrijeme);
        this.voznjaDodana = true;
      },
      isUserLoggedIn() {
        // Provjerite autentifikacijsko stanje korisnika (ovo je jednostavan primjer)
        // U pravoj aplikaciji, možete provjeriti token ili neku drugu autentifikacijsku logiku
        return !!localStorage.getItem("authToken");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Stilovi za auth-container */
  .auth-container {
    color: white;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto; /* Automatski margini za centriranje */
    max-width: 600px; /* Maksimalna širina container-a */
    text-align: center; /* Centriranje teksta */
  }
  
  label {
    margin-bottom: 10px;
    display: block;
  }
  
  input {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    width: 100%; /* Širina unosa da bude 100% širine container-a */
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
   -->

   <!-- NOVO -->


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
      // async dodajVoznju() {
      //   this.voznjaDodana = false;
      //   this.errorMessage = "";
  
      //   if (!this.isUserLoggedIn()) {
      //     this.errorMessage = "Morate se prvo prijaviti kako biste dodali vožnju.";
      //     return;
      //   }
  
      //   try {
      //     const authToken = localStorage.getItem("authToken");
      //     const response = await axios.post("http://localhost:3000/voznja", this.voznja, {
      //       headers: {
      //         Authorization: `Bearer ${authToken}`,
      //       },
      //     });
  
      //     if (response.status === 201) {
      //       this.voznjaDodana = true;
      //     }
      //   } catch (error) {
      //     this.errorMessage = "Dodavanje vožnje nije uspjelo. Pokušajte ponovno.";
      //     console.error(error);
      //   }
      // },
      dodajVoznju() {
  this.voznjaDodana = false;
  this.errorMessage = "";

  if (!this.isUserLoggedIn()) {
    this.errorMessage = "Morate se prvo registrirati kako biste dodali vožnju.";
    return;
  }

  const token = localStorage.getItem("authToken");

  axios.post("http://localhost:3000/voznja", {
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
  