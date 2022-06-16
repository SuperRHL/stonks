import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, visibilityContext } from 'react-horizontal-scrolling-menu'
import StockCard from './StockCard'

const HorizontalScrollBar = ({ company, setStock }) => {
    console.log(company, setStock)
    return (
        <ScrollMenu>
            {company.map((item) => (
                <Box key={item.id || item} itemId={item.id || item} title={item.id || item} ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                    <StockCard item={item} />
                </Box>
            ))}

        </ScrollMenu>
    )
}

export default HorizontalScrollBar
