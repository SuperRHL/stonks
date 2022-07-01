import React from 'react'
import { Skeleton, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const SearchCard = (props) => {
    const navigate = useNavigate()
    return (
        <Card sx={{
            'borderRadius': '15px',
            'padding': '30px',
            'backgroundColor': '#151516',
            margin:'30px',
            // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
            boxShadow: 'none',
            display: 'flex', flexDirection: 'column', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '180px', sm: '160px', xs: '150px' }
        }}  >
            <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                <Typography variant="h4" component="div" sx={{
                    'textOverflow': 'ellipsis',
                    'wordWrap': 'break-word',
                    'overflow': 'hidden',
                    'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#027fff'
                }}>
                    {props.item['1. symbol']}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="#fff">
                    {props.item['2. name']}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', 'padding': '0px' }}>
                <h4 style={{ margin: '0px', color: '#0066cc', cursor: 'pointer', 'textDecoration': 'none', 'padding': '0px' }} onClick={() => { navigate(`/stock/${props.item['1. symbol']}`) }}>Learn more</h4>
            </CardActions>
        </Card >
    )
}

export default SearchCard
