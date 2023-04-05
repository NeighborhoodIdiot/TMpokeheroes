// ==UserScript==
// @name         PH - Easter + Hoopa
// @namespace    https://github.com/NeighborhoodIdiot
// @version      0.1
// @author       You
// @match        https://pokeheroes.com/*
// @downloadURL  https://github.com/NeighborhoodIdiot/TMpokeheroes/blob/master/EasterHoopa.user.js
// @icon         https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/7f/Ducklett.png/revision/latest?cb=20170409032016
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('img').each(function(i){
      var imgSrc = this.src;
        if(imgSrc.indexOf("easter_egg") !== -1){
            this.click()
        }
    });

    var ring = $('img[src="//staticpokeheroes.com/img/quests/hoopa/prison-ring-large.png"]')
    if (ring.length > 0) {
        ring[0].click()
    }

    // Your code here...
})();
