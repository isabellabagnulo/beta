// HORIZONTAL SCROLL
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  console.log("is mobile")
} else {
  const scrollContainer = document.querySelector("main")

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
  })
}
