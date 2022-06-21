
export const fetchData = async (url) => {
    return fetch(url).then((raw) => raw.json()).then((response) => { return response }).catch(()=>{console.error('aaaaaaaaa')})

}