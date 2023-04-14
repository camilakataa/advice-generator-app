let buttonAdvice = document.querySelector(".dice")
let idAdvice = document.querySelector(".advice-number")
let descriptionAdvice = document.querySelector(".advice-text")

async function changeAdvice (){
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const adviceContent = await response.json()
    const adviceID = `Advice #${adviceContent.slip.id}`
    const adviceDescription = `${adviceContent.slip.advice}`

    idAdvice.innerHTML = adviceID
    descriptionAdvice.innerHTML = adviceDescription
}


buttonAdvice.addEventListener("click", function() {
    changeAdvice();
})
changeAdvice();