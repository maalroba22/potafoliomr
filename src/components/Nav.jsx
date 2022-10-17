import React from 'react';


const Nav = ({mostar}) => {
    
    return (
        <div className={`fixed bg-white  w-[80%] md:w-[40%] xl:w-full h-full ${mostar ? "left-0" :"-left-full" }   top-0 xl:static
         flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
           
            <a href="#cualquier ruta">Home1</a>
            <a href="#cualquier ruta">Home2</a>
            <a href="#cualquier ruta">Home3</a>
            <a href="#cualquier ruta">Home4</a>
            <a href="#cualquier ruta">Home5</a> 
        </div>
    );
}

export default Nav;
