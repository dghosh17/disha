function showTopping(toppingImage) {
    // Hide all toppings first
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => topping.style.display = 'none');
    
    // Show the selected topping
    const toppingToShow = document.querySelector(`#cake-container .topping[data-image="${toppingImage}"]`);
    if (toppingToShow) {
        toppingToShow.style.display = 'block';
    }
}

function resetCake() {
    // Hide all toppings
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => topping.style.display = 'none');
}

// Initialize toppings (Ensure they are loaded correctly)
window.onload = function() {
    const cakeContainer = document.getElementById('cake-container');
    const toppingImages = ['topping1.png', 'topping2.png', 'topping3.png']; // Adjust filenames as needed

    toppingImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.classList.add('topping');
        imgElement.setAttribute('data-image', image);
        cakeContainer.appendChild(imgElement);
    });
};
