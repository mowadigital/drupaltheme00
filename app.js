
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
