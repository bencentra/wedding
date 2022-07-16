import "./index.css";
import wedding2 from "./images/wedding2.jpg";
import wedding3 from "./images/wedding3.jpg";
import wedding6 from "./images/wedding6.jpg";
import wedding8 from "./images/wedding8.jpg";
import wedding9 from "./images/wedding9.jpg";
import wedding7 from "./images/wedding7.jpg";
import lordhobo1 from "./images/lordhobo/exterior1.jpg";
import lordhobo2 from "./images/lordhobo/beerhall2.jpg";
import lordhobo3 from "./images/lordhobo/patio2.jpg";
import lordhobo4 from "./images/lordhobo/beerhall3.jpg";
import lordhobo5 from "./images/lordhobo/exterior2.jpg";

document.addEventListener("DOMContentLoaded", () => {
  /*
   * Mobile nav
   */

  const links = document.querySelector("#links");
  const linksToggle = document.querySelector("#links-toggle");

  linksToggle.addEventListener("click", () => {
    links.classList.toggle("h-0");
  });
  links.childNodes.forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.add("h-0");
    });
  });

  /*
   * Image carousel
   */

  function makeCarousel({ images, imageId, dotsId, prevId, nextId }) {
    const image = document.querySelector(`#${imageId}`);
    const dots = document.querySelector(`#${dotsId}`);
    const prev = document.querySelector(`#${prevId}`);
    const next = document.querySelector(`#${nextId}`);
    let cursor = 0;
    let interval;

    function makeDots() {
      dots.innerHTML = "";
      for (let i = 0; i < images.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === cursor) {
          dot.classList.add("dot-selected");
        }
        dots.appendChild(dot);
      }
    }

    function setImage() {
      image.setAttribute("src", images[cursor].img);
      image.setAttribute("alt", images[cursor].alt);
      makeDots();
      clearInterval(interval);
      interval = setInterval(nextImage, 5000);
    }

    function nextImage() {
      cursor = cursor === images.length - 1 ? 0 : cursor + 1;
      setImage();
    }

    function prevImage() {
      cursor = cursor === 0 ? images.length - 1 : cursor - 1;
      setImage();
    }

    prev.addEventListener("click", prevImage);
    next.addEventListener("click", nextImage);
    setImage();

    /*
     * Swipe for the carousel
     */

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches // jQuery
      );
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* right swipe */
          nextImage();
        } else {
          /* left swipe */
          prevImage();
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    image.addEventListener("touchstart", handleTouchStart, false);
    image.addEventListener("touchmove", handleTouchMove, false);
  }

  /**
   * Initialize image carousels
   */

   const images = [
    {
      img: wedding3,
      alt: "Lauren & Ben getting married at Barnegat Light, NJ.",
    },
    {
      img: wedding2,
      alt: "Lauren & Ben on the beach.",
    },
    {
      img: wedding9,
      alt: "Lauren & Ben at sunset.",
    },
    {
      img: wedding6,
      alt: "The cake!",
    },
    {
      img: wedding8,
      alt: "The small party at the beach house.",
    },
    {
      img: wedding7,
      alt: "Lauren & Ben being silly.",
    },
  ];

  const images2 = [
    {
      img: lordhobo1,
      alt: "The exterior of Lord Hobo Brewing Company in Woburn.",
    },
    {
      img: lordhobo2,
      alt: "The first of two beer halls inside Lord Hobo, conneced to the outdoor patio.",
    },
    {
      img: lordhobo3,
      alt: "The patio outside Lord Hobo. Imagine more tables and some outdoor games!",
    },
    {
      img: lordhobo4,
      alt: "The second indoor beer hall at Lord Hobo. There will be tours of the brewing facility in the back.",
    },
    {
      img: lordhobo5,
      alt: "Lord Hobo's parking lot. There's additional parking on the street.",
    },
  ];

  makeCarousel({
    images,
    imageId: "carousel",
    dotsId: "dots",
    prevId: "prev",
    nextId: "next",
  });

  makeCarousel({
    images: images2,
    imageId: "carousel2",
    dotsId: "dots2",
    prevId: "prev2",
    nextId: "next2",
  });
});
