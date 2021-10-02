// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider.
let colorOne = document.getElementById("color1")
let colorTwo = document.getElementById("color2")
let css = document.getElementById("css")
let surpriseBtn = document.getElementById("surprise")
let bkg = document.getElementById("container")
let output = document.getElementById("gradient")
let sliderChange = document.getElementById("slider")
let text = document.getElementById("text")
let angle = 45

colorOne.addEventListener("input", setGradient)
colorTwo.addEventListener("input", setGradient)
sliderChange.addEventListener("input", setGradient)

function setGradient() {
	let c1 = colorOne.value
	let c2 = colorTwo.value
	let s1 = sliderChange.value
	output.style.background = `linear-gradient(${angle}deg, ${c1}, ${s1}%, ${c2})`
	css.textContent = output.style.background
}
setGradient()

surpriseBtn.addEventListener("click", function () {
	function getNewColor() {
		let letters = "0123456789ABCDEF"
		let color = "#"
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}

		output.style.background = color
	}
	getNewColor()
})
