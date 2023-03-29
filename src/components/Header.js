import React from 'react'

const Header = () => {
  return (
    <nav className="w-full h-4">
        <ul className="p-3 flex items-start text-xl font-semibold bg-slate-200 shadow-md">
          <a href=''><li className="p-1 ml-2 rounded-xl w-48 text-center bg-indigo-500 text-indigo-100 cursor-pointer hover:bg-gradient-to-l from-blue-600 via-cyan-500 to-sky-300 shadow-md shadow-violet-500 duration-1000">SOBRE MÍ</li></a>
          <a href=''><li className="p-1 ml-2 rounded-xl w-48 text-center bg-indigo-500 text-indigo-100 cursor-pointer hover:bg-gradient-to-l from-blue-600 via-cyan-500 to-sky-300 shadow-md shadow-violet-500 duration-1000">CURRÍCULUM</li></a>
          <a href=''><li className="p-1 ml-2 rounded-xl w-48 text-center bg-indigo-500 text-indigo-100 cursor-pointer hover:bg-gradient-to-l from-blue-600 via-cyan-500 to-sky-300 shadow-md shadow-violet-500 duration-1000">CONTACTO</li></a>
        </ul>
    </nav>
  )
}

export default Header