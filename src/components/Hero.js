import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen h-screen m-20 flex flex-col items-center'>
        <main className='w-screen h-screen grid grid-rows-1 grid-cols-1'>
        <section className='p-7 col-auto row-auto flex flex-row items-center'>
            <div className='h-max w-1/3'>
                <img src={require('./../assets/perfil.jpg')} alt="fotoPerfil" className='h-96 rounded-md'/>
            </div>
            <div className='h-full w-1/2 p-5 text-center flex flex-col justify-evenly bg-indigo-500 rounded-md shadow-md'>
                <h1 className='text-3xl font-bold text-indigo-50'>
                    SOBRE MÍ
                </h1>
                <nav className='flex items-center justify-around text-xl'>
                    <a href="./../../" className='w-52 rounded-md p-1 font-semibold text-indigo-50 bg-gradient-to-l from-blue-300 via-blue-500 to-pink-500 hover:bg-blue-300 duration-500'>CURRÍCULUM</a>
                    <a href="#" className='w-52 rounded-md p-1 font-semibold text-indigo-50 bg-gradient-to-l from-blue-300 via-blue-500 to-pink-500 hover:bg-blue-300 duration-500'>CONTACTO</a>
                </nav>
                <p className='text-indigo-50 text-xl font-semibold'>Me llamo Marcos y soy desarrolador de páginas web y apliaciones web además de ocupar otros oficios como mantenimiento y reparacion de dispositivos microinformáticos, ciberseguridad para empresa y diseñador gráfico. Tengo un gran interés en el aprendizaje además de dedicar el 100%b de mi capacidad a mi oficio.</p>
            </div>
        </section>
        </main>
    </div>
  )
}

export default Hero;
