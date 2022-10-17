import React from 'react';
import {RiCloseLine} from 'react-icons/ri'

const Nav = () => {
    return (
        <div className='fixed bg-gray-300  w-full h-full right-0 top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10'>
            <button><RiCloseLine/></button>
            <a href="#cualquier ruta">Home1</a>
            <a href="#cualquier ruta">Home2</a>
            <a href="#cualquier ruta">Home3</a>
            <a href="#cualquier ruta">Home4</a>
            <a href="#cualquier ruta">Home5</a> 
        </div>
    );
}

export default Nav;
