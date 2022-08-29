import { React, useState, useEffect } from 'react'
import { db } from '../utils/firebaseConfig'
// import { initializeApp } from "firebase/app";
import { Box, Stack } from '@mui/material'
import Masonry from 'react-masonry-css'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import LearnCard from '../components/learnCard'
import PageLearnCard from '../components/PageLearnCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { getDatabase, onValue, ref, set } from "firebase/database"
import { collection, onSnapshot, query } from 'firebase/firestore'
import Loading from '../components/Loading'
const Learn = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
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
            if (data) { setLoading(false) }
        })

    }, [])


    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    if (isLoading) {
        return <Loading></Loading>;
    } else {

        return (
            <div style={{margin:"40px"}}>
            <Stack direction='row' alignItems='center'>
                <Box sx={{ fontWeight: '700', fontSize: { lg: '48px', sm: '28px', xs: '26px' }, mb: '10px', mt: '20px' }}>Learn</Box>
                <ArrowForwardIcon fontSize='large' sx={{ ml: '10px',mt:'20px' }} />
            </Stack>
                <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">

                    {data ? data.map((item, i) => (
                        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} mb='40px' mt='10px' p='20px 0px'>
                            <PageLearnCard author={item.Author} id={item.id} title={item.Title} body={item.Body} key={item.Key} banner={item.Banner} />
                        </Box>
                    )) : <div className="App">Loading...</div>}

                </Masonry>
            </div>

        )
    }
}

export default Learn
