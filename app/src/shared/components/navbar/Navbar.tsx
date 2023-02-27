import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface Props {
    items: {
        label: string;
        to: string;
    }[];
}

const Navbar: React.FC<Props> = ({ items }) => (
        <nav className='navigation-bar'>
            <ul>
                {items.map(({ label,to }, index) => (
                    <li key={index}>
                        <Link to={to}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

export default Navbar;