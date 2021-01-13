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
if (scrollBtn) {
	scrollBtn.onclick = () => {
		let hero = document.querySelector('.hero');
		let eTop = hero.nextElementSibling.offsetTop;
		let headerHeight = document.querySelector('header').offsetHeight;
		window.scroll({
			top: eTop - headerHeight - 10,
			behavior: 'smooth'
		});
	}
}

window.onscroll = () => {
	const header = document.querySelector('header');
	let offsetTop = document.documentElement.scrollTop;
	let headerHeight = header.offsetHeight;
	if (offsetTop > headerHeight) {
		header.setAttribute('scroll', '');
	} else {
		header.removeAttribute('scroll');
	}
}