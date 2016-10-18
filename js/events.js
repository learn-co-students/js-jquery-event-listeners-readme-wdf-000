//define functions here
function getIt() {
  $('p').on('click', function() {
    alert( $(this).text() );
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img:first').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert();
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  mocha.run();

// call functions here

});
