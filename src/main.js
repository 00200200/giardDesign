document.addEventListener('DOMContentLoaded', () => {
	// HAMBURGER MENU
	const megaMenuButton = document.querySelector("[data-collapse-toggle='mega-menu-full']");
	const megaMenu = document.getElementById('mega-menu-full');

	//MENU SEARCH BAR
	const searchIcon = document.querySelector('#search-button');
	const searchForm = document.querySelector('#search-container');

	const offerButton = document.querySelector('#mega-menu-full-dropdown-button');
	const offerMenu = document.querySelector('#mega-menu-full-dropdown');

	// HAMBURGER MENU TOGGLE LISTENER
	megaMenuButton.addEventListener('click', function () {
		megaMenu.classList.toggle('hidden');
	});

	// SEARCH BAR TOGGLE LISTENER
	searchIcon.addEventListener('click', function () {
		searchForm.classList.toggle('hidden');
		searchForm.classList.toggle('animate-slide-in');
	});

	offerButton.addEventListener('click', () => {
		offerMenu.classList.toggle('hidden');
		offerMenu.classList.toggle('animate-slide-in');
	});

	//simple slider
	const images = ['../assets/Photo.png', '../assets/Photo2.png', '../assets/Photo3.png'];
	let currentImageIndex = 0;

	const prevButton = document.getElementById('prevButton');
	const nextButton = document.getElementById('nextButton');
	const imageElement = document.querySelector('.object-cover'); // Zmieniony selektor

	prevButton.addEventListener('click', () => {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
		imageElement.src = images[currentImageIndex];
	});

	nextButton.addEventListener('click', () => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
		imageElement.src = images[currentImageIndex];
	});
});
