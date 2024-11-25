const subscribe = document.querySelector('.subscribe')
const ventana = document.querySelector('.ventana')
const cerrarVentana = document.querySelector('.cerrar-ventana')
const email = document.querySelector('.form-control')


subscribe.addEventListener('click',() => {
    ventana.classList.add('mostrar-ventana')
})

cerrarVentana.addEventListener('click',() => {
    ventana.classList.remove('mostrar-ventana')
})