const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


/* leer más section */

let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
	hideText.classList.toggle('show');

	if(hideText.classList.contains('show')){
		hideText_btn.value = 'Leer menos.';
	}
	else{
		hideText_btn.value = 'Leer más...';
	}
}



let hideText_btn1 = document.getElementById("hideText_btn1");

let hideText1 = document.getElementById("hideText1");

hideText_btn1.addEventListener('click', toggleText1);

function toggleText1(){
	hideText1.classList.toggle('show');

	if(hideText1.classList.contains('show')){
		hideText_btn1.value = 'Leer menos.';
	}
	else{
		hideText_btn1.value = 'Leer más...';
	}
}


let hideText_btn2 = document.getElementById("hideText_btn2");

let hideText2 = document.getElementById("hideText2");

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2(){
	hideText2.classList.toggle('show');

	if(hideText2.classList.contains('show')){
		hideText_btn2.value = 'Leer menos.';
	}
	else{
		hideText_btn2.value = 'Leer más...';
	}
}



let hideText_btn3 = document.getElementById("hideText_btn3");

let hideText3 = document.getElementById("hideText3");

hideText_btn3.addEventListener('click', toggleText3);

function toggleText3(){
	hideText3.classList.toggle('show');

	if(hideText3.classList.contains('show')){
		hideText_btn3.value = 'Leer menos.';
	}
	else{
		hideText_btn3.value = 'Leer más...';
	}
}



let hideText_btn4 = document.getElementById("hideText_btn4");

let hideText4 = document.getElementById("hideText4");

hideText_btn4.addEventListener('click', toggleText4);

function toggleText4(){
	hideText4.classList.toggle('show');

	if(hideText4.classList.contains('show')){
		hideText_btn4.value = 'Leer menos.';
	}
	else{
		hideText_btn4.value = 'Leer más...';
	}
}


let hideText_btn5 = document.getElementById("hideText_btn5");

let hideText5 = document.getElementById("hideText5");

hideText_btn5.addEventListener('click', toggleText5);

function toggleText5(){
	hideText5.classList.toggle('show');

	if(hideText5.classList.contains('show')){
		hideText_btn5.value = 'Leer menos.';
	}
	else{
		hideText_btn5.value = 'Leer más...';
	}
}



let hideText_btn6 = document.getElementById("hideText_btn6");

let hideText6 = document.getElementById("hideText6");

hideText_btn6.addEventListener('click', toggleText6);

function toggleText6(){
	hideText6.classList.toggle('show');

	if(hideText6.classList.contains('show')){
		hideText_btn6.value = 'Leer menos.';
	}
	else{
		hideText_btn6.value = 'Leer más...';
	}
}

let hideText_btn7 = document.getElementById("hideText_btn7");

let hideText7 = document.getElementById("hideText7");

hideText_btn7.addEventListener('click', toggleText7);

function toggleText7(){
	hideText7.classList.toggle('show');

	if(hideText7.classList.contains('show')){
		hideText_btn7.value = 'Leer menos.';
	}
	else{
		hideText_btn7.value = 'Leer más...';
	}
}
  /* End leer más section */