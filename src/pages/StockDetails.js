import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Card, CardContent, Typography, CardActions } from '@mui/material'
import { fetchData } from '../utils/fetchData'
import Masonry from 'react-masonry-css'

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
    console.log(company)
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        company &&
        <Box margin='40px'>
            <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                <div>
                    <Card sx={{
                        'borderRadius': '15px',
                        'padding': '30px',
                        // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                        boxShadow: 'none',
                        display: 'flex', flexDirection: 'column'
                    }}  >
                        <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                            <Typography variant="h4" component="div" sx={{
                                'textOverflow': 'ellipsis',
                                'wordWrap': 'break-word',
                                'overflow': 'hidden',
                                'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#027fff'
                            }}>
                                {company.Name}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="text.secondary">
                                {company.Symbol}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Exchange: ${company.Exchange}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Sector: ${company.Sector}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Industry: ${company.Industry}`}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>
                <div>
                    <Card sx={{
                        'borderRadius': '15px',
                        'padding': '30px',
                        // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                        boxShadow: 'none',
                        display: 'flex', flexDirection: 'column'
                    }}  >
                        <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                            <Typography variant="h4" component="div" sx={{
                                mb: 1.5,
                                'textOverflow': 'ellipsis',
                                'wordWrap': 'break-word',
                                'overflow': 'hidden',
                                'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#027fff'
                            }}>
                                Description
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {company.Description}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>
                <div >
                    <Card sx={{
                        'borderRadius': '15px',
                        'padding': '30px',
                        // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                        boxShadow: 'none',
                        display: 'flex', flexDirection: 'column'
                    }}  >
                        <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                            <Typography variant="h4" component="div" sx={{
                                mb: 1.5,
                                'textOverflow': 'ellipsis',
                                'wordWrap': 'break-word',
                                'overflow': 'hidden',
                                'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#027fff'
                            }}>
                                Ratios and Dividends
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`PE Ratio: ${company.PERatio}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`PEG Ratio: ${company.PEGRatio}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Dividend Per Share: ${company.DividendPerShare}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Dividend Yield: ${company.DividendYield}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Dividend Date: ${company.DividendDate}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`EPS: ${company.EPS}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Price to Sale Ratio: ${company.PriceToSalesRatioTTM}`}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                {`Price to Book Ratio: ${company.PriceToBookRatio}`}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>

            </Masonry>
        </Box >
    )
}

export default StockDetails
