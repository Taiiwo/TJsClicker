var counter = 0;
var pickaxes = 0;
var pickaxeprice = 50;
var codeallthetime = setInterval(function(){everysecond();}, 1000); // Run code every second

function addone() {
    counter = (counter + 5);
    update();
    if (counter >= 10 && counter <= 24); {
        $("#message").html("Just 10? lel fag");
    }
    if (counter >= 25 && counter <= 49) {
        $("#message").html("You don't scare me");
    }
    if (counter >= 50) {
        $("#message").html("Seriously you can't do shit with just 50 satoshi");
    }
}
function update() { // Update the stats on the page
    $("h2").html(pickaxes);
    $("h1").html(counter);
    $("#price").html('$' + pickaxeprice);
}

function pickaxe() {
    if (counter >= pickaxeprice) { // If they have enough
        pickaxes = pickaxes + 1; // Give them a pickaxe
        counter = counter - pickaxeprice; // Charge them for it
        pickaxeprice = Math.round((pickaxeprice * 1.5)*100)/100;// Increase and round the price
        update();
    }
}

function everysecond() {
    counter = counter + (1 * pickaxes);
    update();
}
