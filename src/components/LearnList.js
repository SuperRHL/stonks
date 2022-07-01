import { React, useState, useEffect } from 'react'
import { db } from '../utils/firebaseConfig'
// import { initializeApp } from "firebase/app";
import { Box, Stack } from '@mui/material'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import LearnCard from '../components/learnCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { getDatabase, onValue, ref, set } from "firebase/database"
import { collection, onSnapshot, query } from 'firebase/firestore'
const LearnList = () => {
    const [data, setData] = useState([])
    // const app = initializeApp(firebaseConfig)
    useEffect(() => {
        const blogref = collection(db, "Blogs")
        const q = query(blogref)
        onSnapshot(q, (snapshot) => {
            const allBlogs = snapshot.docs.map(
                (docs) => (
                    {
                        id: docs.id,
                        ...docs.data()
                    }
                ))
            setData(allBlogs)
        })

    }, [])
    console.log(data)



    return (
        <div>
            <Stack direction='row' alignItems='center'>
                <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', ml: '40px' }}>Learn</Box>
                <ArrowForwardIcon fontSize='large' sx={{ ml: '10px' }} />
            </Stack>
            <ScrollMenu>
                {data.map((item, i) => (
                    <Box key={item.id || item} itemId={item.id || item} title={item.id || item} ml=" 40px" mb='40px' mt='10px' p='20px 0px'>
                        <LearnCard author={item.Author} id={item.id} title={item.Title} body={item.Body} key={item.Key} banner={item.Banner} />
                    </Box>
                ))}

            </ScrollMenu>
        </div>
        // : console.log('loading')
    )
}

export default LearnList
