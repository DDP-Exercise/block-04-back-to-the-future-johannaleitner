"use strict";

// view, what you see, digital clock

export let digitalView = {
    hour: null, // placeholder for new Date
    minute: null,
    second: null,

    init: function() { // init-function for searching elements from html
        this.hour = document.getElementById('hour');
        this.minute = document.getElementById('minute');
        this.second = document.getElementById('second');
        // this.second = document.getElementById('dots').nextElementSibling; // hätten wir keine IDs, siehe unten
    },

    update: function(hh, mm, ss) { // update-function for updating time
        this.hour.innerText = String(hh).padStart(2, '0');
        this.minute.innerText = String(mm).padStart(2, '0');
        this.second.innerText = String(ss).padStart(2, '0');
    }
}