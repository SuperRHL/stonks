import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './pages/Home';
import Learn from './pages/Learn';
import Navbar from './components/Navbar'
import StockDetails from './pages/StockDetails'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Footer from './components/Footer';
const App = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return (
        <div>
            <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/stock/:symbol' element={<StockDetails />}></Route>
                    <Route path='/learn' element={<Learn />}></Route>
                </Routes>
                {/* <Footer /> */}
            </Box>
        </div>
    )
}

export default App
