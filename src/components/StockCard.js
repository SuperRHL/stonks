import React, { useState, useEffect } from 'react'
import { Skeleton,Card,CardActions,CardContent,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchData, options } from '../utils/fetchData'
const StockCard = (stockSymbol) => {
    const stocks = require('stock-ticker-symbol');
    const navigate = useNavigate()
    const [company, setStockDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchStockDetails = async () => {
            const stock = await fetchData(`https://realstonks.p.rapidapi.com/${stockSymbol.item}`, options)
            setStockDetails(stock)
            setIsLoading(true)
        }
        fetchStockDetails()
    }, [])
    console.log(company)

    const companyName = stocks.lookup(stockSymbol.item)
    const companySymbol = stockSymbol.item
    // console.log(item)



    return (

        <div>
            {isLoading ? (
                <Card sx={{
                    'borderRadius': '15px',
                    'padding': '30px',
                    // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                    boxShadow: 'none',
                    display: 'flex', flexDirection: 'column', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' }
                }}  >
                    <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                        <Typography variant="h4" component="div" sx={{
                            'textOverflow': 'ellipsis',
                            'wordWrap': 'break-word',
                            'overflow': 'hidden',
                            'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color:'#027fff'
                        }}>
                            {companyName}
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="text.secondary">
                            {companySymbol}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                            {`${company.change_percentage}%`}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between','padding':'0px' }}>
                        <h4 style={{margin:'0px',color:'#0066cc' ,cursor:'pointer','textDecoration':'none', 'padding':'0px'}} onClick={() => { navigate(`/stock/${companySymbol}`) }}>Learn more</h4>
                    </CardActions>
                </Card >) : <Skeleton variant='rectangle' animation='wave' sx={{
                    'borderRadius': '15px',
                    'padding': '30px', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' }
                }}></Skeleton>}
        </div>


    )
}

export default StockCard
