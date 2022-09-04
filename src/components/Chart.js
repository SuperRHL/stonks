import React from 'react'
import { useState, useEffect } from "react"
import { Box, Card, CardContent, Typography } from '@mui/material'
import Loading from './Loading';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {


    const stockPrice = []
    const stockTime = []

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [options, setOptions] = useState([])
    const [price, setPrice] = useState([])
    const [percent,setPercent]=useState([])


    const { symbol } = useParams()



    useEffect(() => {
        if (!symbol) return
        const fetchQuote = async()=>{
            const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_KEY}`)
            const data = await res.json()
            setPrice(data['Global Quote']['05. price'])
            setPercent(data['Global Quote']['10. change percent'])
            
                
        }
        const fetchPrices = async () => {
            const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_KEY}`)
            const data = await res.json()
            Object.values(data['Time Series (5min)']).forEach(element => stockPrice.push(element['4. close']))
            Object.keys(data['Time Series (5min)']).forEach(element => stockTime.push(element.slice(11)))

        }
        fetchQuote()
        fetchPrices()
            .then(() => {
                if (stockTime && stockPrice) {
                    setLoading(false); setOptions({
                        scales: {
                            xAxis: {
                                // The axis for this scale is determined from the first letter of the id as `'x'`
                                // It is recommended to specify `position` and / or `axis` explicitly.
                                reverse: true,
                                display: false,
                            }
                        },
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,

                            },
                        },
                    })
                }; setData({
                    labels: stockTime,
                    datasets: [
                        {
                            label: symbol,
                            data: stockPrice,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },

                    ],
                })
            })
    }, [])







    console.log(data, options)






    if (isLoading) {
        return <Loading></Loading>
    }
    else {
        return (
            <div style={{margin:'20px 0 40px 0'}}>
                <Card sx={{
                    'borderRadius': '15px',
                    'padding': '30px', 'backgroundColor': '#151516',
                    // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
                    boxShadow: 'none',
                    display: 'flex', flexDirection: 'column'
                }}  >
                    <CardContent style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                        <Typography variant="h4" component="div" sx={{
                            'textOverflow': 'ellipsis',
                            'wordWrap': 'break-word',
                            'overflow': 'hidden',
                            'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#027fff'
                        }}>
                            { }
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="#fff">
                            { }
                        </Typography>
                        <Typography variant="h4" component="div" sx={{
                                        mb: 1.5,
                                        'textOverflow': 'ellipsis',
                                        'wordWrap': 'break-word',
                                        'overflow': 'hidden',
                                        'maxHeight': '2.6em', fontWeight: '700', fontSize: { lg: '24px', sm: '22px', xs: '20px' }, color: '#027fff'
                                    }}>
                            <b>${price.slice(0,-2)}</b> 
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' }, 'color': "#fff" }}>
                            {percent.slice(0,-3)}%
                        </Typography>
                        <Line options={options} data={data} />
                    </CardContent>
                </Card >
            </div>)
    }
}

export default Chart