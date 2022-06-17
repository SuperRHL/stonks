// const axios = require("axios");

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'baf70df836msha7ba6dd074fe18ap153f1ejsn1b47e73b15a9',
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