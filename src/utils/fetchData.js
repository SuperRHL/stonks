// const axios = require("axios");

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_API_KEY,
        'X-RapidAPI-Host': 'schwab.p.rapidapi.com'
    }
};

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

export const fetchData = async (url, options) => {
    return fetch(url, options).then((raw) => raw.json()).then((response) => { return response })

}