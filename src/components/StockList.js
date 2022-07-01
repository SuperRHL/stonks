import React, { useState, useEffect } from 'react'

import HorizontalScrollBar from './HorizontalScrollBar'
import { Box, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";
const StockList = () => {


    const [price, setPrice] = useState(null)
    const company = ["AAPL", "AMZN", "GOOG", "JPM", "MSFT", "NFLX", "NVDA", "TSLA", "TSM", "V"]

    const options = {
        method: 'GET',
        url: `https://financialmodelingprep.com/api/v3/stock-price-change/AAPL,MSFT,GOOG,AMZN,TSLA,TSM,NVDA,V,JPM,NFLX?apikey=${process.env.REACT_APP_FPM_KEY}`,
    };
    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/stock-price-change/AAPL,MSFT,GOOG,AMZN,TSLA,TSM,NVDA,V,JPM,NFLX?apikey=${process.env.REACT_APP_FPM_KEY}`).then(res => res.json()).then((result) => { setPrice(result.map(function (a) { return a['1D']; })) })
    }, [])

    
    return (company &&
        <Box>
            <Stack direction='row' alignItems='center'>
                <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', ml: '40px' }}>Discover Stocks</Box>
                <ArrowForwardIcon fontSize='large' sx={{ ml: '10px' }} />
            </Stack>
            <HorizontalScrollBar company={company} price={price}>
            </HorizontalScrollBar>
        </Box>

    )
}

export default StockList
