import {useState } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const [usuario] = useState(localStorage.getItem('usuario'))
    
    if(usuario !== '12e1293f-06dc-4de9-9e9d-40afef9e35e9') return <Navigate to ='/' />

    return children;
}

export default PublicRoute;