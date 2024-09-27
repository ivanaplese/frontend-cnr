<template>
    <div>
        <h2>Profile: {{ username }}</h2>
        <h3>Your Rides:</h3>
        <ul v-if="rides.length > 0">
            <li v-for="ride in rides" :key="ride._id">
                {{ ride.origin }} to {{ ride.destination }} on {{ ride.date }}
            </li>
        </ul>
        <p v-else>You haven't added any rides yet.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            rides: [],
        };
    },
    async created() {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        const userId = this.$store.state.userId; // Assuming you store userId in Vuex or somewhere globally
        
        try {
            // Fetch user rides
            const response = await axios.get(`/api/voznja/user/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            this.rides = response.data;
        } catch (error) {
            console.error(error);
        }
    }
};
</script>
