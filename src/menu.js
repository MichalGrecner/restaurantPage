
const menuScreen = function () {
    const main = document.querySelector("main")
    const menuText = `
    KAFE ................ 40,-
    KAFE HAVAJ .......... 20,-
    KAFE PIVO ........... 30,-
    `;

    const container = document.createElement("div");
    container.id = "container";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    const para = document.createElement("p");
    para.textContent = menuText;

    menuDiv.appendChild(para);
    container.appendChild(menuDiv);
    main.appendChild(container);
    
}

export {
    menuScreen
};


