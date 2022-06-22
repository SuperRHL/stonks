
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_REAL_STONKS,
		'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
	}
};
export const fetchData = async (url) => {
    return fetch(url).then((raw) => raw.json()).then((response) => { return response })

}