import { db } from '../utils/firebaseConfig'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { onSnapshot } from 'firebase/firestore'
import { doc } from "firebase/firestore";
import { Typography, Stack } from '@mui/material'
const BlogDetails = () => {
    const { key } = useParams()

    const [data, setData] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        onSnapshot(doc(db, "Blogs", key), (doc) => { setData(doc.data()) })
    }, [])
    
    return (
        <div>
            <div style={{
                'marginTop': '40px',
                'borderRadius': '15px', 'marginLeft': '40px', 'marginRight': '40px', 'maxHeight': '400px', 'overflow': 'hidden'
            }}>
                <img style={{ 'display': 'block', 'margin': 'auto', 'maxWidth': '100%', 'height': '100%', 'width': '100%', 'objectFit': 'auto' }} src={data.Banner}></img>
            </div >
            <Typography color='#fff' fontSize='40px' fontWeight='600' margin='40px 40px 0px 40px'>{data.Title}</Typography>
            <Typography color='#86868B' fontSize='24px' fontWeight='600' margin='0px 40px 20px 40px' >{data.Author}</Typography>
            <Typography color='#fff' fontSize='18px' fontWeight='400' margin='0px 40px 20px 40px'>{data.Body}</Typography>
            <Typography color='#fff' fontSize='18px' fontWeight='400' margin='0px 40px 20px 40px'></Typography>
            <Stack direction='row' alignItems='center' margin='0px 40px 20px 40px' style={{ cursor: 'pointer' }} onClick={() => { window.open(data.url) }} >
                <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Learn more</h4>
                <ChevronRightIcon sx={{ color: '#06c' }} />
            </Stack>

        </div >
    )
}

export default BlogDetails
