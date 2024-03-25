let plusButton = document.querySelector(".addBtn")
let overla = document.querySelector(".overlay")
let overlaybo = document.querySelector(".overlaybox")
let addButton = document.querySelector("#adb")
let canButton = document.querySelector("#cb")
let delBTN = document.querySelector("#helo")
let containe = document.querySelector(".container")
let movietitle = document.getElementById("q")
let moviehero = document.getElementById("w")
let movieDesc = document.getElementById("e")

plusButton.addEventListener("click", () => {
    overla.style.display = "block"
    overlaybo.style.display = "block"
})

canButton.addEventListener("click", (event) => {
    event.preventDefault()
    overla.style.display = "none"
    overlaybo.style.display = "none"
})

addButton.addEventListener("click", (event) => {
    event.preventDefault()
    let div1 = document.createElement("div")
    div1.setAttribute("class", "moviebox")
    div1.innerHTML = `<h2>${movietitle.value}</h2>
    <h5>${moviehero.value}</h5>
    <p>${movieDesc.value}</p>
    <button id="helo" onclick="deleter(event)">Delete</button>`
    containe.append(div1)
    overla.style.display = "none"
    overlaybo.style.display = "none"
})

function deleter(event) {
    event.target.parentElement.remove()
}