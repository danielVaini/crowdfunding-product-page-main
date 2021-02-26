let input = document.getElementById('bt-menu')
let menu = document.querySelector('.menu')
input.addEventListener('click', function(){
  if(input.checked){
    menu.style.left = '12.5%'
  }else {
    
    menu.style.left = '-102.5%'
  }
})
