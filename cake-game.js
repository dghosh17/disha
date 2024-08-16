function showTopping(topping) {
    const toppingImage = document.querySelector(`.${topping}`);
    toppingImage.style.display = 'block';
}

function resetCake() {
    const toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => {
        topping.style.display = 'none';
    });
}
