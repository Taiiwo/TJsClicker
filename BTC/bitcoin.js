var counter=0;
var pickaxes=0;
function addone() {
    counter = counter + 5;
    $("h1").html(counter);
    if (counter >= 50 ){
        document.getElementById("button").disabled = false;
    }
}
/*
function upgrade() {
    $("h1").html(counter - 50);
}

  function pickaxe() {
      pickaxes = pickaxes +1;
       $("h2").html(pickaxes);
       $("h1").html(counter - 50);
function timer() {
        $('h1').html(counter+= 1);
        if (pickaxes == 0 ) {
        	clearInterval(pickaxeTimer)
        }
	}

var pickaxeTimer = setInterval(timer(),1000);
*/
var pickaxes = 0;
function pickaxe() {
	pickaxes = pickaxes + 1;
	$("h2").html(pickaxes);
	counter = counter - 50;

