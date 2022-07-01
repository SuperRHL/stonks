import React from 'react'
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{ 'minHeight': '100vh', margin: 'auto', marginTop: '20vh' ,'display':'flex',flexDirection: 'column',alignItems:'center'}}>
            <h1 style={{ textAlign: 'center' }}>
                The page you’re looking <br /> for can’t be found.
            </h1>
            <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { navigate(`/`) }} >
                <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Go Home</h4>
                <ChevronRightIcon sx={{ color: '#06c' }} />
            </Stack>
        </div >
    )
}

export default PageNotFound