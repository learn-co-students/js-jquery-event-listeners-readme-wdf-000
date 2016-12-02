//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $('#typing').bind('keydown', function(g) {
    var code = g.which
    if (code == 71) {
      alert("");
    }
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  pressIt();
});
