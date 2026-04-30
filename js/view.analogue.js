"use strict";

// view = what you see, analogue clock

export let analogueView = {
    hourHand: null, // placeholder
    minuteHand: null,
    secondHand: null,

    init: function() { // init-function for searching elements from html
        this.hourHand = document.getElementById('hour-hand');
        this.minuteHand = document.getElementById('minute-hand');
        this.secondHand = document.getElementById('second-hand');
    },

    update: function (hh, mm, ss) { // update-function for updating time
        const secondsDegree = ss * 6; // not all-capitals; changes in function every second
        const minutesDegree = mm * 6 + (ss * 0.1); // smooth transition
        const hoursDegree = (hh % 12) * 30 + (mm * 0.5);

        this.hourHand.style.transform = `translateX(-50%) rotate(${hoursDegree}deg)`;
        this.minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`;
        this.secondHand.style.transform = `translateX(-50%) rotate(${secondsDegree}deg)`;
    }
}