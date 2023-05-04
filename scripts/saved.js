const savedItems = document.querySelector(".saved");

// Loop through sessionStorage keys
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const storedProduct = localStorage.getItem(key);
    addtoSavedPage(storedProduct);
}

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

const clearStorage = document.querySelector(".clear-storage")
if (localStorage.length === 0) {
    clearStorage.textContent = ""
} else {
    clearStorage.textContent = "Click to clear the page!"      
}

clearStorage.addEventListener('click', () => {
    console.log("tyes")
    localStorage.clear()
    window.location.reload()
    clearStorage.textContent = ""
})
