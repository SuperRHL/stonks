import React from 'react'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate()
    return (
        <div style={{ 'minHeight': '100vh', margin: 'auto', marginTop: '20vh', 'display': 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>
                Hold your horses! <br /> 🏇
            </h1>

        </div >
    )
}

export default Loading