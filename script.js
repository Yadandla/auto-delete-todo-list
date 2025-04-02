const items = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]

const buttonsContainer = document.getElementById("buttons-container");
const fruitContainer = document.getElementById("fruit-container");
const vegetableContainer = document.getElementById("vegetable-container");

const addButtons = () => {
    items.forEach((item) => {
        const button = document.createElement("button");
        button.textContent = item.name;
        button.onclick = () => {
            handleClick(item, button);
        };
        buttonsContainer.appendChild(button);
    })
}

const handleClick = (item, button) => {
    button.remove();
    const displayDiv = item.type === "Fruit" ? fruitContainer : vegetableContainer

    const newElement = document.createElement("p");
    newElement.textContent = item.name;
    displayDiv.appendChild(newElement);

    newElement.onclick = () => {
        newElement.remove();
        buttonsContainer.appendChild(button);
    }

    setTimeout(() => {
        newElement.remove();
        buttonsContainer.appendChild(button);
    }, 5000);
}

addButtons();