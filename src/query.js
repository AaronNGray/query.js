//
//  query.js - QueryJS query
//
//  Copyright (c) 2019 Aaron Nathaniel Gray under the MIT License
//

class Element {
    constructor(selector, parent) {
        parent = parent.element || parent || document;
        this.element = (typeof slector == "string") ? element.querySelector(selector) : selector;
    }
    $(selector) {
        return new Element(selector, this.element);
    }
    $$(selector) {
        return new Selection(selector, this.element);
    }

    //

    html(value) {
        if (value) {
            this.innerHTML = value;
            return this;
        }
        else
            return this.innerHTML;
    }
    text(value) {
        if (value) {
            this.innerText = value;
            return this;
        }
        else
            return this.innerText;
    }
    attr(key, value) {
        if (value) {
            this.setAttribute(key, value);
            return this;
        }
        else
            return this.getAttribute(key);
    }
    prop(key, value) {
        if (value) {
            this.element[key] = value;
            return this;
        }
        else
            return this.element[key];
    }
    css(key, value) {
        if (value) {
            this.style[KebabCaseToCamelCase(key)] = value;
            return this;
        }
        else
            return this.style[KebabCaseToCamelCase(key)];
    }

// classes

    addClass(cls) {
        this.classList.add(cls);
        return this;
    }
    removeClass(cls) {
        this.classList.remove(cls);
        return this;
    }
    toggleClass(cls) {
        this.classList.toggle(cls);
        return this;
    }
    hasClass(cls) {
        return this.classList.contains(cls);
    }

//  Events

    addEventListener(event, listener, options) {
        return this.element.addEventListener(event, listener, options);
    }
    removeEventListener(event, listener, options) {
        return this.element.removeEventListener(event, listener, options)
    }

    on(event, listener, options) {
        this.element.addEventListener(event, listener, options);
    }
    once(event, listener, options) {
        this.element.addEventListener(event, function() {
            removeEventListener(event, listener, options);
            listener(arguments);
        }, options);
    }
    off(event, listener, options) {
        this.element.removeEventListener(event, listener, options);
    }

// accessors

    // Node

    get getbaseURI() {
        return this.element.getbaseURI;
    }
    get childNodes() {
        return this.element.childNodes;
    }
    get firstChild() {
        return this.element.firstChild;
    }
    get lastChild() {
        return this.element.lastChild;
    }
    get nextSibling() {
        return this.element.nextSibling;
    }
    get nodeName() {
        return this.element.nodeName;
    }
    get nodeType() {
        return this.element.nodeType;
    }
    get nodeValue() {
        return this.element.nodeValue;
    }
    set nodeValue(value) {
        this.element.nodeValue = value;
        return this;
    }
    get ownerDocument() {
        return this.element.ownerDocument;
    }
    get parentNode() {
        return this.element.parentNode;
    }
    get previousSibling() {
        return this.element.previousSibling;
    }
    get textContent() {
        return this.element.textContent;
    }

    // Element

