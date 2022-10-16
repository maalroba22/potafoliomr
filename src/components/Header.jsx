import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div className='flex items-center w-full p-4'>
            <div className=' w-1/6 text-center'>Logo</div>
            <div className='flex-1  flex justify-center' >
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
