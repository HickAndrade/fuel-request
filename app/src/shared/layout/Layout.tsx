import React from 'react';
import { Navbar } from '../components/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

    return(
    <div className='app-layout'>
            <Navbar items={[]} />
            <ToastContainer position='top-center' autoClose={3000} />
        <div className='app-children'>
            {children}
        </div>
    </div>
    )
}

