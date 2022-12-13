
const homeScreen = function () {
    const main = document.querySelector("main")
    const homeInfoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni. Exercitationem totam at assumenda id, minus animi autem consequatur! Iure ea aperiam voluptatibus autem nesciunt at odit dolore doloribus aspernatur. Consectetur id labore nesciunt modi delectus cum debitis? Voluptatum eveniet pariatur voluptates quasi similique nesciunt autem modi, provident amet accusantium repellendusk!";

    const container = document.createElement("div");
    container.id = "container";

    const infoDiv = document.createElement("div");
    infoDiv.id = "info";

    const para = document.createElement("p");
    para.textContent = homeInfoText;

    infoDiv.appendChild(para);
    container.appendChild(infoDiv);
    main.appendChild(container);
    
}

export {
    homeScreen
};


