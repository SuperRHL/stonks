import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchData } from '../utils/fetchData'
const StockDetails = () => {
    const [company, setStockDetails] = useState()
    const { symbol } = useParams();
    useEffect(() => {
        const fetchStockDetails = async (symbol) => {
            const stock = await fetchData(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=5NY8APHIDHCOG8RT`)
            setStockDetails(stock)
        }
        fetchStockDetails(symbol)
    }, [])
    // console.log(company)
    
    return (
        company &&
        <Box>
            {company.Description}
        </Box>
    )
}

export default StockDetails
