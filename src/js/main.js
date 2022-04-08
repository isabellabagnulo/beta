const scrollContainer = document.querySelector("main")

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault()
  scrollContainer.scrollLeft += evt.deltaY
})

const li1 = document.querySelector("#li-1")
const li2 = document.querySelector("#li-2")
const li3 = document.querySelector("#li-3")
/* click li */
li1.addEventListener("click", () => {
  li1.style.flexGrow = "1.5"
  li2.style.flexGrow = "0.4"
  li3.style.flexGrow = "0.4"
})
li2.addEventListener("click", () => {
  li2.style.flexGrow = "1.5"
  li1.style.flexGrow = "0.4"
  li3.style.flexGrow = "0.4"
})
li3.addEventListener("click", () => {
  li3.style.flexGrow = "1.5"
  li2.style.flexGrow = "0.4"
  li1.style.flexGrow = "0.4"
})
// mouseover li
li1.addEventListener("mouseover", () => {
  li1.style.flexGrow = "1.5"
  li2.style.flexGrow = "0.4"
  li3.style.flexGrow = "0.4"
})
li2.addEventListener("mouseover", () => {
  li2.style.flexGrow = "1.5"
  li1.style.flexGrow = "0.4"
  li3.style.flexGrow = "0.4"
})
li3.addEventListener("mouseover", () => {
  li3.style.flexGrow = "1.5"
  li2.style.flexGrow = "0.4"
  li1.style.flexGrow = "0.4"
})
/* mouseleave li*/
li1.addEventListener("mouseleave", () => {
  li1.style.flexGrow = "1"
  li2.style.flexGrow = "1"
  li3.style.flexGrow = "1"
})
li2.addEventListener("mouseleave", () => {
  li1.style.flexGrow = "1"
  li2.style.flexGrow = "1"
  li3.style.flexGrow = "1"
})
li3.addEventListener("mouseleave", () => {
  li1.style.flexGrow = "1"
  li2.style.flexGrow = "1"
  li3.style.flexGrow = "1"
})
