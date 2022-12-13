const contactScreen = function () {
    const main = document.querySelector("main")
    const contactText = `
    MONDAY-SUNDAY 7AM - 9PM
    `;
    const mapDiv = document.createElement("div");
    const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6340.968937985935!2d14.40533066525328!3d50.088957320792055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951e6c24b7c3%3A0x2acf3c88af12259f!2zUHJhxb5za8O9IGhyYWQ!5e0!3m2!1scs!2scz!4v1670956569211!5m2!1scs!2scz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    mapDiv.id="map";
    mapDiv.innerHTML = map;



    const container = document.createElement("div");
    container.id = "container";

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";

    const para = document.createElement("p");
    para.textContent = contactText;

    contactDiv.appendChild(para);
    container.appendChild(contactDiv);
    container.appendChild(mapDiv)
    main.appendChild(container);
    
}

export {
    contactScreen
};