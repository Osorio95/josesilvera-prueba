const header = document.querySelector('header');
const topBar = document.querySelector('#topBar');
const topBarTexts = document.querySelectorAll('#topBar a');
const offersContainer = document.querySelector('#offersContainer');
const benefitsContainer = document.querySelector('#benefitsContainer');

const offers = [
	{ title: "Design for the web with Adobe photoshop", thumbnail: '/imagenes/IMAGE CURSO 1.jpg', isNew: true },
	{ title: "Design for the web with Adobe photoshop", thumbnail: '/imagenes/IMAGE CURSO 2.jpg', isNew: false },
	{ title: "Design for the web with Adobe photoshop", thumbnail: '/imagenes/IMAGE CURSO 3.jpg', isNew: false },
	{ title: "Design for the web with Adobe photoshop", thumbnail: '/imagenes/IMAGE CURSO 4.jpg', isNew: false },
]

const benefits = [
	{ title: "Excellent Content", icon: "/imagenes/ICONO 1.png" },
	{ title: "Expert Instructors", icon: "/imagenes/ICONO 2.png" },
	{ title: "The Best Professionals", icon: "/imagenes/ICONO 3.png" },
	{ title: "Countless Courses", icon: "/imagenes/ICONO 4.png" },
]

// Scroll listener to update header style
document.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 0) {
		header.classList.remove('bg-transparent')
		header.classList.add('bg-primary')

		topBar.classList.remove('bg-primary')
		topBar.classList.add('bg-white')

		topBarTexts.forEach(text => {
			text.classList.remove('text-white')
			text.classList.add('text-primary')
		})
	} else {
		header.classList.remove('bg-primary')
		header.classList.add('bg-transparent')

		topBar.classList.remove('bg-white')
		topBar.classList.add('bg-primary')

		topBarTexts.forEach(text => {
			text.classList.remove('text-primary')
			text.classList.add('text-white')
		})
	}
})

offers.forEach(offer => {
	const div = document.createElement("div");
	const title = document.createElement("h5");
	const thumbnailContainer = document.createElement("div")
	const thumbnail = document.createElement("img");
	const button = document.createElement("button");

	div.classList.add('offer-container')
	thumbnailContainer.classList.add('position-relative')
	thumbnail.classList.add('offer-thumbnail')
	button.classList.add('btn', 'btn-warning')

	if (offer.isNew) {
		const newTag = document.createElement("p")

		newTag.classList.add('newTag')
		newTag.textContent = 'new'

		thumbnailContainer.appendChild(newTag)
	}

	title.textContent = offer.title;
	thumbnail.src = offer.thumbnail;
	button.textContent = 'Read more'

	thumbnailContainer.appendChild(thumbnail)

	div.appendChild(thumbnailContainer);
	div.appendChild(title);
	div.appendChild(button)

	offersContainer.appendChild(div);
})

benefits.forEach(benefit => {
	const div = document.createElement("div")
	const icon = document.createElement("img")
	const iconContainer = document.createElement("div")
	const p = document.createElement("p")

	icon.src = benefit.icon
	p.textContent = benefit.title
	p.classList.add('h5', 'text-white', 'text-center', 'mt-3', 'w-75')
	div.classList.add('benefit-container')
	iconContainer.classList.add('icon-container')

	iconContainer.appendChild(icon)
	div.appendChild(iconContainer)
	div.appendChild(p)

	benefitsContainer.appendChild(div)
})

