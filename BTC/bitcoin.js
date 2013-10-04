var counter = 0;
var codeallthetime = setInterval(function(){everysecond();}, 10); // Run code every 10 milisecods
var items = [
		{
			'name':'Pickaxe',
			'price':5,
			'curPrice':5,
			'durabilityOrigin':200,
			'quantity':0,
			'durabilityCurrent':0,
			'decay':0.01,
			'power':0.0005
		},
		{
			'name':'Drill',
			'price':20,
			'curPrice':20,
			'durabilityOrigin':75,
			'quantity':0,
			'durabilityCurrent':0,
			'decay':0.01,
			'power':0.001
		},

		{
			'name':'Cursor',
			'price':10,
			'curPrice':10,
			'durabilityOrigin':500,
			'quantity':1,
			'durabilityCurrent':500,
			'decay':0.01,
			'power':0
		}
		
];

function addone() {
    counter = (counter + (items[2]['quantity']/10));
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
	for (var i = 0; i < items.length; i++) {
		$("#" + items[i]['name'] + "stat").html(items[i]['name'] + 's: ' + items[i]['quantity']);
		$("#" + items[i]['name']).html(items[i]['name'] + ': $' + items[i]['curPrice']);
	}
	$("h1").html(counter.toFixed(2));
}
function makeButtons(){
	var button;
	var buttons = "";
	for (var i = 0; i < items.length; i++) {
		button = '<button onclick="buy(' + i + ')" ' + 'id="' + items[i]['name'] + '"></button>\n';
		buttons += button;
	}
	$("#upgrades").html(buttons);
}
function makeStats(){
        var stat;
        var stats = '<p>BTC:</p><h1>' + counter + '</h1>';
        for (var i = 0; i < items.length; i++) {
                stat = '<p class="statname" id="' + items[i]['name'] +'stat">' + items[i]['name'] + 's: ' + items[i]['quantity'] + '</p><br />\n';
                stats += stat;
        }
	console.log(stats);
	$("#stats").html(stats);
}
function initialize() {//A function to run once on page load
	makeStats();
	makeButtons();
}

function buy(id) {
    if (counter >= items[id]['curPrice']) { // If they have enough
        items[id]['quantity']++; // Give them a item
	items[id]['durabilityCurrent'] = items[id]['durabilityCurrent'] + items[id]['durabilityOrigin'];// raise thir durability
        counter = counter - items[id]['curPrice']; // Charge them for it
        items[id]['curPrice'] = Math.pow(items[id]['price'], (1 + (items[id]['quantity']/10))).toFixed(2);// Increase and round the price
	update();
    }
}
function everysecond() {
	for (var i = 0; i < items.length; i++) {
		counter = counter + (items[i]['power'] * items[i]['quantity']);
		items[i]['durabilityCurrent'] = items[i]['durabilityCurrent'] - (items[i]['decay'] * items[i]['quantity']);
		if (items[i]['durabilityCurrent'] <= (items[i]['durabilityOrigin'] * (items[i]['quantity'] - 1)) && items[i]['quantity'] > 0) {
			items[i]['quantity'] = items[i]['quantity'] - 1;
			items[i]['curPrice'] = Math.pow(items[i]['curPrice'],1/1.1).toFixed(2);
		}
	}
	update();
}
$("#mine").keypress(addone());
