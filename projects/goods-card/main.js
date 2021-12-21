let color = document.getElementsByClassName('color');
function change_it(){
	color[0].style.borderBottom = '2px solid red';
}

function sleeveValue(){
	let input = document.getElementById('input-range');
	let rangeValue = document.getElementsByClassName('range-value');

	rangeValue.innerHTML = input.value;
	console.log(rangeValue)
}

function chestValue(){
	let input_2 = document.getElementById('input-range2')
	let rangeValue_2 = document.getElementsByClassName('range-value2');
console.log(rangeValue_2);
	rangeValue_2.innerHTML = input_2.value;
}