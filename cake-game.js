document.addEventListener("DOMContentLoaded", function() {
    // Function to create a draggable topping
    window.createDraggableTopping = function(topping) {
        const toppingElement = document.createElement('span');
        toppingElement.classList.add('topping');
        toppingElement.dataset.topping = topping;

        switch(topping) {
            case 'berries':
                toppingElement.style.backgroundImage = "url('cake-img/berries.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Berries';
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('cake-img/chocolate.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Chocolate';
                break;
            case 'pink':
                toppingElement.style.backgroundImage = "url('cake-img/pink.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Pink';
                break;
            case 'sprinkles':
                toppingElement.style.backgroundImage = "url('cake-img/sprinkles.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Sprinkles';
                break;
            case 'candle':
                toppingElement.style.backgroundImage = "url('cake-img/candle.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Candle';
                break;
        }

        toppingElement.draggable = true;
        toppingElement.addEventListener('dragstart', dragStart);
        document.querySelector('.cake-toppings').appendChild(toppingElement);
    };

    // Function to handle the drag start event
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.topping);
    }

    // Allow dropping toppings onto the cake area
    const cakeArea = document.querySelector('.cake');
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
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Berries';
                break;
            case 'chocolate':
                toppingElement.style.backgroundImage = "url('cake-img/chocolate.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Chocolate';
                break;
            case 'pink':
                toppingElement.style.backgroundImage = "url('cake-img/pink.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Pink';
                break;
            case 'sprinkles':
                toppingElement.style.backgroundImage = "url('cake-img/sprinkles.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Sprinkles';
                break;
            case 'candle':
                toppingElement.style.backgroundImage = "url('cake-img/candle.png')";
                toppingElement.style.width = '50px'; // Adjust size as needed
                toppingElement.style.height = '50px'; // Adjust size as needed
                toppingElement.textContent = 'Candle';
                break;
        }

        toppingElement.style.position = 'absolute';
        toppingElement.style.left = `${event.clientX - cakeArea.getBoundingClientRect().left - 25}px`;
        toppingElement.style.top = `${event.clientY - cakeArea.getBoundingClientRect().top - 25}px`;

        document.querySelector('.cake-toppings').appendChild(toppingElement);
    });

    // Function to reset the cake
    window.resetCake = function() {
        const cakeToppings = document.querySelector('.cake-toppings');
        cakeToppings.innerHTML = ''; // Clear all toppings
    };
});
