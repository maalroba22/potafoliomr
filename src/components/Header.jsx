import React,{useState} from 'react';
import Nav from './Nav';
import { RiAlignJustify,RiCloseLine } from 'react-icons/ri'
import logo from '../assets/img/logomr1.png'

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <div className=' flex items-center justify-between xl:justify-start w-full h-[10vh] p-4 z-50' >
            <div className='xl:w-1/6 text-center'>
                <img className=" h-12 w-full" src={logo} alt="Logo"  />
            </div>
            {/* menu Navehgcion */}
            <div ><Nav  mostar ={showMenu}/></div>
            <button onClick={()=>setshowMenu(!showMenu)} className="text-2xl p-2 xl:hidden">
             
            {!showMenu ? <RiAlignJustify/> : <RiCloseLine/> }
            </button>
        </div>
    );
}

export default Header;
