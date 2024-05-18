const btnAvancar = document.getElementById("advance-arrow")
const btnVoltar = document.getElementById("back-arrow")

const btnAvancarMobile = document.querySelector(".mobile-advance-arrow")
const btnVoltarMobile = document.querySelector(".mobile-back-arrow")

const cards = document.querySelectorAll(".card")
let actualImage = 0

function advanceCard () {
    if (actualImage === cards.length - 1) {
        return
    }

    const cardActive = document.querySelector(".show")
    cardActive.classList.remove("show")

    actualImage++

    cards[actualImage].classList.add("show")

    if (actualImage !== 0) {
        btnVoltar.classList.remove("opacity")
        btnVoltarMobile.classList.remove("opacity")
    }

    if (actualImage === cards.length - 1) {
        btnAvancar.classList.add("opacity")
        btnAvancarMobile.classList.add("opacity")
    }
}

function backCard () {
    if (actualImage === 0) {
        return
    }

    const cardActive = document.querySelector(".show")
    cardActive.classList.remove("show")

    actualImage--

    cards[actualImage].classList.add("show")

    if (actualImage === 0) {
        btnVoltar.classList.add("opacity")
        btnVoltarMobile.classList.add("opacity")
    }

    if (actualImage !== cards.length - 1) {
        btnAvancar.classList.remove("opacity")
        btnAvancarMobile.classList.remove("opacity")
    }
}

btnAvancar.addEventListener("click", advanceCard)
btnAvancarMobile.addEventListener("click", advanceCard)

btnVoltar.addEventListener("click", backCard)
btnVoltarMobile.addEventListener("click", backCard)