var element = document.createElement("embed");
element.src = localStorage.getItem("game");
element.width = "640";
element.width = "480";

document.body.appendChild(element);

if (localStorage.getItem("useRuffle") == "true") {
    element = document.createElement("script");
    element.src = "./ruffle/ruffle.js";
    document.body.appendChild(element);
}