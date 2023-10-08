const globalModal = () => {
    const apply = document.querySelector('.apply')
    const modalBackrop = document.querySelector('.modalBackrop')
    const modal = document.querySelector('.modal')
    const message = document.querySelector('.message')
    const modalContent = document.querySelector('.modalContent')
    const close = document.querySelector('.close')
    const reset1 = document.querySelector('.resetMessager') 
    const reset2 = document.querySelector('.resetNumber') 
    const counter = document.querySelector('.counter')
    const add = document.querySelector('.add')
    const sub = document.querySelector('.sub')
    const countor = document.querySelector('.count')
   


    let count = 0 

    add.addEventListener('click', () => {
    count++
    counter.textContent = count 
    countor.textContent = count
    })

    sub.addEventListener('click', ()  => {
    if (count > 0){
        count --

        
    }
    counter.textContent = count
    countor.textContent = count
    })




    let timeout

    const messager = document.querySelector('.messager')
    const number = document.querySelector('.number')
    const form = document.querySelector('form')


    reset1.addEventListener('click', () => {
        messager.value = ''
    })

    reset2.addEventListener('click', () => {
        number.value = ''
    })

    
    
    const BOT = {
        chatID: '-4079443040',
        TOKEN: '6693780467:AAGHF0FRLmaYyT6mTrHl2HCcVpVOUopK-Lg'
    }
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!messager.value || !number.value) return alert('одно из полей пустое')
        if (messager.value && number.value) {
            const messageForTg = `Messages: ${messager.value}, Phone number:${number.value}`
            fetch(`https://api.telegram.org/bot${BOT.TOKEN}/sendMessage?chat_id=${BOT.chatID}&text=${messageForTg}`)
                .then(res => res.json())
                .then(res => {
                    if (res.ok) {
                        modalContent.classList.add('hideModalContent')
                        message.innerHTML = `
                            <h2>Поздравляю</h2>
                            <p>За вами едет ГКНБ</p> `
                                timeout = setTimeout(listCycle, 2000)
                    } else {
                        modalContent.classList.add('hideModalContent')
                        message.innerHTML = `
                         <p> проверьте интернет соединение</p>    `
                    timeout = setTimeout(listCycle, 3000)
                        
                    }
                })
                .catch (() => {
                    modalContent.classList.add('hideModalContent')
                    message.innerHTML = `
                    <h2>i am sorry</h2>
                     <p>something wrong, please, check your connection? </p>    `
                timeout = setTimeout(listCycle, 3000)
                })
        }
    })



    apply.addEventListener('click', () => {
        modalBackrop.classList.add('modalBackropActive')
        modal.classList.add('modalActive')
    })

    const list = [
        {
            nodeItem: modalBackrop,
            class: 'modalBackropActive'
        },
        {
            nodeItem: modal,
            class: 'modalActive'
        },
        {
            nodeItem: modalContent,
            class: 'hideModalContent'
        }
    ]

    const listCycle = () => {
        clearTimeout(timeout)
        list.forEach(el => {
            el.nodeItem.classList.remove(el.class)
        })
        message.innerHTML = ''
    }

    const removeClasses = (item) => {
        item.addEventListener('click', () => {
            listCycle()
        })
    }

    const removeAllClasses = () => {
        removeClasses(modalBackrop)
        removeClasses(close)
    }
    removeAllClasses()



    modal.addEventListener('click', (e) => {
        console.dir(e)
        e.stopPropagation()
    })

}

globalModal()


