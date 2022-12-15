
const menuScreen = function () {
    const main = document.querySelector("main");
    const upperText = "You can eat in or take away."
    const bottomText = "We accept credit cards.";

    const menuBeverages = [
        {
        "item":"Coffe",
        "price":"60CZK"
        },
        {
        "item":"Cappuccino",
        "price":"70CZK"
        },
        {
        "item":"Beer",
        "price":"50CZK"
        },
        {
        "item":"Tea",
        "price":"50CZK"
        },
    ]
    const menuFood = [
        {
        "item":"Czech national dessert 'Bábovka'",
        "price":"55CZK"
        },
        {
        "item":"Ham & Cheese Toast",
        "price":"70CZK"
        },
        {
        "item":"Avocado Toast",
        "price":"70CZK"
        },
    ]




    const container = document.createElement("div");
    container.id = "container";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    const paraUpper = document.createElement("p");
    paraUpper.innerText=upperText;

    menuDiv.appendChild(paraUpper)
    menuDiv.appendChild(document.createElement("br"))

    let beverages = document.createElement("p");
    beverages.innerText="Beverages";
    menuDiv.appendChild(beverages);

    const tableBeverages = document.createElement("table");
    
    for(let e of menuBeverages){
        const tr = document.createElement("tr");
        const tdItem = document.createElement("td");
        tdItem.innerText = e.item;
        tdItem.classList="left";
        const tdPrice = document.createElement("td");
        tdPrice.innerText = e.price;
        tdPrice.classList="right";
        tr.appendChild(tdItem);
        tr.appendChild(tdPrice);
        tableBeverages.appendChild(tr);
        menuDiv.appendChild(tableBeverages)
    }
    menuDiv.appendChild(document.createElement("br"))

    let toEat = document.createElement("p");
    toEat.innerText="To Eat";
    menuDiv.appendChild(toEat);

    const tableFood = document.createElement("table");
    for(let e of menuFood){
        const tr = document.createElement("tr");
        const tdItem = document.createElement("td");
        tdItem.innerText = e.item;
        tdItem.classList="left";
        const tdPrice = document.createElement("td");
        tdPrice.innerText = e.price;
        tdPrice.classList="right";
        tr.appendChild(tdItem);
        tr.appendChild(tdPrice);
        tableFood.appendChild(tr);
        menuDiv.appendChild(tableFood)
    }

    menuDiv.appendChild(document.createElement("br"))

    const paraBottom = document.createElement("p");
    paraBottom.textContent = bottomText;
    menuDiv.appendChild(paraBottom);
    //menuDiv.appendChild(document.createElement("br"));

    container.appendChild(menuDiv);
    main.appendChild(container);
    
}

export {
    menuScreen
};


