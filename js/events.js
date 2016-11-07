function getIt() {
  $('p').on("click", function(){
      alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').attr("class","tasty");
  });
}

function submitIt() {

}


function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
 });
}


function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}




$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
