import { Box, Stack, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NewsCard = (props) => {
    return (
        <Card className='lift' sx={{
            'borderRadius': '15px',
            'padding': '30px',
            // 'width': 'auto',
            // 'boxShadow': '0px 16px 40px rgba(112, 144, 176, 0.2)',
            boxShadow: 'none',
            display: 'flex', flexDirection: 'column'
        }}>

            <CardMedia
                sx={{ 'borderRadius': '15px' }}
                width='auto'
                component="img"
                style={{ 'objectFit': 'cover' }}
                style={{ 'maxHeight': 200, justifyContent: "center", display: "flex" }}
                alt="green iguana"
                src={props.source}
            />


            <CardContent style={{ alignItems: 'flex-start', flexDirection: 'column', padding: '0px' }}>
                <Typography variant="h4" component="div" sx={{
                    mt: 1.5,
                    fontWeight: '700', fontSize: { lg: '22px', sm: '20px', xs: '18px' }, color: '#049cb7'
                }}>
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: { lg: '18px', sm: '16px', xs: '14px' }, }} color="text.secondary">
                    {props.author}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { lg: '16px', sm: '14px', xs: '12px' } }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 1.5, display: 'flex', alignItems: 'left', justifyContent: 'space-between', 'padding': '0px' }}>
                <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={() => { window.open(props.url) }} >
                    <h4 style={{ margin: '0px', color: '#0066cc', 'textDecoration': 'none', 'padding': '0px' }} >Learn more</h4>
                    <ChevronRightIcon sx={{ color: '#06c' }} />
                </Stack>
            </CardActions>
        </Card >)
}
export default NewsCard