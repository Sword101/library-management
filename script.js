const box = document.querySelector("#can")
const addBook = document.querySelector("#addBook")
const bookTitle = document.querySelector("#title")
const bookAuther = document.querySelector("#auther")
const inputs = document.querySelector("#inputs")
const sumbit = document.querySelector("#sumbit")




function addElement() {
    let card = document.createElement("div")
    let del = document.createElement("button")
    let author = document.createElement("h3")
    let title = document.createElement("h2")

    card.classList.add("card")
    del.textContent = "delete"
    author.textContent = bookAuther.value
    title.textContent = bookTitle.value

    del.addEventListener("click", function () {
        this.closest('div').remove()
    })

    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(del)

    box.appendChild(card)

}


addBook.addEventListener("click", () => {
    inputs.style.display = "block"
    addBook.style.display = "none"
})

sumbit.addEventListener("click",()=>{
    addElement()
    bookTitle.value = ""
    bookAuther.value = ""
    inputs.style.display = "none"
    addBook.style.display = "block"
})
