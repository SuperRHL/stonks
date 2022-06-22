import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu} from 'react-horizontal-scrolling-menu'
import StockCard from './StockCard'

const HorizontalScrollBar = ({ company, price }) => {
    return (price?
        <ScrollMenu>
            {company.map((item,i) => (
                <Box key={item.id || item} itemId={item.id || item} title={item.id || item} ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                    <StockCard item={item} price={price[i].regularMarketChangePercent}/>
                </Box>
            ))}

        </ScrollMenu>
    :console.log('load'))
}

export default HorizontalScrollBar
