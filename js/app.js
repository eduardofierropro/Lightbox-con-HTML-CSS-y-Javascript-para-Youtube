'use strict'

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img

    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'
*/

const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})