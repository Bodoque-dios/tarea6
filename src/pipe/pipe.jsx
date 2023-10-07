
import React, { useState, useEffect } from 'react';

import '../pipe/css/pipe.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

export default function Pipe() {
    function Edad(){
        const [time, setTime] = useState(new Date());
        const [laedad, setLaEdad] = useState('');
        const [edadCalculada, setEdadCalculada] = useState(null);



        const CambioDeAño = (e) => {
            const inputYear = parseInt(e.target.value);
            setLaEdad(inputYear);
        };
        const CalcularEdad = () => {
            if (laedad !== '') {
              const currentYear = time.getFullYear();
              const age = currentYear - laedad;
              return age *365;
            }
            return '';
        };
        
        const HandleCalcularEdad = () => {
            const edad = CalcularEdad();
            setEdadCalculada(edad);
        };

      
      
      
        return (
            <div className='contenedores-edad'>
                <div className="real-time-clock contenedor-edad">
                <h2>Calculadora de Vejez</h2>
                <input
                type="number"
                placeholder="Su año de nacimiento"
                value={laedad}
                onChange={CambioDeAño}
                />
                <p>Año actual: {time.getFullYear()}</p>
                <p>Dias: {edadCalculada !== null ? edadCalculada : 'Dias de viejo'}</p>
                <button class = "boton-edad" onClick={HandleCalcularEdad}>Calcular Dias</button>
                </div>
                <div className='contenedor-edad'></div>

            </div>

          );
    }



    return (
        <>
            

            <NavBar />
            
            <main>
                
                <section id="About">
                <h2>Sobre Mi</h2>
                <div className="contenedor">
                    <figure>
                    <div className="about-container-img">
                        <img src="https://f.rpp-noticias.io/2022/02/25/12232145vc5oseyubau3aotoyx6estngajpg.jpg" alt="Yo" />
                    </div>
                    <div className="imagen">
                        <img src="https://i.pinimg.com/originals/2b/72/8f/2b728f1bc27916b3158470594c59642a.jpg" alt="otroyo" />
                    </div>
                    </figure>
                </div>
                <div className="about-text-container">
                    <p>Me gusta juntarme con amigos, ver películas, series, juegos y escuchar música. Entre mis </p>
                </div>
                </section>
                <section id="Hobbies">
                    <div className='contenedor-hobbies'>
                        <h2>Hobbies</h2>
                        <ul>
                        <li>Escuchar música</li>
                        <li>Ver series</li>
                        <li>Ver películas</li>
                        <li>Programar</li>
                        </ul>
                    </div>
                </section>
                <Edad/>
            </main>
            
       
        </>
    )


}

