// Selecting all the save buttons
const saveButtons = document.querySelectorAll(".save-btn")

// Looping through all the buttons but looking for a click event
saveButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()

        const productData = getProductData(event.target)
        addToStorage(productData)
    })
})

// Function for getting the specific data of the button and card that was clicked
function getProductData (target) {
    const card = target.closest(".card")
    const title = card.querySelector(".card-title").textContent
    const image = card.querySelector(".card-img-top").src

    return {
        name: title,
        image: image,
    }
}

// Adding the information to localStorage
function addToStorage(product) {
    
    localStorage.setItem(product.name, JSON.stringify(product))
    const localLength = localStorage.length
    alert(`There are currently ${localLength}`)
    
    // Get the stored string value from sessionStorage and add it to addtoSavedPage
    const storedProduct = localStorage.getItem(product.name)
    addtoSavedPage(storedProduct)
}

// Adding that information from localStorage and appending it to savedItems
function addtoSavedPage(item) {
    const product = JSON.parse(item)

    const savedItems = document.querySelector(".container-saved")

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

    savedItems.appendChild(savedCard)
}