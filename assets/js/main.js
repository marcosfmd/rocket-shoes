const handleImageOne = document.querySelector(".one ")
const handleImageTwo = document.querySelector(".two")
const handleImageThree = document.querySelector(".three")
const featureImage = document.querySelector(".image-feature")

handleImageOne.addEventListener("click", (e) => {
  featureImage.src = './assets/images/tenis-feature-one.png'
  handleImageOne.classList.add("images-list-focus")
  
  handleImageTwo.classList.remove("images-list-focus")
  handleImageThree.classList.remove("images-list-focus")
})

handleImageTwo.addEventListener("click", () => {
  featureImage.src = './assets/images/tenis-feature-two.png'
  handleImageTwo.classList.add("images-list-focus")

  handleImageOne.classList.remove("images-list-focus")
  handleImageThree.classList.remove("images-list-focus")

})

handleImageThree.addEventListener("click", () => {
  featureImage.src = './assets/images/tenis-feature-three.png'
  handleImageThree.classList.add("images-list-focus")

  handleImageTwo.classList.remove("images-list-focus")
  handleImageTwo.classList.remove("images-list-focus")
})
