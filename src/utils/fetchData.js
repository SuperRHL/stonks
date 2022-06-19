
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'baf70df836msha7ba6dd074fe18ap153f1ejsn1b47e73b15a9',
		'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
	}
};
export const fetchData = async (url,options) => {
    return fetch(url,options).then((raw) => raw.json()).then((response) => { return response })

}