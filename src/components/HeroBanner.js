import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import banner1 from '../assets/images/banner1.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const HeroBanner = () => {

    return (
        <Stack style={{ overflow: 'hidden', display: 'flex', width: '100%' }}>
            <div style={{
                'height': '1080px',
                overflow: 'hidden',
                display: 'flex',
                width: '100%',
                margin: '1em auto',
                // border: '1px solid red',
                'justifyContent': 'center'
            }}>

                <img alt='banner' src={banner1} />
            </div>
            <Box >
                {/* <Button size='small' disableElevation variant="contained" href="#" sx={{
                    "&:hover": {
                        boxShadow: "none",
                        background: "#83D683"
                    }, fontWeight: '700', fontSize: { lg: '24px', sm: '16px', xs: '18px' }, m: '40px', mt: '0px', width: { lg: '250px', sm: '200px', xs: 'auto' }, height: { lg: '64px', sm: '50px', xs: '50px' }, background: '#B6E6B6', borderRadius: '79px'
                }}  > Get Started</Button> */}
                <Typography id='banner-eyebrow-text'>Stonks</Typography>
                <Typography id='banner-text'>Investing <br /> For Literally <br /> Anyone</Typography>
                <Box display='flex' flexDirection='column' alignItems='center'>

                    <Typography className='hero-intro' sx={{
                        mt: '40px', textAlign: 'center', fontSize: '21px', lineHeight: '1.381002381',
                        fontWeight: '400', letterSpacing: '0.011em', maxWidth: '60vw'
                    }}>The tools you need to put your money in motion. Sign up and research top stocks for free. </Typography>
                    <Typography className='hero-intro' sx={{
                        mt: '10px', textAlign: 'center', fontSize: '21px', lineHeight: '1.381002381',
                        fontWeight: '400', letterSpacing: '0.011em', maxWidth: '60vw'
                    }}> Stonks is a place to learn about stocks and put that knowledge to use to increase your money for free. We believe that knowledge should not be limited by money.</Typography>
                    <Stack direction='row' alignItems='center' marginTop='20px' marginBottom='40px'>
                        <Typography sx={{ color: '#1976D2', fontSize: '21px', letterSpacing: '0.011em', cursor: 'pointer' }}>Get Started</Typography>
                        <ChevronRightIcon sx={{ color: '#06c' }} />
                    </Stack>
                </Box>

            </Box>
        </Stack>
    )
}

export default HeroBanner
