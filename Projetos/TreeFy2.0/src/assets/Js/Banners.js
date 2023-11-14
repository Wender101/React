// let counter = 1
// let fimCarousel = false
// function CaroselBanners() {
//     try {
//         const carouselSlide = document.querySelector('.carousel-slide')
//         const carouselImages = document.querySelectorAll('.carousel-slide img')

//         const slideWidth = carouselImages[0].clientWidth

//         function slide() {
//             carouselSlide.style.transition = 'transform 0.5s ease-in-out'
//             carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`

//             //? Vai fazer os banners voltarem 1 por 1 quando chegar no final
//             if(fimCarousel == false && counter + 1 < carouselImages.length) {
//                 counter++
//             } else {
//                 fimCarousel = true
//             }

//             if(fimCarousel == true && counter > 0) {
//                 counter--
//             } else {
//                 fimCarousel = false
//             }
//         } slide()
//     } catch (error){}
// }

// setInterval(CaroselBanners, 3000) // Troca o banner a cada 3 segundos (3000ms)