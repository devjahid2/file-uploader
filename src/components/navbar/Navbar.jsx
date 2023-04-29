import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import { images } from '../../assets/images/images';

const Navbar = () => {
    const [openLeftMenu,setOpenLeftMenu] = useState(false);
    const smallDevice = useWindowWidth(769);
    return (
        <>
            {
                smallDevice & openLeftMenu ? <div onClick={() => setOpenLeftMenu(false)} className="shadow-overlay"></div> : ''
            }
            <div className="content pt-4 pb-3">
            <nav className='d-flex align-items-center justify-content-between nav-section'>
            <div className="d-flex align-items-center gap-5">
                {
                    smallDevice ? <img onClick={() => setOpenLeftMenu(true)} className='nav-icon pointer-event' src={images.menu} alt="menu" /> : ''
                }
                <h2 className='h4'>Company Logo</h2>
                <ul className={`d-flex ${smallDevice & openLeftMenu ? 'active':''} ${smallDevice ? 'nav-item-fixed' : ''}`}>
                    {
                        smallDevice ? 
                        <div className="text-end">
                        <img onClick={() => setOpenLeftMenu(false)} src={images.close} alt="close" className="pb-3 nav-icon pointer-event" />
                    </div> : ''
                    }
                    <li><Link className='active' to="/">Start</Link></li>
                    <li><Link to="/">Pricing</Link></li>
                    <li><Link to="/">Recourse</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
            <Link className='default-btn login-btn' to="">Login</Link>
        </nav>
        </div>
        </>
    );
}

export default Navbar;
