import React from "react";

import "../index.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function Index() {
    return (
        <>
            <NavBar />
            <main className="bg-gray-200 p-5">
                <h1 className="text-6xl font-semibold text-center">SOPAIPILLA</h1>
                <div className="flex flex-col md:flex-row justify-center align-center flex-row m-4 mb-6 gap-5 ">
                    <div className="flex flex-col gap-5 justify-center items-center p-2">
                        <div className="">
                            <h3 className="font-bold">Integrantes</h3>
                            <ul className="list-disc">
                                <li>Felipe Meneses</li>
                                <li>Matías Olea</li>
                                <li>Pedro Pizarro</li>
                            </ul>
                        </div>
                        <div className="main-container">
                            <h3 className="font-bold">
                                Objetivos
                            </h3>
                            <ul>
                                <li>Aprender conceptos de diseño</li>
                                <li>Desarrollar páginas web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center align-center flex-col m-2">
                        <h2 className="flex flex-row justify-center text-2xl p-4">Proyectos anteriores
                            <a href="https://peaceful-bohr-acebc4.netlify.app" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                    <path d="M11 13l9 -9" />
                                    <path d="M15 4h5v5" />
                                </svg>
                            </a>
                        </h2>
                        <iframe className=" hidden md:block border-solid border-2 border-slate-200 shadow-xl rounded w-[500px] h-[300px]" src="https://peaceful-bohr-acebc4.netlify.app/" frameBorder="0"></iframe>
                    </div>

                </div>
                <div className="bg-gray-700 text-white font-semibold rounded-md p-5 flex flex-col items-center justify-center gap-2">
                    <h2 className="text-3xl">Nosotros</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-around">
                        <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 p-5 rounded-md">
                            <div className="photo-container">
                                <img src="/images/hqdefault.jpg" alt="" />
                            </div>
                            <h3>Felipiño</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 p-5 rounded-md">
                            <div className="object-cover rounded-md max-w-xs h-auto w-4/5">
                                <img src="https://pbs.twimg.com/ext_tw_video_thumb/1355281561810309120/pu/img/xWa13YKsoc8FwXAd.jpg" alt="" />
                            </div>
                            <h3>Mario Hugo Olea</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 p-5 rounded-md">
                            <div className="rounded-md ">
                                <img 
                                    className="object-cover rounded-md max-w-1/2 md:max-w-xs h-auto" 
                                    src="https://universidadpepizarro.blob.core.windows.net/tarea2/WWI.png" 
                                    alt="pedro"/>
                            </div>
                            <h3>Pedro III</h3>
                        </div>

                    </div>
                </div>
            

            <div className="mx-auto flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold my-5"> Gato Aleatorio</h2>
                <div className="max-w-2xl">
                    <img 
                        className="object-contain rounded-lg"
                        src="https://cataas.com/cat" alt="gato"/>
                </div>
            </div>
            </main >
           <Footer />



    </>
    )
}

export default Index;