const data = [
    {
        name: 'Roza Otunbaeva',
        img: './img/roza.png',
        image: './img/roza_fighter.png'

    },
    {
        name: 'Almazbek Atambaev',
        img: './img/atambaev.png',
        image: './img/atambaev_fighter.png'
        
    },
    {
        name: 'Sady Japarov',
        img: './img/japarov.png',
        image: './img/sadyr_fighter.png'
        
    },
    {
        name: 'Kurmabek Bakiev',
        img: './img/bakiev.png',
        image: './img/bakiev_fighter.png'
        
    },
    {
        name: 'Sooronbye Jeenbekov',
        img: './img/sooronbye.png',
        image: './img/sooronbye_fighter.png'
        
    },
    {
        name: 'Askar Akaev',
        img: './img/akaev.png',
        image: './img/akaev_fighter.png'
        
    },
]


const main_content = document.querySelector('.main_block')
const block_left = document.querySelector('.block__left')
const block_right = document.querySelector('.block__right')

const block__left__second = document.querySelector('.block__left__second')
const block__right__second = document.querySelector('.block__right__second')





const new_data = [...data]

let clickedLeft = false
let clickedRight = false

new_data.forEach(el =>{
    const main_box = document.createElement('div')
    const col = document.createElement('div')
    const img = document.createElement('img')

    
    main_box.className = 'main_box'
    col.className = 'col-4'



  

 
    img.src = el.img


    main_box.append(img)
    col.append(main_box)
    main_content.append(col)

    img.addEventListener('mouseenter', () => {
        if (!clickedLeft && !clickedRight) {
            block_left.innerHTML = `<img src="${el.image}" class="img_fighters">`
            block__left__second.innerHTML = `<img src="${el.image}" class="img_fighters">`
        } else if (!clickedRight) {
            block_right.innerHTML = `<img src="${el.image}" class="img_fighters">`
            block__right__second.innerHTML = `<img src="${el.image}" class="img_fighters">`
        
        }
    })

    img.addEventListener('click', () => {
        if (!clickedLeft) {
            block_left.innerHTML = `<img src="${el.image}" class="img_fighters">`
            block__left__second.innerHTML = `<img src="${el.image}" class="img_fighters">`
            clickedLeft = true;
        } else if (!clickedRight) {

            block_right.innerHTML = `<img src="${el.image}" class="img_fighters">`
            block__right__second.innerHTML = `<img src="${el.image}" class="img_fighters">`
            clickedRight = true;
        }
    })

})





