import React from "react";

export default function Mati() {
	return <>


<body>
    <audio loop autoplay="true">
        <source src="https://www.myinstants.com/media/sounds/magicmamaliga.mp3" type="audio/mpeg"/>
    </audio>
    <nav className=" flex justify-between h-16 items-center font-bold text-xl bg-gray-400">
        <a href="/" className="p-2 rounded hover:text-black hover:bg-white" >Volver</a>
        <div className="buttons flex justify-around">
            <a href="#about" className="p-2 rounded hover:bg-white" >About Me</a>
            <a href="#hobbies" className="p-2 rounded hover:bg-white" >Hobbies</a>
            <a href="#filmography" className="p-2 rounded hover:bg-white" >Filmography</a>
        </div>
    </nav> 
    <header>
        <div className="borat bg-gray-300 pt-4">
            <div className="">
            	<h1 className="text-5xl text-center absolute left-1/2 -translate-x-1/2 bottom-0 font-bold ">My name Borat Sagdiyev</h1>
                <img className="w-4/5 m-auto rounded-3xl" src="https://fotografias.antena3.com/clipping/cmsimages01/2020/09/09/401A4DD3-236E-4281-99E1-FE60CBA0FE36/98.jpg?crop=1621,912,x0,y0&width=1900&height=1069&optimize=high&format=webply" alt="BORAT"/>
            </div>
        </div>

    </header>
    <main className="bg-gray-300">
        <section id="about">
            <h2 className="text-3xl font-semibold text-center p-2">About Me</h2>
            <p className="text-xl font-semibold text-center p-2">My profession, work as a television reporter for Kazakhstan.</p>
        </section>
		<div className="bg-gray-400 h-1 w-4/5 m-auto rounded " ></div>
        <section id="hobbies"  className="w-1/3 m-auto">    
            <h2 className="text-3xl font-semibold text-center p-2">My hobbies</h2>
            <ul className="list-disc p-4 flex flex-col ">
                <li>Ping Pong</li>
                <li>Disco Dancing</li>
                <li>Photograph</li>
                <li>Table Tennis</li>
                <li>Sunbathing</li>
                <li>Walking</li>
            </ul>
        </section>
		<div className="bg-gray-400 h-1 w-4/5 m-auto rounded " ></div>

        <section id="filmography" className="w-1/3 m-auto">
            <h2 className="text-3xl font-semibold text-center p-2">Filmography</h2>
            <ul className="list-disc p-4 flex flex-col items-center">
                <li><b>Borat: </b><br/>Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan</li>
                <li><b>Borat Subsequent Moviefilm: </b><br/>  Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan</li>
            </ul>
        </section>
    </main>

    <footer className="bg-gray-400 h-12 flex justify-center ">
        <p className="text-lg">If you need to contact us, send electronic mail like modern Kazakhstan! Email: <a>verynice@boratfansite.com</a></p>
    </footer>
    </body>
    
	</>;
}
