//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    // using == instead of === because js will force type conversion when using ==
    if (key.which == 71) {
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){

  // call functions here
  getIt();
  frameIt();
  submitIt();
  pressIt();

});
