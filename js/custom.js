// ==========
// Nav Scroll
// ==========
const navBar = document.querySelector("nav")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section")

const activeLink = (id) => {
    const target = document.querySelector(`[href='#${id}']`)
    navLinks.forEach((link) => { link.classList.remove("active") })
    target.classList.add("active")
}

window.addEventListener("scroll", () => {
    // Navbar
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navBar.classList.add("nav__scrolled")
    } else {
        navBar.classList.remove("nav__scrolled")
    }

    // nav Links
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id")

        if (top >= offset - 10) {
            activeLink(id)
        }
    })
})
