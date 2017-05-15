//define functions here
function getIt(){
  $('p').on('click', ()=>{
    alert('hey!');
  })
}

function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', ()=>{
    alert("Your form is going to be submitted now.");
  })
}

function pressIt() {
  $('#typing').on('keydown', (e)=>{
    if (e.which === 71) {
      alert("You pressed 'g'!");
    }
  })
}

$(document).ready(function(){

// call functions here

});
