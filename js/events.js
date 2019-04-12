//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt(){
  $('p').on("click")
  alert("Hey!")
  return;
}

function frameIt(){
  $('img').on("load").addClass("tasty");
  return;
}

function pressIt(){
  $('#typing').on("keydown", function(key){
    if (key.which == 71) {
      alert('you have pressed g');
      return;
    }
  })
}

function submitIt(){
  $('form').on("submit")
  alert("Your form is going to be submitted now.");
  return;
}
