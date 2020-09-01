
function getItems() {

	var checks = document.getElementsByClassName('checks');
	var str = '';
	
	for (i =0; i<17; i++){
		if(checks[i].checked === true) {
			str += checks[i].name + " ";
		}
	}
	alert(str);
}