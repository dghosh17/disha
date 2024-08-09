// Basic implementation of a cake decorating game
const cakeGameContainer = document.getElementById('cake-game');

cakeGameContainer.innerHTML = `
    <div class="cake">
        <div class="cake-layer" style="background-color: #f39c12;"></div>
        <div class="cake-layer" style="background-color: #e67e22;"></div>
        <div class="cake-layer" style="background-color: #d35400;"></div>
    </div>
    <div class="toppings">
        <button onclick="addTopping('🍓')">Add Strawberry</button>
        <button onclick="addTopping('🍫')">Add Chocolate</button>
        <button onclick="addTopping('🍒')">Add Cherry</button>
    </div>
    <div class="cake-toppings"></div>
`;

function addTopping(topping) {
    const toppingElement = document.createElement('span');
    toppingElement.textContent = topping;
    document.querySelector('.cake-toppings').appendChild(toppingElement);
}
