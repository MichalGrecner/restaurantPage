const contactScreen = function () {
    const main = document.querySelector("main")
    const OpenTime = "MON-SUN...........7AM - 9PM";
    const name = "Fake Fancy Café"
    const street = "FamousBridge Avenue 1"
    const zipCode = "110 00 Prague, Czechia"




    const mapDiv = document.createElement("div");
    const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11708.751414257229!2d14.42571435116!3d50.08277903227256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5e58eb59f%3A0x75209738d1d3b126!2sKarl%C5%AFv%20most!5e0!3m2!1scs!2scz!4v1671108794051!5m2!1scs!2scz" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `

    mapDiv.id="map";
    mapDiv.innerHTML = map;



    const container = document.createElement("div");
    container.id = "container";

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";

    const openTimePara = document.createElement("p");
    openTimePara.textContent = OpenTime;

    const namePara = document.createElement("p");
    namePara.textContent = name;

    const streetPara = document.createElement("p");
    streetPara.textContent = street;

    const zipcodePara = document.createElement("p");
    zipcodePara.textContent = zipCode;


    contactDiv.appendChild(openTimePara);
    contactDiv.appendChild(document.createElement("br"));
    contactDiv.appendChild(namePara);
    contactDiv.appendChild(streetPara);
    contactDiv.appendChild(zipcodePara);
    container.appendChild(contactDiv);
    contactDiv.appendChild(document.createElement("br"));
    container.appendChild(mapDiv);
    //container.appendChild(document.createElement("br"));
    main.appendChild(container);
    
}

export {
    contactScreen
};