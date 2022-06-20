import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Grid, Card, CardContent, Typography, CardActions } from '@mui/material'
import { fetchData } from '../utils/fetchData'
import Masonry from 'react-masonry-css'
import NewsCard from '../components/NewsCard.js'
// import StockNews from '../components/StockNews'
const StockDetails = () => {
    const [news, setNews] = useState([])
    const [company, setStockDetails] = useState([])
    const { symbol } = useParams([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            const news = await fetchData(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&topics=${company.Sector}&limit=20&apikey=5NY8APHIDHCOG8RT`)
            setNews(news.feed)
        }
        fetchNewsData()
    }, [])
    useEffect(() => {
        const fetchStockDetails = async (symbol) => {
            const stock = await fetchData(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=5NY8APHIDHCOG8RT`)
            setStockDetails(stock)
        }
        fetchStockDetails(symbol)
    }, [])
    console.log(news)
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        company &&
        <Box margin='40px'>
            <Typography color='#027fff' fontSize='40px' fontWeight='600' paddingBottom='20px' marginLeft='30px'>Stock Details</Typography>
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
                                <b>Exchange:</b> {company.Exchange}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Sector:</b> {company.Sector}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Industry:</b> {company.Industry}
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
                                <b>PE Ratio:</b> {company.PERatio}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>PEG Ratio:</b> {company.PEGRatio}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Dividend Per Share:</b> {company.DividendPerShare}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Dividend Yield:</b> {company.DividendYield}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Dividend Date:</b> {company.DividendDate}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>EPS:</b> {company.EPS}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Price to Sale Ratio:</b> {company.PriceToSalesRatioTTM}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Price to Book Ratio:</b> {company.PriceToBookRatio}
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
                                Highs and Lows
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>52 Week High:</b> {company['52WeekHigh']}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>52 Week Low:</b> {company['52WeekLow']}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>50 Day Moving Average:</b> {company['50DayMovingAverage']}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>200 Day Moving Average:</b> {company['200DayMovingAverage']}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Quarterly Earnings Growth YoY:</b> {company.QuarterlyEarningsGrowthYOY}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                                <b>Quarterly Revenue Growth YoY:</b> {company.QuarterlyRevenueGrowthYOY}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>
            </Masonry>
            <Typography color='#049cb7' fontSize='40px' fontWeight='600' paddingBottom='20px' marginLeft='30px'>News</Typography>
            {/* <StockNews company={company.Symbol} market={company.Sector}/> */}
            <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                {news.map((item) => (
                    <Box key={item.url+Math.random(100)} >
                        <NewsCard source={item.banner_image} title={item.title} author={item.source} description={item.summary} url={item.url} />
                    </Box>
                ))}
            </Masonry>
        </Box >
    )
}

export default StockDetails
