import "./index.css"
import wedding2 from "./images/wedding2.jpg"
import wedding3 from "./images/wedding3.jpg"
import wedding6 from "./images/wedding6.jpg"
import wedding8 from "./images/wedding8.jpg"
import wedding9 from "./images/wedding9.jpg"
import wedding7 from "./images/wedding7.jpg"

document.addEventListener('DOMContentLoaded', () => {

  /*
  * Mobile nav
  */

  const links = document.querySelector('#links')
  const linksToggle = document.querySelector('#links-toggle')

  linksToggle.addEventListener('click', () => {
    links.classList.toggle('h-0')
  })
  links.childNodes.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.add('h-0')
    })
  })

  /*
  * Image carousel
  */

  const images = [{
    img: wedding3,
    alt: 'Lauren & Ben getting married at Barnegat Light, NJ.'
  }, {
    img: wedding2,
    alt: 'Lauren & Ben on the beach.'
  }, {
    img: wedding9,
    alt: 'Lauren & Ben at sunset.'
  }, {
    img: wedding6,
    alt: 'The cake!'
  }, {
    img: wedding8,
    alt: 'The small party at the beach house.'
  }, {
    img: wedding7,
    alt: 'Lauren & Ben being silly.'
  }]

  const image = document.querySelector('#carousel')
  const dots = document.querySelector('#dots')
  const prev = document.querySelector('#prev')
  const next = document.querySelector('#next')
  let cursor = 0
  let interval

  function makeDots() {
    dots.innerHTML = ''
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement('div')
      dot.classList.add('dot')
      if (i === cursor) {
        dot.classList.add('dot-selected')
      }
      dots.appendChild(dot)
    }
  }

  function setImage() {
    image.setAttribute('src', images[cursor].img)
    image.setAttribute('alt', images[cursor].alt)
    makeDots()
    clearInterval(interval)
    interval = setInterval(nextImage, 5000)
  }

  function nextImage() {
    cursor = cursor === images.length - 1 ? 0 : cursor + 1
    setImage()
  }

  prev.addEventListener('click', () => {
    cursor = cursor === 0 ? images.length - 1 : cursor - 1
    setImage()
  })

  next.addEventListener('click', nextImage)

  setImage()
})
