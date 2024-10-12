function showTopping(toppingImage) {
    // Hide all toppings 
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => topping.style.display = 'none');
    
    // Show the  topping
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
 
window.onload = function() {
};
