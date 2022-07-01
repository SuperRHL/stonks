import React from 'react'
import { Skeleton, Card, CardActions, CardContent, Typography, Stack, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const LearnCard = (props) => {
    

    const author = props.author
    const navigate = useNavigate()
    const title = props.title
    const body = props.body
    const id = props.id
    const banner = props.banner

    return (

        <div>
            {props ? (
                <Card sx={{
                    // 'display': 'block',
                    // 'width': '30vw',
                    // 'transitionDuration': '0.3s',
                    'height': '65vh',
                    justifyContent: 'space-between',
                    'borderRadius': '15px',
                    'padding': '30px',
                    // 'width': 'auto',
                    // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                    boxShadow: 'none',
                    maxWidth: { lg: '275px', sm: '240px', xs: '200px' },
                    display: 'flex', flexDirection: 'column', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' },
                    'backgroundColor': '#151516'
                }}>
                    <div>

                        <CardMedia
                            sx={{ 'borderRadius': '15px' }}
                            width='auto'
                            height='150vh'
                            component="img"
                            style={{ 'objectFit': 'cover', 'maxHeight': 200, justifyContent: "center", display: "flex" }}
                            alt="green iguana"
                            src={banner}
                        />


                        <CardContent style={{ alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                            <Typography variant="h4" component="div" sx={{
                                mt: 1.5,
                                'display': '-webkit-box',
                                'WebkitBoxOrient': 'vertical',
                                'WebkitLineClamp': '4',
                                'overflow': 'hidden',
                                fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#049cb7'
                            }}>
                                {title}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="#86868b">
                                {author}
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontSize: { lg: '16px', sm: '14px', xs: '12px' }, 'color': "#fff"
                        , 'display': '-webkit-box',
                        'WebkitBoxOrient': 'vertical',
                        'WebkitLineClamp': '3',
                        'overflow': 'hidden'
                            }}>
                                {body}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardActions sx={{
                        mt: 1.5, display: 'flex', alignItems: 'left', justifyContent: 'space-between', 'padding': '0px'

                    }}>
                        <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => {  navigate(`/learn/${id}`) }} >
                            <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Learn more</h4>
                            <ChevronRightIcon sx={{ color: '#06c' }} />
                        </Stack>
                    </CardActions>
                </Card >) : <Skeleton variant='rectangle' animation='wave' sx={{
                    'borderRadius': '15px',
                    'padding': '30px', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' }
                }}></Skeleton>
            }
        </div >


    )
}

export default LearnCard
