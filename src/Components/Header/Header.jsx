import Link from 'next/link';
import React from 'react';
import './header.css'
import arrow from './images/arrow-right.png'
import Image from 'next/image';


const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="flex justify-between items-center container mx-auto ">
                <h4 className="header-title">{title}</h4>
                <div className="flex items-center gap-[6px]">
                    <Link className="home-link" href='/'>Home</Link> <Image src={arrow.src} width="16" height="16" /> <span className="link-title">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;