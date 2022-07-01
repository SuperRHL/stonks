import React from 'react'
import { Box, Skeleton } from '@mui/material'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import StockCard from './StockCard'

const HorizontalScrollBar = ({ company, price }) => {
    return (
        <ScrollMenu>
            {company.map((item, i) => (
                <Box key={item.id || item} itemId={item.id || item} title={item.id || item} ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                    <StockCard item={item} price={price ? `${price[i].regularMarketChangePercent.toFixed(2)}%`:'Price not available'} />
                </Box>
            ))}

        </ScrollMenu>
       
        // <Skeleton variant="rectangular" animation='wave' sx={{ bgcolor: 'grey.900' , 'borderRadius': '15px', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' } }}></Skeleton>
    )
}

export default HorizontalScrollBar
