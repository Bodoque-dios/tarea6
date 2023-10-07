
import React from 'react'

export default function NavBar() {
  return (
    <nav className=" bg-black flex justify-between text-white h-16 items-center p-3">
        <div>
            <a className="text-xl font-semibold p-2 rounded hover:bg-white hover:text-black" href="/">Inicio</a>
        </div>
        <div>
            <a className="text-xl font-semibold p-2 rounded hover:bg-white hover:text-black" href="/pipe">Felipe 1</a>
            <a className="text-xl font-semibold p-2 rounded hover:bg-white hover:text-black" href="/mati">Matías 🚀</a>
            <a className="text-xl font-semibold p-2 rounded hover:bg-white hover:text-black" href="/pedro">Pedro</a>
        </div>
    </nav>

  )
}
