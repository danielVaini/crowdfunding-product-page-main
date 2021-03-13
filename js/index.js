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


// modal
const inputRadio = document.querySelectorAll('#option')
const divNonation = document.querySelectorAll('.entrie-donation')
const divBamboo = document.querySelector('.bamboo-stang-card')
const hr = document.querySelectorAll('hr')

inputRadio.forEach((item) => {
  item.addEventListener('click',() => {
    if(inputRadio[1].checked){
      console.log(inputRadio)
      divNonation[0].style.display = 'flex';
      divNonation[0].style.top = '0px'; 
      divBamboo.style.height = 250+'px';
      hr.style.display = 'block'
    }else {
      divNonation[0].style.display = 'none';
      divBamboo.style.height = 136+'px';
      hr.style.display = 'none'

    }


  })

})
