const superLink = document.getElementById("super_link")
console.log(superLink)

const cardLinks = document.querySelectorAll(".card-link")
cardLinks.forEach(link => {
    link.textContent = "ссылка"
})

const cardBodyLinks = document.querySelectorAll(".card-body .card-link")
console.log(cardBodyLinks)

const firstDataNumber50= document.querySelector('[data-number="50"]')
console.log(firstDataNumber50)

const titleTag = document.querySelector("title")
console.log(titleTag ? titleTag.textContent : "Тег title не найден")

const cardTitle = document.querySelector(".card-title")
console.log(cardTitle.parentNode)

const newParagraph = document.createElement("p")
newParagraph.textContent = "WYD"
const card = document.querySelector(".card")
card.insertBefore(newParagraph, card.firstChild)

const h6Tag = document.querySelector("h6")
if(h6Tag){
    h6Tag.remove();
}