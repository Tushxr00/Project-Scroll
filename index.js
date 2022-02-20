const date = document.getElementById(`date`)
date.innerHTML = new Date().getFullYear()


const navToggle = document.querySelector(`.nav-toggle`)
const linkContainer = document.querySelector(`.link-container`)
const links = document.querySelector(`.links`)

// console.log(navToggle)
// console.log(linkContainer)
// console.log(links)
navToggle.addEventListener(`click`, function() {
    // linkContainer.classList.toggle(`show-links`)
    const containerHeight = linkContainer.getBoundingClientRect().height
        // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
    } else {
        linkContainer.style.height = 0
    }

})


const navbar = document.getElementById(`nav`)
const homeBtn = document.querySelector(`.home-btn`)
window.addEventListener(`scroll`, function() {
    const scrollHeight = (window.pageYOffset)
    const navHeight = navbar.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
        navbar.classList.add(`fixed-nav`)
    } else {
        navbar.classList.remove(`fixed-nav`)
    }

    if (scrollHeight > 500) {
        homeBtn.classList.add(`show-link`)
    } else {
        homeBtn.classList.remove(`show-link`)
    }
})

const scroll1 = document.querySelectorAll(`.scroll`)

scroll1.forEach(function(link) {
    link.addEventListener(`click`, function(e) {
        // prevent default 
        e.preventDefault()
            // navigate
        const id = e.currentTarget.getAttribute(`href`).slice(1)
        const element = document.getElementById(id)
            // calculate the height
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linkContainer.getBoundingClientRect().height
        const fixednav = navbar.classList.contains(`fixed-nav`)
        let position = element.offsetTop - navHeight
        if (!fixednav) {
            position = position - navHeight
        }
        if (navHeight > 150) {
            position += containerHeight
        }
        // console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        })
        linkContainer.style.height = 0
    })
})