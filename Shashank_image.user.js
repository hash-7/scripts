// ==UserScript==
// @name         Shashank_one
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @match        https://www.facebook.com/photo*
// @match        https://www.google.co.in/searc*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var urlid=window.location.href;
        console.log(urlid);
        console.log("sjhasha");
      var a = document.createElement('a');
a.href = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png";
a.download = "output.jpeg";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
  
})();