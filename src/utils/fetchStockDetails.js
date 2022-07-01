
export const fetchData = async (url) => {
    return fetch(url).then((raw) => raw.json()).then((response) => { return response }).catch((e)=>{console.error(e)})

}