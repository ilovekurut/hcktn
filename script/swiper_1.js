
const data_of_swiper = [
    {
      img: './img/slider_1_img/japarov.JPEG'
    },
    {
      img: './img/slider_1_img/tashiev.JPEG'
    },
    {
      img: './img/slider_1_img/barbie.JPEG'
    }

]


const slider = document.querySelector('.swiper-wrapper');

data_of_swiper.forEach(el => {
    const swiper = document.createElement('div')
    const img = document.createElement('img')


    img.src = el.img


    swiper.classList.add('swiper-slide')

    swiper.append(img)
    slider.appendChild(swiper)


})

