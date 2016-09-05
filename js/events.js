//define functions here

function getIt() {
  // $('p').on("click",function(){
  //   alert("Hey!");
  //   return;
  // });
  $('p').click(function () {
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $('img').load(function (e) {
    $('img').addClass("tasty");
  });
  return;
}

function pressIt() {
  $(document).keydown(function (e) {
    if (e.which == 71) {
      alert('g was pressed');
    }
  });
  return;
}

function submitIt() {
  $('form').submit(function (e) {
    alert("Your form is going to be submitted now.");
  });
  return;
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
