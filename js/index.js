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
const cards = document.querySelectorAll('.card')
const hr = document.querySelectorAll('hr')

inputRadio.forEach((item) => {
  item.addEventListener('click',() => {
    if(inputRadio[1].checked){

      divNonation[0].style.display = 'flex';
      divNonation[0].style.top = '0px'; 
      cards[0].style.height = 250+'px';
     
    }else if (!inputRadio[1].checked){
      divNonation[0].style.display = 'none';
      cards[0].style.height = 136+'px';
      

    }
    if(inputRadio[2].checked){
     console.log('Checked')
     divNonation[1].style.display = 'flex';
     divNonation[1].style.top = '0px'; 
     cards[1].style.height = 250+'px';
    
    }else if (!inputRadio[2].checked){
      console.log('No Checked')
      divNonation[1].style.display = 'none';
      cards[1].style.height = 136+'px';
     
    }


  })

})


// Show modal

const buttonModal = document.querySelectorAll('.modal-show')
const modalShow = document.querySelector('.donation-section')

buttonModal.forEach(item => {
  item.addEventListener('click', () => {
    modalShow.style.left = 0+'px'
  })
})

// Close modal

const buttonClose = document.querySelector('.close-modal')

buttonClose.addEventListener('click', () => {
  modalShow.style.left = '-100%'
  console.log('Clickde')
})

const submitButton = document.querySelectorAll('.submit-donation');
const sucessModal = document.querySelector('.background-sucess')
submitButton.forEach(item => {
  item.addEventListener('click', () => {
    sucessModal.style.left = '0px'
    modalShow.style.left = '-200%'
  })
})

const gotIt = document.querySelector('.got-it');

gotIt.addEventListener('click', () => {
  sucessModal.style.left = '-200%';
})