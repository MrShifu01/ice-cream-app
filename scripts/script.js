const saveButtons = document.querySelectorAll(".save-btn")

saveButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()

        const productData = getProductData(event.target)
        addToStorage(productData)
    })
})

function getProductData (target) {
    const card = target.closest(".card")
    const title = card.querySelector(".card-title").textContent
    const image = card.querySelector(".card-img-top").src

    return {
        name: title,
        image: image,
    }
}


function addToStorage(product) {
    
    localStorage.setItem(product.name, JSON.stringify(product))
    const localLength = localStorage.length
    alert(`There are currently ${localLength}`)
    
    // Get the stored string value from sessionStorage and pass it to addtoSavedPage
    const storedProduct = localStorage.getItem(product.name)
    addtoSavedPage(storedProduct)
}


function addtoSavedPage(item) {
    const product = JSON.parse(item)
    console.log(product)
    const savedItems = document.querySelector(".container-saved")
    console.log("Saved Items container:", savedItems);
    const savedCard = document.createElement("div")
    savedCard.classList.add("saved-card")
    savedCard.innerHTML = `<div class="row">
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                </div>
            </div>
        </div>
    </div>`
    console.log(savedCard.innerHTML)
    savedItems.appendChild(savedCard)
}