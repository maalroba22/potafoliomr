import React from 'react';
import perfil from '../assets/img/perfil.jpg'
import logojs from '../assets/img/logojs.png'
import logocss from '../assets/img/css.png'
import logohtml from '../assets/img/html.png'
import logohenry from '../assets/img/henry.png'
import { RiStarSFill, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri'

const Hero = () => {
    return (
        <div className='  h-[90vh] mb-20 grid grid-cols-1 lg:grid-cols-8 sm:h-[60vh] lg:h-[90vh] ' >
            {/* imagen de Manuel romero */}
            <div className='p-6 bg-gray-900 md:p-8 col-span-3  flex justify-center  items-center flex-col relative'>
                {/* contenido */}
                <div>
                    <img className=' rounded-full object-contain ring-8 ring-primary' src={perfil} alt="perfil" width={300} />

                    <div className=' w-w-1/2 relative bg-gray-900   lg:absolute w-1/2 hover:bg-slate-800 shadow-xl rounded-lg p-2 mt-3  '>
                        {/* imagenes del banner */}
                        <div className=' flex justify-evenly items-center gap-3 '>

                            <a href="https://www.linkedin.com/in/mromero21/" target="_blank" rel="noopener noreferrer">
                                <span className='text-3xl text-primary'><RiLinkedinBoxFill /></span>
                            </a>
                            <a href="https://github.com/maalroba22/" target="_blank" rel="noopener noreferrer">
                                <span className='text-3xl text-primary'><RiGithubFill /></span>
                            </a>
                            <a href="https://certificates.soyhenry.com/cert?id=dfcacdcf-929f-498a-94ee-71701f10c03e" target="_blank" rel="noopener noreferrer">
                                <img src={logohenry} alt="logo henrt" className='w-8' />
                            </a>

                        </div>
                        <div className='flex  flex-row justify-center items-center mt-3'>
                            <RiStarSFill className='text-primary  text-2xl ' />
                            <RiStarSFill className='text-primary  text-2xl ' />
                            <RiStarSFill className='text-primary  text-2xl ' />
                            <RiStarSFill className='text-primary  text-2xl ' />
                        </div>
                    </div>

                </div>
                {/* logos de programacion */}

                <img className='invisible md:visible w-20 h-20  absolute top-[10%] left-[10%] ring-4 hover:bg-white ring-primary bg-primary p4 rounded-full object-cover' src={logojs} alt="logo js" />
                <img className='invisible md:visible w-20 h-20  absolute top-[10%] right-[10%] ring-4 hover:bg-white ring-primary bg-primary p4 rounded-full object-cover' src={logocss} alt="logo js" />
                <img className='invisible md:visible w-[90px] h-[90px]  absolute bottom-0-[10%] right-[3%] ring-4 hover:bg-white ring-primary bg-primary p4 rounded-full object-cover ' src={logohtml} alt="logo js" />
            </div>
            {/* informacion */}
            <div className='mb-50 bg-red-300 sm:col-span-5 flex items-center justify-center '>
                <div className='flex flex-col p-10 gap-6'>
                    <div>
                        <h1 className=' text-xl sm:text-5xl font-bold text-center'> <span className='text-xl md:text-5xl text-primary '>¡ Hola !</span> , soy Manuel Romero</h1>
                        <h1 className=' text-center mt-4 font-bold text-2xl lg:text-4xl'>Full Stack Web Developer </h1>

                    </div>
                    <p >
                        Soy Full Stack Developer. Estoy aquí
                        para trabajar en equipo, crear y desarrollar cosas que ayuden a mejorar
                        la vida de las personas, Mejorar mis habilidades en tecnologías
                        de desarrollo web del lado del cliente y del servidor.
                        Quiero explorar nuevos entornos donde pueda encontrar retos y posibilidades para
                        crecer profesional y personalmente para crear y desarrollar cosas en equipo que ayuden
                        a mejorar la vida de las personas

                    </p>
                    {/* botones de cv */}
                    <div className='flex justify-center items-center'>
                        <button className='bg-primary text-black font-bold py-2 px-6 rounded-lg '> Descargar CV</button>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default Hero;
