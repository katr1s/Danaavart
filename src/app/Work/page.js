"use client"

import Navigation from "@/components/navigation";
import { useState } from "react";
import "@/app/Work/work.css"
import Texture from "@/components/texture";

export default function Work(){
    const [image, setImage] = useState("cat.jpg")
    return(
        <div className="work">
            <div className="content">
                <Navigation />
                <div className="box">
                <div className="portfolio">
                    <h1>Mis trabajos</h1>
                    <div className="buttons">
                        <button type="button" onClick={() => setImage("dog.jpg")}>Compañero de juegos</button>
                        <button type="button" onClick={() => setImage("cat.jpg")}>Mascota 🐱</button>
                        <button type="button" onClick={() => setImage("Arcane.webp")}>Arcane + spider-verse = perfección</button>
                        <button type="button" onClick={() => setImage("perfil.jpg")}>Había olvidado que ten&iacute;a esta joya guardada</button>
                        <button type="button" onClick={() => setImage("carpenter.webp")}>I didn&apos;t want your little b** ass anyway</button>
                        <button type="button" onClick={() => setImage("character.webp")}>Character design</button>

                    </div>
                    <p>Bienvenido al mundo de mis locuras</p>
                </div>

                <div className="image">
                    <img src={`/Portfolio/${image}`} alt="" />

                    <div className="socialNetwork">
              <a
                href="https://www.behance.net/dannavalenzuela5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Icons/bxl-behance.svg"
                  alt="Behance"
                  title="Behance"
                />
              </a>

              <a
                href="https://www.instagram.com/danvaart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Icons/bxl-instagram.svg"
                  alt="Instagram"
                  title="Instagram"
                />
              </a>
            </div>
                </div>
                </div>
            </div>

            <Texture />
        </div>
    )
}