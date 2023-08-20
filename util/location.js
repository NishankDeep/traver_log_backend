const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY= "kdjfkajd";

const getCoordsForAddress = (address) => {
    return {
        lat: 40.7484405,
        lng: -73.9856644
    };
}

//now we will use google api to get the coordinates as i dont have any api we dont use this now 
// const getCoordsForAddress = async (address) => {
//     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`)

//     const data = response.data;

//     if(!data || data.status === 'ZERO_RESULTS'){
//         const error = new HttpError('Could not find the loaction for the entered address.!!',422);
//         throw error;
//     }

//     const coordinates = data.results[0].geometry.location;

//     return coordinates;

// }


module.exports = getCoordsForAddress;
