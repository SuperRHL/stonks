import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'
import logo from '../assets/images/logo.png'
import '@fontsource/source-sans-pro';
import '@fontsource/roboto';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar = () => {

    return (
        <Stack direction='column' px='20px'>
            <Stack direction='row' justifyContent='space-between' sx={{ gap: { sm: '122px', xs: '40px' }, mt: '15px' }}>
                <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                    {/* <img src={logo} alt='logo' style={{ width: "52px", height: "52px", margin: "0 20px" }}></img> */}
                    <h2>Stonks.</h2>
                </Link>
                <Stack alignItems='center' direction='row' gap="40px" fontSize="18px" sx={{ fontFamily: 'roboto', fontWeight: '600' }}>
                    <Link to='/' style={{ textDecoration: "none", color: "#fff" }}><h4 style={{fontWeight:'normal'}}>Home</h4></Link>
                    <Link to='/learn' style={{ textDecoration: "none", color: "#fff" }}><h4 style={{fontWeight:'normal'}}>Learn</h4></Link>
                    <Link to='/search' style={{ textDecoration: "none", color: "#fff" }}>
                        {/* <SearchRoundedIcon /> */}
                        <h4 style={{fontWeight:'normal'}}>Search</h4>
                    </Link>
                    {/* <Link to='/search' style={{textDecoration: "none", color: "#3A1212" }}>Search</Link> */}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Navbar
