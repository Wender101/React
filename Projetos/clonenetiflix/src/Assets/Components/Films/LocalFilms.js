import React, { useEffect } from 'react';
import '../../Sass/populares.css'
import api from '../../../api'

let iniciar = false

export default function LocalFilms() {

    //? Vai rolar o scroll horizontalmente
    useEffect(() => {
        const article = document.querySelector('article')
    
        function handleWheel(event) {
          event.preventDefault()
    
          const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail))
          const scrollAmount = 30;
    
          article.scrollLeft += delta * scrollAmount
        }
    
        article.addEventListener('wheel', handleWheel)
    
        return () => {
          article.removeEventListener('wheel', handleWheel)
        };
      }, [])


    async function findMovie() {
        try {
            const apiKey = '2550828cf979a577a2639392809d746e'
            // const randomNumber = Math.floor(Math.random() * 150000)
            const randomNumber = 157336
            const response = await api.get(`${randomNumber}?api_key=${apiKey}&language=pt-BR`) 
            let mostPopulars = await api.get(`popular?api_key=${apiKey}&language=pt-BR`)
            mostPopulars = mostPopulars.data.results
            
            const container = document.getElementsByClassName('container')[0] // Seleciona o elemento <article> onde você deseja adicionar as divs
            const movies = mostPopulars
            movies.slice(0, 10).forEach(movie => { 
                const div = document.createElement('div')
                const logo = document.createElement('div')
                div.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` 

                div.className = 'movie'
                logo.className = "iconNetiflix"

                div.appendChild(logo)
                container.appendChild(div) // Adiciona o elemento <div> ao container

                div.addEventListener('click', () => {
                    document.querySelector('#titleMovie').innerHTML = movie.title
                    document.querySelector('#descMovie').innerHTML = movie.overview
                    document.getElementsByClassName('background')[0].style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                })
            })

        } catch (error) {
            console.warn(`Algo deu errado: ${error}`)
        }
    } 

    if(iniciar === false) {
        iniciar = true
        findMovie()
    }

    return (
        <section className="localPopularesDaNetiflix">
            <h1 onClick={findMovie}>Populares da Netiflix</h1>

            <article className="localFimls">
                <div className="container"></div>
            </article>  
        </section>
    )
}