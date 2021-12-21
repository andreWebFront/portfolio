let sign = document.querySelector('.sign');
let signForm = document.querySelector('.sign-form');

function showProfCard() {
	if (signForm.style.display == 'none'){
		signForm.style.display = 'block';
	} else {
		signForm.style.display = 'none';
	}
}

function wrapSignShow(state){
	document.querySelector('.sign-up__wrap').style.display = state;			
	document.querySelector('.sign-form').style.display = state; 			
}

//--------------FILTER-BLOCKS---------------\\
function filterSelection(a) {
	let i, x;
	x = document.getElementByClassName("shop-block");
	if( a == "all") a = "";
	for ( i = 0; i < x.length; i++){
		removeClass(x[i], "show");
		if (x[i].className.indexOf(a) > -1) addClass(x[i], "show");
	}
}
function addClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 =name.split(" ");
	for(i = 0; i<arr2.length;i++){
		if(arr1.indexOf(arr2[i]) == -1){
			element.className += " " + arr2[i];
		}
	}
}
function removeClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0;i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1){
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
}