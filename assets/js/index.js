"use strict";


///////////////////


const elem = document.getElementById("elem");

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

const array = [{ id: "1", title: "1", description: "1" }, { id: "2", title: "2", description: "2" }, { id: "3", title: "3", description: "3" }, { id: "4", title: "4", description: "4" }];

function createLi({ id, title, description }) {

    const li = createListItem({
        value: description, children: [createButton("delete", (event) => {
            event.target.parentNode.remove();
        })]
    })
    ul.appendChild(li);
    li.title = title;
    li.id = id;


    return li;
}

function createListItem({ value, children }) {
    const li = document.createElement("li");
    li.append(document.createTextNode(value), ...children);

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

console.dir(createLi({ id: "1", title: "1", description: "первый" }));

console.dir(createLi({ id: "2", title: "2", description: "второй" }));

console.dir(createLi({ id: "3", title: "3", description: "третий" }));

////////////////////////////

class Elem {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    set html(string) {
        return this._selector;
    }
    set append(string) {
        return this._selector;
    }
    set prepend(string) {
        return this._selector;
    }
    set attr(attribute) {
        return this._selector;
    }

    get html() {
        return this.html();
    }
    get append() {
        return this.append();
    }
    get prepend() {
        return this.prepend();
    }
    get attr() {
        return attr();
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
