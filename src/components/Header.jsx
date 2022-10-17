import React from 'react';
import Nav from './Nav';
import { RiAlignJustify } from 'react-icons/ri'

const Header = () => {
    return (
        <div className=' flex items-center w-full p-4  h-[10vh]' >
            <div className=' w-1/6 text-center'>Logo</div>
            {/* menu Navehgcion */}
            <div ><Nav /></div>
            <button>
                <RiAlignJustify />
            </button>
        </div>
    );
}

export default Header;
