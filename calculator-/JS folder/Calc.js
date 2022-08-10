function clearing(){
	document.getElementById("txt").value =" ";
}

function in_Num(num){
		document.getElementById("txt").value += num;
}

function in_op(operator){
		document.getElementById("txt").value += operator;
}

function equal(){
	let l = document.getElementById("txt").value;
	let m = eval(l);
	document.getElementById("txt").value = m;
}