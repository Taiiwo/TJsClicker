var counter = 0;
var pickaxes = 0;

function addone() {
    counter = counter + 5;
    $("h1").html(counter);

    if (counter == 10) {
   $("p").html("Just 10? lel fag");
    }
     if (counter == 25) {
   $("p").html("You don't scare me");
    }
     if (counter == 50) {
   $("p").html("Seriously you can't do shit with just 50 satoshi");
    }
    if (counter >= 50 ){
        document.getElementById("button").disabled = false;
    }
}

function upgrade() {
    $("h1").html(counter - 50);
    $("h1").html(counter + 100);
}

  function pickaxe() {
      pickaxes = pickaxes +1;
       $("h2").html(pickaxes);
       $("h1").html(counter - 50);
       var pickaxeTimer = setInterval(function() {
          $('h1').html(counter+= 1);
          if (pickaxes == 0 ) {
              clearInterval(pickaxeTimer);
          }
      },1000);
   }

