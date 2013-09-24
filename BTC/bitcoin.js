var counter = 0;
var pickaxes = 0;
var pickaxeprice = 2;
var drills = 0;
var drillprice = 20;
var cursors=1;
var cursorprice=5;
var codeallthetime = setInterval(function(){everysecond();}, 10); // Run code every second

function addone() {
    counter = (counter + (cursors/10));
    update();
    if (counter >= 10 && counter <= 24); {
        $("#message").html("Just 10? lel fag");
    }
    if (counter >= 25 && counter <= 49) {
        $("#message").html("You don't scare me");
    }
    if (counter >= 50) {
        $("#message").html("Seriously, you can't do shit with just 50 satoshi");
    }
}
function update() { // Update the stats on the page
    $("#pickstat").html(pickaxes);
    $("#drillstat").html(drills);
	$("#cursorstat").html(cursors);
    $("h1").html(Math.round(counter * 100)/100);
    $("#price").html('$' + pickaxeprice);
    $("#drill").html('$' + drillprice);
	$("#cursor").html('$' + cursorprice);
}

function pickaxe() {
    if (counter >= pickaxeprice) { // If they have enough
        pickaxes = pickaxes + 1; // Give them a pickaxe
        counter = counter - pickaxeprice; // Charge them for it
        pickaxeprice = Math.round((pickaxeprice * 1.5)*100)/100;// Increase and round the price
        update();
    }
}
function drill() {
    if (counter >= drillprice) { // If they have enough
        drills = drills + 1; // Give them a drill
        counter = counter - drillprice; // Charge them for it
        drillprice = Math.round((drillprice * 2)*100)/100;// Increase and round the price
        update();
    }
}
function cursor() {
    if (counter >= cursorprice) { // If they have enough
        cursors++; // Give them a cursor
        counter = counter - cursorprice; // Charge them for it
        cursorprice = Math.round((cursorprice * 2)*100)/100;// Increase and round the price
        update();
    }
}
function everysecond() {
    counter = counter + (0.001 * pickaxes) + (0.005 * drills);
    update();
}
