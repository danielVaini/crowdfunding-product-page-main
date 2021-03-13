const input = document.getElementById('bt-menu')
const menu = document.querySelector('.menu')
const menuBackground = document.querySelector('.background-menu-mobile');
const button = document.querySelector('.close-menu')

input.addEventListener('click', function(){
  if(input.checked){
    menu.style.left = '12.5%';
    menuBackground.style.left = '0px';
    
    
  }
})

button.addEventListener('click', () => {
  menu.style.left = '-102.5%';
  menuBackground.style.left = '-100%';
  input.checked = false;
})

const inputRadio = document.querySelectorAll('#option')

inputRadio.forEach(item => {
  item.addEventListener('click',() => {
    console.log(inputRadio)})

})
