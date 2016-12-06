//define functions here\
function getIt(){
  $("p").on('click', alertHey)
}

function alertHey(){
  alert("Hey!");
}

function frameIt(){
  $("img").on('load', function(){
    $(this).addClass("tasty");
  })
}

function pressIt(){
  $("input#typing").on('keydown', function(key) {
    if(key.which == 71){
      alert();
  }
  });
}

function submitIt(){
  $("form").on("submit", function() {

  alert("Your form is going to be submitted now.");

  });
}

$(document).ready(function(){
 frameIt();
 pressIt();
// call functions here

});
