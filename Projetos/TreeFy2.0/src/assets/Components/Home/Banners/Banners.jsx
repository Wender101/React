import React from "react"

//? Style
import './StyleBanners.css'

export default function Banners() {
    return (
        <article id="containerBannes">
            <div className="carousel-container">
                <div className="carousel-slide">
                    {/* <img src="src/assets/Imgs/Banners/Banner1.png"/> */}
                    <img src="src/assets/Imgs/Banners/HeroSection.png"/>
                    {/* <img src="src/assets/Imgs/Banners/Banner2.png"/> */}
                </div>
            </div>
        </article>
    )
}