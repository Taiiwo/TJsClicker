var counter = 0;
var pickaxes = 0;
var codeallthetime = setInterval(everysecond(),1000);// Run code every second

function addone() {
    counter = counter + 5;
    update();
    if (counter >= 10 && counter <= 24) {
        $("p").html("Just 10? lel fag");
    }
    if (counter >= 25 && counter <= 49) {
        $("p").html("You don't scare me");
    }
    if (counter >= 50) {
        $("p").html("Seriously you can't do shit with just 50 satoshi");
        document.getElementById("button").disabled = false;
}
function update(){// Update the stats on the page
    $("h2").html(pickaxes);
    $("h1").html(counter);
}

function pickaxe() {
    if (counter >= 50) {// If they have enough
        pickaxes = pickaxes +1;// Give them a pickaxe
        counter = counter - 50;// Charge them for it
        update();
    }
}
function everysecond() {
    counter = counter + (1 * pickaxes);
    update();
}

