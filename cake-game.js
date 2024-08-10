document.addEventListener("DOMContentLoaded", function() {
    const cakeGameContainer = document.getElementById('cake-game');

    // Insert HTML structure for the cake and topping buttons into the cakeGameContainer
    cakeGameContainer.innerHTML = `
        <div class="cake">
            <div class="cake-layer"></div> <!-- Your cake PNG will be the background -->
        </div>
        <div class="toppings">
            <button onclick="addTopping('strawberry')">Add Strawberry</button>
            <button onclick="addTopping('chocolate')">Add Chocolate</button>
            <button onclick="addTopping('cherry')">Add Cherry</button>
            <button onclick="resetCake()">Reset</button>
        </div>
        <div class="cake-toppings"></div>
    `;

    // Function to add toppings to the cake
    window.addTopping = function(topping) {
        const toppingElement = document.createElement('span');
        toppingElement.classList.add('topping');
        toppingElement.dataset.topping = topping;

        switch(topping) {
            case 'strawberry':
                toppingElement.style.backgroundImage = "url('cake-img/strawberry.png')"; // Updated path
                toppingElement.textContent = 'Strawberry';
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('cake-img/chocolate.png')"; // Updated path
                toppingElement.textContent = 'Chocolate';
                break;
            case 'cherry':
                toppingElement.style.backgroundImage = "url('cake-img/cherry.png')"; // Updated path
                toppingElement.textContent = 'Cherry';
                break;
        }

        document.querySelector('.cake-toppings').appendChild(toppingElement);
    };

    // Function to reset the cake
    window.resetCake = function() {
        const cakeToppings = document.querySelector('.cake-toppings');
        cakeToppings.innerHTML = ''; // Clear all toppings
    };
});
