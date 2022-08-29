import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'
import logo from '../assets/images/logo.png'
import '@fontsource/source-sans-pro';
import '@fontsource/roboto';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar = () => {

    return (
        <Stack direction='column' backgroundColor='#151516' style={{
            position: "relative",
            left: 0,
            bottom: 0,
            right: 0,
            margin: 0,
            width: "100%",
            overflow: "hidden"
            
        }}>
            <Stack direction='row' justifyContent='space-between' sx={{ gap: { sm: '122px', xs: '40px' }, m: '20px' }}>
                <Link to='/'>
                    <img src={logo} alt='logo' style={{ width: "52px", height: "52px", margin: "0 20px" }}></img>
                </Link>
                <Stack alignItems='center' direction='row' gap="40px" fontSize="18px" sx={{ fontFamily: 'roboto', fontWeight: '600' }}>
                    {/* <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>Home</Link> */}
                    <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { window.open(`https://www.linkedin.com/in/rahul-ahuja-/`) }} >
                        <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >About us</h4>
                        <ChevronRightIcon sx={{ color: '#06c' }} />
                    </Stack>
                    <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { window.open(`mailto:rahul.stonks@outlook.com`) }} >
                        <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Contact</h4>
                        <ChevronRightIcon sx={{ color: '#06c' }} />
                    </Stack>
                    <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { window.open(`https://revolut.me/rowlpay`) }} >
                        <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Donate</h4>
                        <ChevronRightIcon sx={{ color: '#06c' }} />
                    </Stack>
                    {/* <Link to='' style={{ textDecoration: "none", color: "#fff" }}>About</Link> */}
                    {/* <Link to='/search' style={{textDecoration: "none", color: "#3A1212" }}>Search</Link> */}
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Navbar
