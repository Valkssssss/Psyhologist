//onscroll animation
const titles = document.querySelectorAll('#title')
const aboutText = document.querySelectorAll('.about__text')
const methodsSection = document.querySelector('.methods').children
const specializationSection = document.querySelector('.specialization')
const specializationMainInfo = document.querySelector('.specialization__main-info').children
const specializationProblems = document.querySelector('.specialization__problems-list').children
const specializationContainer = specializationSection.querySelector('.container').children
const consultationSteps = document.querySelector('.consultation__steps').children
const missionTitle = document.querySelector('.mission__title').children
const educationList = document.querySelector('.education__list').children
const feedbackItems = document.querySelectorAll('.item')
const footerText = document.querySelector('.footer__text')
const footerLink = document.querySelectorAll('.footer__link')

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting)
		if(entry.isIntersecting) {
			observer.unobserve(entry.target)
		}
	})
}, {
	threshold: 0.4,
})

titles.forEach(title => {
	observer.observe(title)
})
aboutText.forEach(text => {
	observer.observe(text)
})
for(let child of methodsSection) {
	observer.observe(child)
}
for (let child of specializationMainInfo) {
	observer.observe(child)
}
for (let child of specializationProblems) {
	observer.observe(child)
}
for (let child of specializationContainer) {
	observer.observe(child)
}
for (let child of consultationSteps) {
	observer.observe(child)
}
for (let child of missionTitle) {
	observer.observe(child)
}
for (let child of educationList) {
	observer.observe(child)
}
feedbackItems.forEach(item => {
	observer.observe(item)
})
observer.observe(footerText)
footerLink.forEach(link => {
	observer.observe(link)
})

//button animation
const footer = document.querySelector('footer')
const button = document.querySelector('.main__btn')
button.addEventListener('mousemove', (event) => {
	let x = event.offsetX
	let y = event.offsetY
	const element = event.target
	element.style.setProperty('--x', `${x}px`)
	element.style.setProperty('--y', `${y}px`)
	element.classList.toggle('clicked')
	setTimeout(() => {
		if (element.classList.contains('clicked')) {
			element.classList.remove('clicked')
		}
	}, 1000)
})
button.addEventListener('click', () => {
	footer.scrollIntoView({behavior: 'smooth'})
})