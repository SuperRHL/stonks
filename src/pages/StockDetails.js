import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchStockData, options } from '../utils/fetchStockDetails'
const StockDetails = () => {

    const [company, setStockDetails] = useState()
    const { symbol } = useParams();
    useEffect(() => {
        const fetchStockDetails = async () => {
            const stock = await fetchStockData('https://schwab.p.rapidapi.com/quote/get-summary', options, symbol)
            setStockDetails(stock)
        }
        fetchStockDetails()
    }, [])


    return (
        company &&
        <Box>
            {company.Stocks.CompanyOverviewOutput.BusinessSummary}
        </Box>
    )
}

export default StockDetails
