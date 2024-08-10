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
        </div>
        <div class="cake-toppings"></div>
    `;

    // Function to add toppings to the cake
    window.addTopping = function(topping) {
        const toppingElement = document.createElement('span');

        switch(topping) {
            case 'strawberry':
                toppingElement.style.backgroundImage = "url('strawberry.png')"; // Replace with your strawberry PNG filename
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('chocolate.png')"; // Replace with your chocolate PNG filename
                break;
            case 'cherry':
                toppingElement.style.backgroundImage = "url('cherry.png')"; // Replace with your cherry PNG filename
                break;
        }

        document.querySelector('.cake-toppings').appendChild(toppingElement);
    };
});