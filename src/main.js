document.addEventListener('DOMContentLoaded', () => {
	// HAMBURGER MENU
	const megaMenuButton = document.querySelector("[data-collapse-toggle='mega-menu-full']");
	const megaMenu = document.getElementById('mega-menu-full');

	//MENU SEARCH BAR
	const searchIcon = document.querySelector('#search-button');
	const searchInput = document.getElementById('search-bar-container');

	const offerButton = document.querySelector('#mega-menu-full-dropdown-button');
	const offerMenu = document.querySelector('#mega-menu-full-dropdown');

	// HAMBURGER MENU TOGGLE LISTENER
	megaMenuButton.addEventListener('click', function () {
		megaMenu.classList.toggle('hidden');
	});

	// SEARCH BAR TOGGLE LISTENER
	searchIcon.addEventListener('click', function () {
		searchInput.classList.toggle('hidden');
	});

	offerButton.addEventListener('click', () => {
		offerMenu.classList.toggle('hidden');
	});
});
