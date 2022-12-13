//import './style.css';
//import { container } from "webpack";
import {homeScreen} from "/src/home.js";
import {menuScreen} from "/src/menu.js";
import {contactScreen} from "/src/contact.js";


//div id content
const content = document.querySelector("#content");
//div header content
const headerCont = document.createElement("div");
headerCont.id="headerCont";
//h1 element restaurant name
const header = document.createElement("h1");
header.innerText = "Some cool caffe name";

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







