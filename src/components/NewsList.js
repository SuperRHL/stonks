import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchStockDetails'
import { Box, Stack, Skeleton } from '@mui/material'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import HomeNewsCard from '../components/HomeNewsCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NewsList = () => {
    const createSkeleton = (num) => {
        var elements = [];
        for (let i = 0; i < num; i++) {
            elements.push(
                <div key={i} >
                    <Box ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                        <Skeleton sx={{
                            bgcolor: 'grey.900', 'height': '65vh',
                            justifyContent: 'space-between',
                            'borderRadius': '15px',
                            'padding': '30px',
                            // 'width': 'auto',
                            // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                            boxShadow: 'none',
                            display: 'flex', flexDirection: 'row', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' },
                            // 'backgroundColor': '#151516'
                        }}
                            variant="rectangular"
                            width={210}
                            height={118}></Skeleton>
                    </Box>
                </div>);
        }
        return elements;
    }
    const [news, setNews] = useState([])
    const [isLoading, setLoading] = useState(true)
    const fetchNewsData = async () => {
        const news = await fetchData(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=demo`)
        return news
    }
    useEffect(() => {

        fetchNewsData().then((res) => { setNews(res.feed) })
            .then(() => { if (news) { setLoading(false) } })

    }, [])
    // if (isLoading) {
    //     return <div className="App">Loading...</div>;
    // }
    // else {
    return (
        !isLoading ?
            <div>
                <Stack direction='row' alignItems='center'>
                    <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', ml: '40px' }}>Market News</Box>
                    <ArrowForwardIcon fontSize='large' sx={{ ml: '10px' }} />
                </Stack>
                <ScrollMenu>
                    {news.map((item, i) => (
                        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                            <HomeNewsCard source={item.banner_image} title={item.title} author={item.source} description={item.summary} url={item.url} />
                        </Box>
                    ))}

                </ScrollMenu>
            </div>
            : <div><Stack direction='row' alignItems='center'>
                <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', ml: '40px' }}>Market News</Box>
                <ArrowForwardIcon fontSize='large' sx={{ ml: '10px' }} />
            </Stack>
                <ScrollMenu>
                    {createSkeleton(10)}
                </ScrollMenu>
            </div>
    )
}
// }

export default NewsList
