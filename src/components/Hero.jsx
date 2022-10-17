import React from 'react';

const Hero = () => {
    return (
        <div className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
            {/* informacion */}
            <div className='bg-red-300 md:col-span-5 flex items-center justify-center '>
                <div className='flex flex-col p-10 gap-6'>
                    <div>
                        <h1 className=' text-6xl font-bold'> <span className='text-primary'>¡ Hola !</span> , soy Manuel Romero</h1>
                        <h1 className='text-center mt-4 font-bold text-3xl'>Full Stack Web Developer | Ing Sistemas</h1>

                    </div>
                    <p >
                        Soy Ingeniero de sistemas, Full Stack Developer con conocimientos en SQL,
                        MYSQL, NodeJS, React, Redux entre otras tecnologías del sector. Estoy aquí
                        para trabajar en equipo, crear y desarrollar cosas que ayuden a mejorar
                        la vida de las personas, Mejorar mis habilidades en tecnologías
                        de desarrollo web del lado del cliente y del servidor.
                        Quiero explorar nuevos entornos donde pueda encontrar retos y posibilidades para
                        crecer profesional y personalmente para crear y desarrollar cosas en equipo que ayuden
                        a mejorar la vida de las personas

                    </p>
                    {/* botones de cv */}
                    <div>
                        <button className='bg-primary text-black font-bold py-2 px-6 rounded-lg'> Descargar CV</button>
                    </div>
                    <div>
                        <button className='bg-primary text-black font-bold py-2 px-6 rounded-lg'> Descargar CV</button>
                    </div>
                </div>
            </div>
            {/* imagen de Manuel romero */}
            <div className='bg-red-400 md:col-span-3'>imagen</div>
        </div>
    );
}

export default Hero;
