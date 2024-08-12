document.addEventListener("DOMContentLoaded", function() {
    const cakeGameContainer = document.getElementById('cake-game');

    cakeGameContainer.innerHTML = `
        <div class="cake-game-wrapper">
            <div class="toppings">
                <button onclick="createDraggableTopping('berries')">Berries</button>
                <button onclick="createDraggableTopping('chocolate')">Chocolate</button>
                <button onclick="createDraggableTopping('pink')">Pink</button>
                <button onclick="createDraggableTopping('sprinkles')">Sprinkles</button>
                <button onclick="createDraggableTopping('candle')">Candle</button>
                <button onclick="resetCake()">Reset</button>
            </div>
            <div class="cake" id="cake-area">
                <div class="cake-layer"></div>
                <div class="cake-toppings"></div>
            </div>
        </div>
    `;

    window.createDraggableTopping = function(topping) {
        const toppingElement = document.createElement('span');
        toppingElement.classList.add('topping');
        toppingElement.dataset.topping = topping;

        switch(topping) {
            case 'berries':
                toppingElement.style.backgroundImage = "url('cake-img/berries.png')";
                toppingElement.textContent = 'Berries';
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('cake-img/chocolate.png')";
                toppingElement.textContent = 'Chocolate';
                break;
            case 'pink':
                toppingElement.style.backgroundImage = "url('cake-img/pink.png')";
                toppingElement.textContent = 'Pink';
                break;
            case 'sprinkles':
                toppingElement.style.backgroundImage = "url('cake-img/sprinkles.png')";
                toppingElement.textContent = 'Sprinkles';
                break;
            case 'candle':
                toppingElement.style.backgroundImage = "url('cake-img/candle.png')";
                toppingElement.textContent = 'Candle';
                break;
        }

        toppingElement.draggable = true;

        toppingElement.addEventListener('dragstart', dragStart);
        document.querySelector('.cake-toppings').appendChild(toppingElement);
    };

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.topping);
    }

    const cakeArea = document.getElementById('cake-area');
    cakeArea.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    cakeArea.addEventListener('drop', function(event) {
        event.preventDefault();
        const topping = event.dataTransfer.getData("text/plain");

        const toppingElement = document.createElement('span');
        toppingElement.classList.add('topping');
        toppingElement.dataset.topping = topping;

        switch(topping) {
            case 'berries':
                toppingElement.style.backgroundImage = "url('cake-img/berries.png')";
                toppingElement.textContent = 'Berries';
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('cake-img/chocolate.png')";
                toppingElement.textContent = 'Chocolate';
                break;
            case 'pink':
                toppingElement.style.backgroundImage = "url('cake-img/pink.png')";
                toppingElement.textContent = 'Pink';
                break;
            case 'sprinkles':
                toppingElement.style.backgroundImage = "url('cake-img/sprinkles.png')";
                toppingElement.textContent = 'Sprinkles';
                break;
            case 'candle':
                toppingElement.style.backgroundImage = "url('cake-img/candle.png')";
                toppingElement.textContent = 'Candle';
                break;
        }

        toppingElement.style.position = 'absolute';
        toppingElement.style.left = `${event.clientX - cakeArea.getBoundingClientRect().left - 25}px`;
        toppingElement.style.top = `${event.clientY - cakeArea.getBoundingClientRect().top - 25}px`;

        document.querySelector('.cake-toppings').appendChild(toppingElement);
    });

    window.resetCake = function() {
        const cakeToppings = document.querySelector('.cake-toppings');
        cakeToppings.innerHTML = '';
    };
});
