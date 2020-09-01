var ItemName = new Array("Asparagus","Baked Potato","Broccoli","Carrots","Chicken Fingers","Cordon Bleu","French Fries","Green Beans","Hamburger","Lasagna","Coke","Water","Sprite");
var ItemDescription = new Array("Fresh asparagus steamed with lemon and butter.",
"Loaded Potato with everything!!",
"Steamed Broccoli.",
"Fresh cooked Carrots in a lemon glaze.",
"Country Fried Chicken Fingers.",
"Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.",
"French Fried Potato snacks.",
"Fresh Green Beans cooked with a special sauce.",
"Home Cooked Hamburger: anyway you like it!!",
"Old Italian recipe: Lasagna cooked by our famous chef.",
"Garden Peas cooked to perfection.",
"Tossed Green Salad with garden fresh tomatos and our famous house dressing.              ",
"Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.     ");
var ItemPrice = new Array(2.99,2.99,2.99,2.99,5.99,9.99,1.99,2.99,5.99,9.99,2.99,0.99,2.99);
var ItemPic = new Array("Asparagus.gif","BakedPotatoe.gif","Broccoli.gif","Carrots.gif","ChickenFingers.gif","CordonBleu.gif","FrenchFries.gif","GreenBeans.gif","Hamburger.gif","Lasagna.gif","coke.png","water.png","sprite.png");



function getItems(){
	var x = document.getElementById("body");
	if(x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display ="none";
	}
	
	
	
	var c = document.getElementById("plate");
	if(c.style.display === "block"){
		c.style.display = "none";
	} else {
		c.style.display ="block";
	}
	
	
	var tip=0;
	var subtotal=0;
	var totaltax =0;
	var total =0;
	var tax = 0;
	var checks = document.getElementsByClassName('checks');
	var str = '';
	for (i =0; i<checks.length; i++){
		if(checks[i].checked === true) {
			str += checks[i].name + " " +ItemPrice[i] + "<br>";
			subtotal += ItemPrice[i];
		}
		subtotal = Math.round(subtotal*100)/100;
		tax = ((subtotal*.07)*100)/100;
		totaltax= Math.round(tax*100)/100;
		tip = Math.round((subtotal*.15)*100)/100;
		total = Math.round(((subtotal)+(totaltax)+(tip))*100)/100;
	}
	document.getElementById('bill').innerHTML = str;
	document.getElementById('billprice').innerHTML = "Subtotal" + " " + "=" + " " + subtotal + "<br>";
	document.getElementById('tax').innerHTML = "Tax" + " " + "=" + " " + totaltax + "<br>" + "Tip" + " " + "=" + " " + tip + "<br>" + "Total" + " " + "=" + " " + total;

	
	
	
	
	var prices = [];
	for(i=0;i<checks.length;i++){
			if(checks[0].checked === true){
				a.style.display = "block";
				prices[0] = ItemPrice[0] +"<br>";
				
			}
			if(checks[1].checked === true){
				b.style.display = "block";
				prices[1] = ItemPrice[1] + "<br>";
			}
			if(checks[2].checked === true){
				d.style.display = "block";
				prices[2] = ItemPrice[2]+"<br>";

			}
			if(checks[3].checked === true){
				e.style.display = "block";
				prices[3] = ItemPrice[3]+"<br>";

			}
			if(checks[4].checked === true){
				f.style.display = "block";
				prices[4] = ItemPrice[4];
			}
			if(checks[5].checked === true){
				g.style.display = "block";
				prices[5] = ItemPrice[5];
			}
			if(checks[6].checked === true){
				h.style.display = "block";
				prices[6] = ItemPrice[6];
			}
			if(checks[7].checked === true){
				j.style.display = "block";
				prices[7] = ItemPrice[7];
			}
			if(checks[8].checked === true){
				k.style.display = "block";
				prices[8] = ItemPrice[8];
				
			}
			if(checks[9].checked === true){
				l.style.display = "block";
				prices[9] = ItemPrice[9];
				
			}
			if(checks[10].checked === true){
				m.style.display = "block";
				//prices[9] = ItemPrice[9];
				
			}
			if(checks[11].checked === true){
				n.style.display = "block";
				//prices[9] = ItemPrice[9];
				
			}
			if(checks[12].checked === true){
				o.style.display = "block";
				//prices[9] = ItemPrice[9];
				
			}


	}


}
function byeOne(){
	var picie1 = document.getElementById('asparagus');
	picie1.style.display = "none";
}
function byeTwo(){
	var picie2 = document.getElementById('bakedpotato');
	picie2.style.display = "none";
}
function byeThree(){
	var picie3 = document.getElementById('broccoli');
	picie3.style.display = "none";
}
function byeFour(){
	var picie4 = document.getElementById('carrots');
	picie4.style.display = "none";
}
function byeFive(){
	var picie5 = document.getElementById('chickenfingers');
	picie5.style.display = "none";
}
function byeSix(){
	var picie6 = document.getElementById('cordonbleu');
	picie6.style.display = "none";
}
function byeSeven(){
	var picie7 = document.getElementById('frenchfries');
	picie7.style.display = "none";
}
function byeEight(){
	var picie8 = document.getElementById('greenbeans');
	picie8.style.display = "none";
}
function byeNine(){
	var picie9 = document.getElementById('hamburger');
	picie9.style.display = "none";
}
function byeTen(){
	var picie10 = document.getElementById('lasagna');
	picie10.style.display = "none";
}



function selectAll(){
	var checks = document.getElementsByClassName('checks');
	for (i =0; i<checks.length; i++){
		checks[i].checked = true;
	}
	
}



