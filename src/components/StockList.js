import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'
import { Box, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const StockList = () => {

    const [company, setStock] = useState()
    useEffect(() => {
        const fetchStockMoverData = async () => {
            const stock = await fetchData('./declare.json')
            setStock(stock.splice(0, 10))
        }
        fetchStockMoverData()
    }, [])

    return (company &&
        <Box>
            {/* <h1>{company}</h1> */}
            <Stack direction='row' alignItems='center'>
                <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', ml: '40px' }}>Discover Stocks</Box>
                <ArrowForwardIcon fontSize='large' sx={{ ml: '10px' }} />
            </Stack>
            <HorizontalScrollBar company={company} setStock={setStock}>
            </HorizontalScrollBar>
        </Box>

    )
}

export default StockList
