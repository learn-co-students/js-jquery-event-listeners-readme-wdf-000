function getIt() {
  $('p').click(function () {
    alert("Click!");
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
    if ((e.which || e.detail) == 71) {
      alert('g was pressed!');
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
	getIt();
	frameIt();
	pressIt();
	submitIt();
});