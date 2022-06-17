import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
const StockCard = (item) => {
    const navigate = useNavigate()
    const companyName = item.item.CompanyName
    const companySymbol = item.item.Symbol
    const priceChange = item.item.PriceChangePercentFormatted
    console.log(item)
    return (item &&

        <Card sx={{
            'borderRadius': '5px',
            'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
            display: 'flex', flexDirection: 'column', minWidth: { lg: '275px', sm: '240px', xs: '200px' }, minHeight: { lg: '230px', sm: '210px', xs: '200px' }
        }}  >
            <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' } }}>
                    {companyName}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' } }} color="text.secondary">
                    {companySymbol}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                    {priceChange}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button size="small" onClick={() => { navigate(`/stock/${companySymbol}`) } }>Learn More</Button>
            </CardActions>
        </Card >)


}

export default StockCard
