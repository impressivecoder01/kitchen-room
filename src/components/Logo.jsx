import React from 'react';
import logo from '/logo.png'
const Logo = () => {
    return (
        <div>
            <div className='flex items-center gap-1'>
                <img className='w-10' src={logo} alt="" />
                <h2 className='text-xl font-bold text-shadow-xs'>Taxi</h2>
                <span className='text-[#fcb700]'>Kitchen</span>
            </div>
        </div>
    );
};

export default Logo;