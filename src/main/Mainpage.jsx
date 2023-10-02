import React from "react";

import "./style.css"
function Index() {
    return (
        <>
            <nav>
                <div>
                    <a className="inicio" href="/../index.html">Inicio</a>
                </div>
                <div>

                    <a className="name" href="/pipe/pipe.html">Felipe 1</a>
                    <a className="name" href="/mati/mati.html">Matías 🚀</a>
                    <a className="name" href="pedro/pedro.html">Pedro</a>
                </div>
            </nav>

            <main>
                <h1>SOPAIPILLA</h1>
                <div className="hero-container">
                    <div className="hero-info-container">
                        <div className="main-container">
                            <h3>Integrantes</h3>
                            <ul>
                                <li>Felipe Meneses</li>
                                <li>Matías Olea</li>
                                <li>Pedro Pizarro</li>
                            </ul>
                        </div>
                        <div className="main-container">
                            <h3>
                                Objetivos
                            </h3>
                            <ul>
                                <li>Aprender conceptos de diseño</li>
                                <li>Desarrollar páginas web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="proyectos-container">
                        <h2>Proyectos anteriores
                            <a href="https://peaceful-bohr-acebc4.netlify.app" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                    <path d="M11 13l9 -9" />
                                    <path d="M15 4h5v5" />
                                </svg>
                            </a>
                        </h2>
                        <iframe src="https://peaceful-bohr-acebc4.netlify.app/" frameBorder="0"></iframe>
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
            <footer>
                <a className="button" href="https://bit.ly/3BlS71b">Rick</a>
            </footer>



    </>
    )
}

export default Index;