"use strict";

const elem = document.getElementById("elem");

const inputToEnter = document.createElement("input");
const inputForWithdrawal = document.createElement("input");
const label = document.createElement("label");
const button = document.createElement("button");


elem.append(label, inputToEnter, button, inputForWithdrawal);
label.textContent = "введите радиус круга для вычисления площади";
button.textContent = "вычислить площадь";
inputForWithdrawal.disabled = true;
inputToEnter.type = "number";
button.addEventListener("click", areaCalculation)
function areaCalculation(event) {
    inputForWithdrawal.value = (inputToEnter.value ** 2 * 3.1415);
}

///////////////////



function classAdd(elem) {
    elem.classList.add("www");
}

function classRemove(elem) {
    elem.classList.remove("www");
}

function isContains(elem) {
    elem.classList.contains("www");
}

function classContains(elem) {
    elem.classList.toggle("www")
}

//////////////////////////////////

const ul = document.createElement("ul");
elem.append(ul);

const array = [{ id: "1", title: "заголовок", description: "Первый" },
{ id: "2", title: "заголовок", description: "Второй" },
{ id: "3", title: "заголовок", description: "Третий" },
{ id: "4", title: "заголовок", description: "Четвертый" }];


function createButton(text, onClick = () => { }) {
    const button = document.createElement("button");
    elem.append(button);
    button.onclick = onClick;
    button.textContent = text;

    return button;
}

function backlight(event) {
    event.target.classList.toggle("classLi");
}

ul.addEventListener("click", backlight);

array.map((obj) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.id = obj.id;
    li.append(document.createElement("h2").textContent = obj.title,
        document.createElement("p").textContent = obj.description,
        createButton("delete", (event) => { event.target.parentNode.remove() }))


});


////////////////////////////

class Elem {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }

    html(string) {
        this._element.textContent = string;
        return this;
    };

    append(string) {
        this._element.append(string);
        return this;
    };

    prepend(string) {
        this._element.prepend(string)
        return this;
    };

    attr(attribute, attrValue) {
        this._element.setAttribute(attribute, attrValue);
        return this;

    }

};

