function showTopping(toppingImage) {
    // Hide all toppings first
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => topping.style.display = 'none');
    
    // Show the selected topping
    const toppingToShow = document.querySelector(`.topping.${toppingImage}`);
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
    // No changes needed here
};
