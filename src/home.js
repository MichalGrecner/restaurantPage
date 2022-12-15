
const homeScreen = function () {
    const main = document.querySelector("main")
    const homeInfoIntro = "Hello and welcome to my 'Fake Café' website.";
    const homeInfopara1="This website is result of a task from 'The Odin Project' curriculum. The aim of this simple website is to bundle several separated .js modules together using Webpack. This site also should be responsive.";
    const homeInfopara2="Because I need more text here I will just simply add some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni.";

    const container = document.createElement("div");
    container.id = "container";

    const infoDiv = document.createElement("div");
    infoDiv.id = "info";

    const pIntro = document.createElement("p");
    pIntro.innerText = homeInfoIntro;

    const para1 = document.createElement("p");
    para1.innerText = homeInfopara1;

    const para2 = document.createElement("p");
    para2.innerText = homeInfopara2;


    infoDiv.appendChild(pIntro);
    infoDiv.appendChild(document.createElement("br"));
    infoDiv.appendChild(para1);
    infoDiv.appendChild(document.createElement("br"));
    infoDiv.appendChild(para2);
    //infoDiv.appendChild(document.createElement("br"));

    container.appendChild(infoDiv);
    main.appendChild(container);
    
}

export {
    homeScreen
};


