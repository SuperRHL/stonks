import React from 'react'
import HeroBanner from '../components/HeroBanner.js'
import StockList from '../components/StockList.js'
import NewsList from '../components/NewsList.js'
import LearnList from '../components/LearnList.js'
import Footer from '../components/Footer.js'
import { Box } from '@mui/material'
const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <StockList />
            <NewsList />
            <LearnList />
        </Box>
    )
}

export default Home
