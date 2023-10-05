const data = [
    {
        name: 'Roza Otunbaeva',
        img: './img/roza.png',

    },
    {
        name: 'Almazbek Atambaev',
        img: './img/atambaev.png',
        
    },
    {
        name: 'Sady Japarov',
        img: './img/japarov.png',
        
    },
    {
        name: 'Kurmabek Bakiev',
        img: './img/bakiev.png',
        
    },
    {
        name: 'Sooronbye Jeenbekov',
        img: './img/sooronbye.png',
        
    },
    {
        name: 'Askar Akaev',
        img: './img/akaev.png',
        
    },
]

const main_content = document.querySelector('.main_content')
const new_data = [...data]

new_data.forEach(el =>{
    const main_box = document.createElement('div')
    const col = document.createElement('div')
    
    main_box.className = 'main_box'
    col.className = 'col-4'
    
    img.src = el.img

    main_box.append(img)
    col.append(main_box)
    main_content.append(col)

})

