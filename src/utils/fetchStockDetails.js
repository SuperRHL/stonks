
export const fetchStockData = async (symbol) => {
    return fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=5NY8APHIDHCOG8RT`)
        .then(response => response.json())
        .then(response => {return response})

}