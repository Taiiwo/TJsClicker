var counter = 0;
var pickaxes = 0;

  function addone() {
    counter = counter + 10;
    $("h1").html(counter);

    if (counter == 10) {
   $("p").html("Just 10? lel fag");
    }
     if (counter == 25) {
   $("p").html("You don't scare me");
    }
     if (counter == 50) {
   $("p").html("This game shall not insult the player anymore");
    }
      if (counter == 100) {
   $("p").html("wow 100 wow");
    }
      if (counter == 1000) {
   $("p").html("You faggot");
    }
      if (counter >= 50 ){
    document.getElementById("pickaxe").disabled = false;
    }
}


  
  function pickaxe() {
    pickaxes = pickaxes + 1;
      $("h2").html(pickaxes);
      $("h1").html(counter = counter - 50);
        pickaxeAdd();
} 

  function pickaxeAdd() {
    var pickaxeTimer = setInterval(function() {
      $('h1').html(counter += pickaxes * 0.1);
        if (pickaxes === 0 ) {
            clearInterval(pickaxeTimer);
          }
      },1000);
   }
