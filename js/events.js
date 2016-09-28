//define functions here
function getIt(){
  $('p').on('click', function(e) { alert("Hey!") })
}

function frameIt(){
  $('img').on('load', function(e) { $('img').addClass("tasty")})
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71){ alert('you presses g eh!');}
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
