let input = document.getElementById('bt-menu')
let menu = document.querySelector('.menu')
let menuBackground = document.querySelector('.background-menu-mobile');
input.addEventListener('click', function(){
  if(input.checked){
    menu.style.left = '12.5%';
    menuBackground.style.left = '0px';
    
  }else {
    
    menu.style.left = '-102.5%'
    menuBackground.style.left = '-102.5%';
    
  }
})

