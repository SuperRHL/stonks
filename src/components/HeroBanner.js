import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Banner from '../assets/images/banner.svg'
const HeroBanner = () => {

    return (
        <Stack>
            {/* <Box sx={{ mt: '80px' }} pl="40px" >
                <img src={Banner} />
            </Box> */}
            <Stack direction='row' className='gradient-text' >
                <Stack direction='column'>
                    <div>
                        <div>STONKS</div>
                        <div>STSKNO</div>
                        <div>TSNOKS</div>
                    </div>
                </Stack>
                <Stack direction='column'>
                    <div overflow='hidden' >
                        <div>STONKSKST</div>
                        <div>STSKNONTO</div>
                        <div>TSNOKSOSN</div>
                        {/* <text>KNOSTSKNO</text> */}
                    </div>
                </Stack>
            </Stack>
            <Box >
                <Button size='small' disableElevation variant="contained" href="#" sx={{
                    "&:hover": {
                        boxShadow: "none",
                        background: "#83D683"
                    }, fontWeight: '700', fontSize: { lg: '24px', sm: '16px', xs: '18px' }, m: '40px', mt: '0px', width: { lg: '250px', sm: '200px', xs: 'auto' }, height: { lg: '64px', sm: '50px', xs: '50px' }, background: '#B6E6B6', borderRadius: '79px'
                }}  > Get Started</Button>

            </Box>
        </Stack>
    )
}

export default HeroBanner
