// time do slider changer.
let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

// function de troca.
function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

// function para iniciar.
function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)