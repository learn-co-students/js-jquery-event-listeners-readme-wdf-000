//define functions here
function getIt(){
  $('p').on("click",function(){
      alert("clicked");
  })
}

function frameIt(){
  $('img').on('load', function(){
     $('img').attr('class','tasty');
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

// $('div#image').
// prepend('<img id="theImg" src="https://s3.amazonaws.com/learn-verified/painting-with-dog.gif" />')
