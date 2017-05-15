//define functions here
function getIt() {
 $('p').on('click', function() {
   alert("hey!");
 })
}
  
function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    })
  }

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which == 71) {
      alert('g was pressed');
    }
  })
}

$(document).ready(function(){

  getIt()

});
