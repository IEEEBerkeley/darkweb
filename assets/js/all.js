let h = document.querySelector('.hamburger');
h.onclick = () => {
	h.classList.toggle('is-active');
	document.body.toggleAttribute('nav-active');
}
window.onresize = () => {
	if (window.innerWidth > 700) {
		h.classList.remove('is-active');
		document.body.removeAttribute('nav-active');
	}
}

// TODO: Use a CSS or more JS way of doing things
let scrollBtn = document.querySelector('#scroll-btn');
scrollBtn.onclick = () => {
	let hero = document.querySelector('.hero');
	hero.nextElementSibling.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: 'smooth'
	});
}