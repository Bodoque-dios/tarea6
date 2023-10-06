
import React, { useState } from 'react'
import NavBar from '../components/NavBar';

export default function Pedro() {

    
    function Counter(){
        const [count, setCount] = useState(0);

        return <div className='bg-black mb-8 text-white text-xl font-bold flex gap-5 p-5 w-auto rounded-lg'>
        <button 
            onClick={() => setCount(count + 1)}
            className='button-primary'>
            +
        </button>
        <h2>{count}</h2>
        <button 
            onClick={() => setCount(count - 1)}
            className='button-primary'>
            -
        </button>
    </div>
    }


  return (
    <>
        <NavBar />
        <div className='w-full flex flex-col justify-center items-center p-4'>
            <h1 className='font-bold text-3xl m-8'>Pedro Pizarro</h1>
            <h1 className='font-semibold text-3xl m-4'>Contador</h1>
            <Counter />
            <div className="flex flex-col justify-center items-center gap-8">
                <h2 className='font-semibold text-3xl'>Hobbies</h2>
                <h4 className='font-semibold text-xl'>Entre mis principales hobbies/pasatiempos se encuentran:</h4>
                <div className="mt-4 mb-3 flex flex-row items-center justify-center gap-4">
                    <div className="hobbie-content flex flex-col gap-2 items-start">
                        <h3 className='font-bold underline text-xl'>Leer</h3>
                        <p className='font-bold'>Libros de fantasía:</p>
                        <ul className='list-disc pl-2'>
                            <li>Canción de Hielo y Fuego</li>
                            <li><span className='text-lg font-bold text-blue-400'>El Archivo de las Tormentas</span></li>
                        </ul>
                        <p className='font-bold'>Mangas</p>
                        <ul className='list-disc pl-2'>
                            <li>One Piece</li>
                        </ul>
                    </div>
                    <div className="max-w-sm overflow-hidden object-contain rounded-lg img-container border-4 border-solid border-blue-600">
                        <img 
                            className='object-fill'
                            src="https://universidadpepizarro.blob.core.windows.net/tarea2/stormlight.jpg" alt="stormlight" />
                    </div>
                </div>
                <div className="juegos-container mb-3 flex flex-row items-center justify-center gap-8">
                    <div className="max-w-sm overflow-hidden object-contain rounded-lg img-container border-4 border-solid border-gray-600">
                        <img
                            className='object-fill' 
                            src="https://universidadpepizarro.blob.core.windows.net/tarea2/witcher.jpg" alt="witcher" />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <h3 className='font-bold underline text-xl'>Videojuegos</h3>
                        <p>Algunos favoritos:</p>
                        <ul className='list-disc pl-2'>
                            <li><span className='text-lg font-bold text-gray-400'>The Witcher 3</span></li>
                            <li>Dark souls / Sekiro / <br/> Elden Ring / Bloodborne</li>
                            <li>God Of War</li>
                        </ul>
                    </div>
                </div>
                <div className="peliculas-container mb-3 flex flex-row items-center justify-center gap-8">
                    <div className="hobbie-content flex flex-col gap-2 items-start">
                        <h3 className='font-bold underline text-xl'>Ver series y películas</h3>
                        <p>Algunas favoritas:</p>
                            <ul className='list-disc pl-2'>
                                <li>Batman</li>
                                <li>El Padrino</li>
                                <li><span className='text-lg font-bold text-green-600'>
                                    El Señor de los Anillos
                                </span></li>
                                <li>Game of Thrones</li>
                            </ul>
                    </div>
                    <div className="max-w-sm overflow-hidden object-contain rounded-lg img-container border-4 border-solid border-green-600">
                        <img src="https://universidadpepizarro.blob.core.windows.net/tarea2/lotr.jpg" alt="lord of the rings" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
