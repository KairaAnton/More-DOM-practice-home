"use strict";

const elem = document.getElementById("elem");

const inputToEnter = document.createElement("input");
const inputForWithdrawal =document.createElement("input");
const label = document.createElement("label");
const button = document.createElement("button");


elem.append(label);
elem.append(inputToEnter);
elem.append(button);
elem.append(inputForWithdrawal);
label.textContent= "введите радиус круга для вычисления площади";
button.textContent="вычислить площадь";
inputForWithdrawal.disabled;
button.addEventListener("click",areaCalculation)
function areaCalculation(event){
    inputForWithdrawal.value = (inputToEnter.value**2*3.1415);

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
    if (elem.classList.contains("www")) {
        elem.classList.remove("www");
    } else {
        elem.classList.add("www");
    }
}

//////////////////////////////////

const ul = document.createElement("ul");
elem.append(ul);

const array = [{ id: "1", title: "заголовок", description: "Первый" },
{ id: "2", title: "заголовок", description: "Второй" },
{ id: "3", title: "заголовок", description: "Третий" },
{ id: "4", title: "заголовок", description: "Четвертый" }];

function createLi({ id, title, description }) {

    const li = createListItem({
        title, description, children: [createButton("delete", (event) => {
            event.target.parentNode.remove();
        })]
    })
    ul.appendChild(li);
    li.id = id;


    return li;
}

function createListItem({ title, description, children }) {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    li.append(h2.textContent = title, p.textContent = description, ...children);

    return li;
}

function createButton(text, onClick = () => { }) {
    const button = document.createElement("button");
    elem.append(button);
    button.onclick = onClick;
    button.textContent = text;

    return button;
}

function backlight(event) {
    event.target.classList.add("classLi");
}

ul.addEventListener("click", backlight);


////////////////////////////

class Elem {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    html(string) {
        this._selector.textContent = string;
        return this;
    };

    append(string) {
        this._selector.append(string);
        return this;
    };

    prepend(string) {
        this._selector.prepend(string)
        return this;
    };

    attr(attribute, attrValue) {
        this._selector.setAttribute(attribute, attrValue);
        return this;

    }

};

array.map((item) => { createLi(item); });