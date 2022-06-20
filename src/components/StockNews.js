import React,{ useState, useEffect} from 'react'
import {fetchData} from '../utils/fetchData'
import { Box } from '@mui/material'

const StockNews = (props) => {
    const [news, setNews] = useState()
    useEffect(() => {
        const fetchNewsData = async () => {
            const news = await fetchData(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${props.company}&topics=${props.market}&apikey=5NY8APHIDHCOG8RT`)
            setNews(news.feed)
        }
        fetchNewsData()
    }, [])
    // console.log(news)
    return (
        <Box>
            hi
        </Box>
    )
}

export default StockNews
