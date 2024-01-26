export const store = {
    state: {
        addedRide: null,
        rides: [],
    },
    setAddedRide(ride) {
        store.state.addedRide = ride;
    },
    addRide(ride) {
        store.state.rides.push(ride);
    },
    getRidesInPeriod(start, end) {
        return store.state.rides.filter(ride => ride.datum >= start && ride.datum <= end);
    },
};

