
let i000 = document.querySelectorAll(".i000")

i000.forEach(item => {
  item.addEventListener("mousemove", e => {
    const rect = item.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    item.style.setProperty("--x", `${ x }px`)
    item.style.setProperty("--y", `${ y }px`)
  })
})

i000.forEach(item => {
  item.addEventListener("mouseleave", () => {
    item.style.setProperty("--x", "50%")
    item.style.setProperty("--y", "50%")
  })
})

/*
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".imagetransform").forEach((i) => {
    const position = i.getAttribute("value")
    const x = (window.innerWidth - e.pageX * position) / 45
    const y = (window.innerHeight - e.pageY * position) / 45

    i.style.transform = `translate(${ x }px, ${ y }px)`
  })
})
*/

/* About page carousel */
function handleCarousel() {
  let carousel = document.getElementById("carousel")
  let tracker = 0

  setInterval(() => {
    tracker++

    if (tracker > 3) tracker = 0

    for (let i = 0; i < document.getElementById("carouselcontroller").children.length; i++) {
      document.getElementById("carouselcontroller").children[i].setAttribute("active", "false")
    }
    document.getElementById("carouselcontroller").children[tracker].setAttribute("active", "true")

    switch(tracker) {
      case 0:
        carousel.style.setProperty("-webkit-transform", "translateX(0%)")
        carousel.style.setProperty("transform", "translateX(0%)")
        break
      case 1:
        carousel.style.setProperty("-webkit-transform", "translateX(-100%)")
        carousel.style.setProperty("transform", "translateX(-100%)")
        break
      case 2:
        carousel.style.setProperty("-webkit-transform", "translateX(-200%)")
        carousel.style.setProperty("transform", "translateX(-200%)")
        break
      case 3:
        carousel.style.setProperty("-webkit-transform", "translateX(-300%)")
        carousel.style.setProperty("transform", "translateX(-300%)")
        break
      default:
        return
    }
  }, 3000)

  document.addEventListener("click", (e) => {
    if (!e.target.hasAttribute("carouselvalue")) {
      return
    } else {
      for (let i = 0; i < document.getElementById("carouselcontroller").children.length; i++) {
        document.getElementById("carouselcontroller").children[i].setAttribute("active", "false")
      }
      e.target.setAttribute("active", "true")

      let carousel = document.getElementById("carousel")
      switch(e.target.getAttribute("carouselvalue")) {
        case "0":
          carousel.style.setProperty("-webkit-transform", "translateX(0%)")
          carousel.style.setProperty("transform", "translateX(0%)")
          break
        case "1":
          carousel.style.setProperty("-webkit-transform", "translateX(-100%)")
          carousel.style.setProperty("transform", "translateX(-100%)")
          break
        case "2":
          carousel.style.setProperty("-webkit-transform", "translateX(-200%)")
          carousel.style.setProperty("transform", "translateX(-200%)")
          break
        case "3":
          carousel.style.setProperty("-webkit-transform", "translateX(-300%)")
          carousel.style.setProperty("transform", "translateX(-300%)")
          break
        default:
          return
      }
    }
  })
}

if (document.getElementById("carouselcontroller") == (null || undefined)) {
  console.log("#carouselcontroller:", document.getElementById("carouselcontroller"))
} else {
  handleCarousel()
}

/* Home page project filters */
document.addEventListener("click", (e) => {
  if (!e.target.hasAttribute("filtervalue")) {
    return
  } else {
    for (let i = 0; i < document.getElementById("filters").children.length; i++) {
      document.getElementById("filters").children[i].setAttribute("active", "false")
    }
    e.target.setAttribute("active", "true")
  }
})

document.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-link")) {
    e.preventDefault()

    try {
      document.getElementById(e.target.getAttribute("data-link")).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    } catch(err) {
      console.log(err)
    }
  }
})