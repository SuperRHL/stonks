import React from 'react'
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{ 'minHeight': '100vh', margin: 'auto', marginTop: '20vh', 'display': 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>
                The page you’re looking for <br />  can’t be found. 🚧
            </h1>
            <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { navigate(`/`) }} >
                <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Go Home</h4>
                <ChevronRightIcon sx={{ color: '#06c' }} />
            </Stack>
            <div style={{ backgroundColor: '#000000', borderRadius: '30px', color: '#ffffff', padding: '40px', marginTop: '20px' }}>
                <ul style={{listStyle:"none",margin:"0px",padding:"0px"}}>
                    <li style={{marginBottom: '10px'}}>

                        Possible reasons for this error:

                    </li>

                    <li>

                        ▹The page does not exist, duh 💁
                    </li>
                    <li>

                        ▹We have run out of API calls 🤙
                    </li>
                    <li>
                        ▹<a href='https://revolut.me/rowlpay'>Donate </a> 💸

                    </li>

                </ul>


            </div>
        </div >
    )
}

export default PageNotFound