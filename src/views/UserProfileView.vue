<template>
    <div>
      <h2>Moje vožnje</h2>
      <div v-if="loading">Učitavanje vožnji...</div>
      <div v-else>
        <div v-if="rides.length === 0">Nemate objavljenih vožnji.</div>
        <ul>
          <li v-for="ride in rides" :key="ride._id">
            <h3>{{ ride.title }}</h3>
            <p>{{ ride.description }}</p>
            <p><strong>Datum:</strong> {{ ride.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        rides: [],
        loading: false,
        error: ''
      };
    },
    created() {
      this.fetchUserRides();
    },
    methods: {
      async fetchUserRides() {
        this.loading = true;
        try {
           
          const response = await axios.get("http://localhost:8080/api/user-rides");
          this.rides = response.data;
        } catch (error) {
          this.error = 'Greška prilikom dohvaćanja vožnji.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  