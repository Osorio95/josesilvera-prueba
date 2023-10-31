const header = document.querySelector('header');
const topBar = document.querySelector('#topBar');
const topBarTexts = document.querySelectorAll('#topBar a');
const offersContainer = document.querySelector('#offersContainer');
const benefitsContainer = document.querySelector('#benefitsContainer');
const teamMembersContainer = document.querySelector('#teamMembersContainer');

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

const teamMembers = [
	{ name: "Jhon Smith", title: "Math Teacher", profilePic: "/imagenes/IMAGE TEAM 1.jpg" },
	{ name: "Dave Morgan", title: "Math Teacher", profilePic: "/imagenes/IMAGE TEAM 2.jpg" },
	{ name: "Zara Smith", title: "Biology Teacher", profilePic: "/imagenes/IMAGE TEAM 4.jpg" },
	{ name: "Jimena Soto", title: "Math Teacher", profilePic: "/imagenes/IMAGE TEAM 3.jpg" },
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

// Iterates the array to place containers inside the parent
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

// Iterates the array to place containers inside the parent
benefits.forEach(benefit => {
	const div = document.createElement("div")
	const icon = document.createElement("img")
	const iconContainer = document.createElement("div")
	const p = document.createElement("p")

	icon.src = benefit.icon
	p.textContent = benefit.title
	p.classList.add('h6', 'text-white', 'text-center', 'mt-3', 'w-75')
	div.classList.add('benefit-container')
	iconContainer.classList.add('icon-container')

	iconContainer.appendChild(icon)
	div.appendChild(iconContainer)
	div.appendChild(p)

	benefitsContainer.appendChild(div)
})

teamMembers.forEach(teamMember => {
	const div = document.createElement("div")
	const banner = document.createElement("div")
	const profileIcon = document.createElement("img")
	const h6 = document.createElement("h6")
	const p = document.createElement("h6")
	const button = document.createElement("button")

	div.classList.add('team-container')
	banner.classList.add('team-banner')
	profileIcon.classList.add('team-pic')
	h6.classList.add('h4', 'text-center', 'font-weight-bold', 'mt-4')
	p.classList.add('h6', 'text-center', 'text-warning')
	button.classList.add('btn', 'btn-warning', 'bg-white', 'rounded-pill', 'my-4')

	profileIcon.src = teamMember.profilePic
	h6.textContent = teamMember.name
	p.textContent = teamMember.title
	button.textContent = 'Read more'

	div.appendChild(banner)
	div.appendChild(profileIcon)
	div.appendChild(h6)
	div.appendChild(p)
	div.appendChild(button)
	teamMembersContainer.appendChild(div)
})

const thumbnails = document.querySelectorAll(".thumbnail")
const mySlides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

const carousel = () => {
	let i;

	for (i = 0; i < mySlides.length; i++) {
		mySlides[i].style.display = "none";
	}

	slideIndex++;

	if (slideIndex > mySlides.length) {
		slideIndex = 1
	}

	for (n = 0; n < dots.length; n++) {
		dots[n].classList.remove("active");
	}

	mySlides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add('active')

	setTimeout(carousel, 5000); // Change video every 5 seconds
}

thumbnails.forEach(test => {
	test.addEventListener('click', (e) => {
		const target = e.target.parentElement.children[0]
		target.classList.remove('hidden')
		target.classList.add('show')
		target.play()
	})
})

carousel();