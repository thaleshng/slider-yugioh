const btnAvancar = document.getElementById("advance-arrow")
const btnVoltar = document.getElementById("back-arrow")

const btnAvancarMobile = document.querySelector(".mobile-advance-arrow")
const btnVoltarMobile = document.querySelector(".mobile-back-arrow")

const cards = document.querySelectorAll(".card")
let actualCard = 0

function advanceCard() {
    if (actualCard === cards.length - 1) {
        return
    }

    const cardActive = document.querySelector(".show")
    cardActive.classList.remove("show")

    actualCard++

    cards[actualCard].classList.add("show")

    if (actualCard !== 0) {
        btnVoltar.classList.remove("opacity")
        btnVoltarMobile.classList.remove("opacity")
    }

    if (actualCard === cards.length - 1) {
        btnAvancar.classList.add("opacity")
        btnAvancarMobile.classList.add("opacity")
    }
}

function backCard() {
    if (actualCard === 0) {
        return
    }

    const cardActive = document.querySelector(".show")
    cardActive.classList.remove("show")

    actualCard--

    cards[actualCard].classList.add("show")

    if (actualCard === 0) {
        btnVoltar.classList.add("opacity")
        btnVoltarMobile.classList.add("opacity")
    }

    if (actualCard !== cards.length - 1) {
        btnAvancar.classList.remove("opacity")
        btnAvancarMobile.classList.remove("opacity")
    }
}

btnAvancar.addEventListener("click", advanceCard)
btnAvancarMobile.addEventListener("click", advanceCard)

btnVoltar.addEventListener("click", backCard)
btnVoltarMobile.addEventListener("click", backCard)