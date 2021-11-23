import "./index.css"

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelector('#links')
  const linksToggle = document.querySelector('#links-toggle')

  linksToggle.addEventListener('click', () => {
    links.classList.toggle('h-0')
    console.log('lol')
  })
})
