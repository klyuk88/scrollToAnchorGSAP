//scroll to anchor
function scrollToAnchor() {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const anchor = item.getAttribute('href')
      gsap.to(window, {
        duration: 1,
        scrollTo: `${anchor}`,
        ease: 'power2'
      })
    })
  })
}
scrollToAnchor()
