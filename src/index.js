import { contact } from "./contact";
import { home } from "./home";
import { menu } from "./menu";
import "./style/style.css";

const content = document.querySelector("#content");
//nav
const nav = document.createElement("nav");
document.body.prepend(nav);
//navButtons
const navButtonHome = document.createElement("a");
navButtonHome.classList.add("activeTab");
const navButtonMenu = document.createElement("a");
const navButtonContact = document.createElement("a");

navButtonHome.textContent = "Home";
navButtonMenu.textContent = "Menu";
navButtonContact.textContent = "Contact";

nav.appendChild(navButtonHome);
nav.appendChild(navButtonMenu);
nav.appendChild(navButtonContact);

navButtonHome.addEventListener("click", home);
navButtonMenu.addEventListener("click", menu);
navButtonContact.addEventListener("click", contact);

navButtonHome.addEventListener("click", function () {
  navButtonHome.classList.add("activeTab");
  navButtonContact.classList.remove("activeTab");
  navButtonMenu.classList.remove("activeTab");
});

navButtonMenu.addEventListener("click", function () {
  navButtonHome.classList.remove("activeTab");
  navButtonContact.classList.remove("activeTab");
  navButtonMenu.classList.add("activeTab");
});

navButtonContact.addEventListener("click", function () {
  navButtonHome.classList.remove("activeTab");
  navButtonContact.classList.add("activeTab");
  navButtonMenu.classList.remove("activeTab");
});

//footer
const footer = document.createElement("footer");
document.body.append(footer);
footer.innerHTML = "Aleksandar Misanovic @ 2023";

//homepage call
home();
