//----------- boton menu activar-----------
var btnMenu = document.getElementById('btn-menu')
var nav = document.getElementById('nav')

btnMenu.addEventListener('click', function() {
    nav.classList.toggle('show')
})
// ----------- off -----------
nav.addEventListener('click', ()=>{
    nav.classList.remove('show')
})
//--------------------------------------------------
//-------------------------- Selected nav--------------------------
 

//--------------------------------------------------
//-------------------------- Boton  Vamos--------------------------
var btnGo = document.getElementById('btn-go')
var altoBanner = document.getElementById('banner')

btnGo.addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top:  altoBanner.clientHeight,
        behavior: 'smooth'
      });
})
//--------------------------------------------------
//-------------------------- Boton  Inicio (logo)--------------------------
var logo = document.getElementById('logo')

logo.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})