const burger = document.querySelector('#burger') 
const menu = document.querySelector('#menu') 

burger.addEventListener('click' , () => {
    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
})