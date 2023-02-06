import React from 'react';
import { Navbar } from '../components/navbar';
import './Layout.scss';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

    return(
        <div className='app-layout'>
            <Navbar items={[]} />
            {children}
            <h1>teste</h1>
        </div>
    )
}

