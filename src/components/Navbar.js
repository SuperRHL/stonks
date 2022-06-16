import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, TextField } from '@mui/material'
import logo from '../assets/images/logo.png'
import '@fontsource/source-sans-pro';
import '@fontsource/roboto';
const Navbar = () => {
    return (
        <Stack direction='column' px='20px'>
            <Stack direction='row' justifyContent='space-between' sx={{ gap: { sm: '122px', xs: '40px' }, mt: '15px' }}>
                <Link to='/'>
                    <img src={logo} alt='logo' style={{ width: "52px", height: "52px", margin: "0 20px" }}></img>
                </Link>
                <Stack alignItems='center' direction='row' gap="40px" fontSize="18px" sx={{ fontFamily: 'roboto', fontWeight: '600' }}>
                    <Link to='/' style={{ textDecoration: "none", color: "#3A1212" }}>Home</Link>
                    <Link to='/learn' style={{ textDecoration: "none", color: "#3A1212" }}>Learn</Link>
                    <TextField id="search" label="Search" type="search" size='small' sx={{ [`& fieldset`]: { borderRadius: '18px' } }} />
                    {/* <Link to='/search' style={{textDecoration: "none", color: "#3A1212" }}>Search</Link> */}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Navbar
