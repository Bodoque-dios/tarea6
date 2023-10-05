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
                <div className="flex justify-center align-center flex-row m-4 gap-5 ">
                    <div className="flex flex-col gap-5 items-center p-2">
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
                        <iframe className="border-solid border-2 border-slate-200 shadow-xl rounded w-[500px] h-[300px]" src="https://peaceful-bohr-acebc4.netlify.app/" frameBorder="0"></iframe>
                    </div>

                </div>
                <div className="nosotros">
                    <h2>Nostros</h2>
                    <div className="photos-container">
                        <div className="photo">
                            <img src="/images/hqdefault.jpg" alt="" />
                            <h3>Felipiño</h3>
                        </div>
                        <div className="photo">
                            <div className="photo-container">
                                <img src="/images/31minutos5.webp" alt="" />
                            </div>
                            <h3>Matías Bodoque</h3>
                        </div>
                        <div className="photo">
                            <div className="photo-container">
                                <img src="/images/WWI.png" alt="" />
                            </div>
                            <h3>Pedro III</h3>
                        </div>

                    </div>
                </div>
            

            <div className="gato">
                <h2> Gato Aleatorio</h2>
                <img src="https://cataas.com/cat" alt="gato"/>
            </div>
            </main >
           <Footer />



    </>
    )
}

export default Index;