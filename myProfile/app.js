//Typing function

let msg = [
	'A first Year College Student',
	'A Web Developer',
	'A Self-taught Developer',
	'Aspiring Full Stack-Developer',
];
let count = 0;
let letter = '';
let currentMsg;
let index = 0;
let deleteInterval;

(function type() {
	if (count === msg.length) {
		count = 0;
	}

	currentMsg = msg[count];
	letter = currentMsg.slice(0, ++index);

	document.querySelector('.typing').textContent = letter;

	if (letter.length === currentMsg.length) {
		index = 0;
		count++;
	}

	setTimeout(type, 300);
})();

let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
	link.addEventListener('click', function () {
		this.classList.add('active');

		setTimeout(() => this.classList.remove('active'), 1000);
	});
});

const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('#header .navigation');

toggler.addEventListener('click', function () {
	toggler.classList.toggle('active');
	navigation.classList.toggle('active');
});
