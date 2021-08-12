// ==UserScript==
// @name         Issue number display
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Displays issue numbers to be consistent with http://www.mwq.dds.nl/ns/results/ on the button
// @author       Seanat
// @match        https://www.nationstates.net/page=show_dilemma/dilemma=*
// @icon         https://www.google.com/s2/favicons?domain=nationstates.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var buttons = document.getElementsByClassName("button big icon approve");

    for(var button of buttons) {
        button.innerText = String(Number(button.name.substring(7)) + 1) ;
    };

})();
