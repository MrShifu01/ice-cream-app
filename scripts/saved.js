// Selecting the area where the new cards are to be displayed
const savedItems = document.querySelector(".saved");

// Loop through sessionStorage keys
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const storedProduct = localStorage.getItem(key);
    addtoSavedPage(storedProduct);
}

// Adding the correct information and HTML text to create the new elements
function addtoSavedPage(item) {
    const product = JSON.parse(item);
    const savedCard = document.createElement("div");
    savedCard.classList.add("saved-card");
    savedCard.innerHTML = `<div class="row">
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                </div>
            </div>
        </div>
    </div>`;

    savedItems.appendChild(savedCard);
}

// Selecting a clickable event that can clear the localStorage
const clearStorage = document.querySelector(".clear-storage")
if (localStorage.length === 0) {
    clearStorage.textContent = ""
} else {
    clearStorage.textContent = "Click to clear the page!"      
}

// Function to clear the storage and reboot the page
clearStorage.addEventListener('click', () => {
    console.log("tyes")
    localStorage.clear()
    window.location.reload()
    clearStorage.textContent = ""
})
