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

	function togglePopup(openButtonSelector, closeButtonSelector, popupSelector) {
		const openButton = document.querySelector(openButtonSelector);
		const closeButton = document.querySelector(closeButtonSelector);
		const popup = document.querySelector(popupSelector);

		openButton.addEventListener('click', e => {
			e.preventDefault();
			popup.classList.remove('hidden');
			popup.classList.add('flex');
		});

		closeButton.addEventListener('click', () => {
			popup.classList.add('hidden');
			popup.classList.remove('flex');
		});
	}
	togglePopup('#card1', '#closePopup1', '#popup1');
	togglePopup('#card2', '#closePopup2', '#popup2');
	togglePopup('#card3', '#closePopup3', '#popup3');

	const masonry = new Macy({
		container: '.damn',
		mobileFirst: true,
		// waitForImages: true,

		columns: 3,
		breakAt: {
			800: {
				margin: {
					x: 10,
					y: 10,
				},
				columns: 2,
			},
			1299: {
				margin: {
					x: 40,
					y: 40,
				},
				columns: 3,
			},
			1000: {
				margin: {
					x: 20,
					y: 20,
				},
				columns: 2,
			},
		},
	});

	const modal = document.getElementById('imageModal');
	const modalImage = document.getElementById('modalImage');

	function openModal(src) {
		modalImage.src = src;
		modal.classList.remove('hidden');
	}

	function closeModal() {
		modal.classList.add('hidden');
	}

	modal.addEventListener('click', closeModal);
	modalImage.addEventListener('click', e => e.stopPropagation());

	let imagesExpanded = false;
	const expandButton = document.querySelector('#expandButton');

	expandButton.addEventListener('click', toggleImages);
	function toggleImages() {
		const shadowContainer = document.querySelector('#shadow-container');
		const hiddenImages = document.querySelectorAll('.hidden-image');
		const imageContainer = document.querySelector('#image-container');
		if (imagesExpanded) {
			expandButton.textContent = expandButton.textContent.replace('Zwiń', 'Rozwiń');
			hiddenImages.forEach(image => {
				image.classList.add('md:hidden');
				image.classList.add('lg:hidden');
			});
			shadowContainer.classList.add('bg-gradient-to-t');
			imageContainer.classList.remove('z-50');
			const masonry = new Macy({
				container: '.damn',
				mobileFirst: true,
				// waitForImages: true,

				columns: 3,
				breakAt: {
					800: {
						margin: {
							x: 10,
							y: 10,
						},
						columns: 2,
					},
					1299: {
						margin: {
							x: 40,
							y: 40,
						},
						columns: 3,
					},
					1000: {
						margin: {
							x: 20,
							y: 20,
						},
						columns: 2,
					},
				},
			});
		} else {
			expandButton.textContent = expandButton.textContent.replace('Rozwiń', 'Zwiń');
			shadowContainer.classList.remove('bg-gradient-to-t');

			hiddenImages.forEach(image => {
				image.classList.remove('md:hidden');
				image.classList.remove('lg:hidden');
			});
			imageContainer.classList.add('z-50');
			const masonry = new Macy({
				container: '.damn',
				mobileFirst: true,
				// waitForImages: true,

				columns: 3,
				breakAt: {
					800: {
						margin: {
							x: 10,
							y: 10,
						},
						columns: 2,
					},
					1299: {
						margin: {
							x: 40,
							y: 40,
						},
						columns: 3,
					},
					1000: {
						margin: {
							x: 20,
							y: 20,
						},
						columns: 2,
					},
				},
			});
		}
		imagesExpanded = !imagesExpanded;
	}
});