    get attributes() {
        return this.element.attributes;
    }
    get childElementCount() {
        return this.element.childElementCount;
    }
    get children() {
        return this.element.children;
    }
    get classList() {
        return this.element.classList;
    }
    set classList(classes) {
        classes = (typeof classes == "Array") ? classes.join(" ") : classes;
        this.element.classList = value;
    }
    get clientHeight() {
        return this.element.clientHeight;
    }
    get clientWidth() {
        return this.element.clientWidth;
    }
    get clientLeft() {
        return this.element.clientLeft;
    }
    get clientTop() {
        return this.element.clientTop;
    }
    get currentStyle() {    // IE
        return this.element.currentStyle;
    }
    get dataset() {         // attributes data-*:object
        return this.element.dataset;
    }
    get firstElementChild() {
        return this.element.firstElementChild;
    }
    get id() {
        return this.element.id;
    }
    set id(value) {
        this.element.id = value;
        return this;
    }
    get innerHTML() {
        return this.element.innerHTML;
    }
    set innerHTML(value) {
        this.element.innerHTML = value;
    }
    get innerText() {
        return this.element.innerText;
    }
    set innerText(value) {
        this.element.innerText = value;
    }
    get isContentEditable() {
        return this.element.isContentEditable;
    }
    get lang() {
        return this.element.lang;
    }
    set lang(value) {
        this.element.lang = value;
        return this;
    }
    get lastElementChild() {
        return this.element.lastElementChild;
    }
    get localName() {
        return this.element.localName;
    }
    get namespaceURI() {
        return this.element.namespaceURI;
    }
    get nextElementSibling() {
        return this.element.nextElementSibling;
    }
    get offsetHeight() {
        return this.element.offsetHeight;
    }
    get offsetWidth() {
        return this.element.offsetWidth;
    }
    get offsetLeft() {
        return this.element.offsetLeft;
    }
    get offsetTop() {
        return this.element.offsetTop;
    }
    get offsetParent() {
        return this.element.offsetParent;
    }
    get outerHTML() {
        return this.element.outerHTML;
    }
    set outerHTML(value) {
        this.element.outerHTML = value;
        return this;
    }
    get prefix() {
        return this.element.prefix;
    }
    get previousElementSibling() {
        return this.element.previousElementSibling;
    }
    get scrollHeight() {
        return this.element.scrollHeight;
    }
    get scrollWidth() {
        return this.element.scrollWidth;
    }
    get scrollLeft() {
        return this.element.scrollLeft;
    }
    get scrollTop() {
        return this.element.scrollTop;
    }
    get style() {
        return this.element.style;
    }
    set style(value) {
        this.element.style = value;
    }
    get tagName() {
        return this.element.tagName;
    }
    get title() {
        return this.element.title;
    }

//  W3C Element Methods

    // Node

    appendChild(child) {
        return this.element.appendChild(child);
    }
    cloneNode(deep) {
        return this.element.cloneNode(deep);
    }
    compareDocumentPosition(other) {
        return this.element.compareDocumentPosition(other);
    }
    hasChildNodes() {
        return this.element.hasChildNodes();
    }
    insertBefore(newChild, refChild) {
        return this.element.insertBefore(newChild, refChild);
    }
    isDefaultNamespace(namespace) {
        return this.element.isDefaultNamespace(namespace);
    }
    isEqualNode(other) {
        return this.element.isEqualNode(other);
    }
    isSameNode(other) {
        return this.element.isSameNode(other);
    }
    lookupNamespaceURI(prefix) {
        return this.element.lookupNamespaceURI(prefix);
    }
    lookupPrefix(namespace) {
        return this.element.lookupPrefix(namespace);
    }
    normalize() {
        return this.element.normalize();
    }
    removeChild(oldChild) {
        return this.element.removeChild(oldChild);
    }
    replaceChild(oldChild, newChild) {
        return this.element.replaceChild(oldChild, newChild);
    }

    // Element

    blur() {
        this.element.blur();
        return this;
    }
    focus() {
        this.element.focus();
        return this;
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    getAttributeNS(namespace, key) {
        return this.element.getAttributeNS(namespace, key);
    }
    getBoundingClientRect() {
        this.element.getBoundingClientRect();
        return this;
    }
    getClientRects() {
        this.element.getClientRects();
        return this;
    }
    getElementsByClassName(classes) {
        classes = (typeof classses == "Array") ? classes.join(" ") : classes;
        return this.element.getElementsByClassName(classes);
    }
    getElementsByTagName(tag) {
        return this.element.getElementsByTagName(tag);
    }
    getElementsByTagNameNS(namespace, tag) {
        return this.element.getElementsByTagNameNS(namespace, tag);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    hasAttributeNS(namespace, key) {
        return this.element.hasAttribute(namespace, key);
    }
    insertAdjacentHTML(position, text) {
        this.element.insertAdjacentHTML(position, text);
        return this;
    }
    querySelector(selector) {
        this.element.querySelector(selector);
        return this;
    }
    querySelectorAll(selector) {
        this.element.querySelectorAll(selector);
        return this;
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
        return this;
    }
    removeAttribute(namespace, key) {
        this.element.removeAttribute(namespace, key);
        return this;
    }
    scrollIntoView(top) {
        this.element.scrollIntoView(top);
        return this;
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
        return this;
    }
    setAttributeNS(namespace, key, value) {
        this.element.setAttributeNS(key, value);
        return this;
    }
};
