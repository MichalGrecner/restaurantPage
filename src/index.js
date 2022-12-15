//import './style.css';
//import { container } from "webpack";
import {homeScreen} from "/src/home.js";
import {menuScreen} from "/src/menu.js";
import {contactScreen} from "/src/contact.js";

const name = "Fake Fancy Café"

//div id content
const content = document.querySelector("#content");
//div header content
const headerCont = document.createElement("div");
headerCont.id="headerCont";
//h1 element restaurant name
const header = document.createElement("h1");
header.innerText = name;

headerCont.appendChild(header)
content.appendChild(headerCont);

//navigation

const nav = document.createElement("nav");

const ulNav = document.createElement("ul");
ulNav.id="navigation";

const menuArray = ["home", "menu", "contact"];
for (let e of menuArray){
    let li = document.createElement("li");
    li.id = e;
    li.innerText = e
    ulNav.appendChild(li);
}
nav.appendChild(ulNav)
content.appendChild(nav)

const main = document.createElement("main");
content.appendChild(main)

homeScreen();

const container=document.querySelector("#container");

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

homeTab.addEventListener("click", function () {

    const container=document.querySelector("#container");
    container.remove();
    homeScreen();
});

menuTab.addEventListener("click", function () {
    const container=document.querySelector("#container");
    container.remove();
    menuScreen();
});

contactTab.addEventListener("click", function () {
    const container=document.querySelector("#container");
    container.remove();
    contactScreen();
});


const footer = document.createElement("div");
footer.id="footer";
const footerPara = document.createElement("p");
const footerText = "<a href='https://www.freepik.com/free-photo/cafe-bar-hotel-loft-style_4690095.htm'  target='_blank'>Background Image by jcomp on Freepik </a> / <a href ='https://github.com/MichalGrecner' target='_blank'>GitHub/MichalGrecner</a>";

footerPara.innerHTML = footerText;
footer.appendChild(footerPara)

content.appendChild(footer)







