
import React, { useState } from 'react'
import NavBar from '../components/NavBar';

export default function Pedro() {

    const [count, setCount] = useState(0);


  return (
    <>
        <NavBar />
        <div className='w-full flex flex-col justify-center items-center'>
            <h1>Contador</h1>
            <div className='bg-black text-white text-xl font-bold flex gap-5 p-5 w-auto rounded-lg'>
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
        </div>
    </>
  )
}
