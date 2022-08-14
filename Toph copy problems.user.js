// ==UserScript==
// @name         Toph copy problems
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       steinum
// @match        https://toph.co/c/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=toph.co
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var h3 = document.getElementsByTagName('h3')
    for (var i = h3.length - 1; i >= 0; i--) {
        if (h3[i].outerHTML == "<h3>Problems<\/h3>") {
            h3[i].outerHTML = `<button id="myButton">Problems</button>`
        }
    }
    document.getElementById("myButton").addEventListener(
        "click", copy, false
    );
    function copy() {
        var s = "";
        for (const match of document.documentElement.outerHTML.matchAll(/href="\/p\/([^"]*)"/g)) s = s.concat(`Toph | ${match[1]} | 1 | \n`);
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = s;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
})();