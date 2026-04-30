"use strict";

// controller = the connector

import { timeModel } from "./model.time.js";
import { analogueView } from "./view.analogue.js";
import { digitalView } from "./view.digital.js";

// initialize the views
analogueView.init();
digitalView.init();

function tick() {
    const hh = timeModel.getHour();
    const mm = timeModel.getMinute();
    const ss = timeModel.getSecond();

    // Update both views
    analogueView.update(hh, mm, ss);
    digitalView.update(hh, mm, ss);
}

/*******************************************************
 *     Back to the Future - 100p
 *
 *     Marty! Marty can you read me? This is Doc Brown,
 *     im messaging you from the Year of 1955!
 *
 *     The Flux Capacitor worked and I traveled back in time!
 *     I don't have time to explain all the details, but
 *     time itself is of the essence Marty! As proud as I am
 *     of my achievement, it seems like I can't come back to
 *     the future. At least not without your help!
 *
 *     Do you remember the Wrist-watch I gave you? You need
 *     to sync its hands to match the digital clock of the
 *     Delorean! Only when they are perfectly in sync, the
 *     Flux Capacitor can bring me back to 1985!
 *
 *     I think it's best to create a model first, which keeps
 *     track of the true time. Once we got that, we can sync
 *     the two clocks in separate views. Yours, analogue and
 *     animated, mine digital. Use this controller file to
 *     glue everything together!
 *
 *     Our clocks should be synced in no-time! Got it?
 *     No - Time! *laughs nervously*. Unfortunatley, I only
 *     have enough fuel for one ride. So we need to be 100%
 *     certain that it works. I'd suggest you add a button somewhere
 *     that saves the current time into the localStorage.
 *
 *     Now hurry Marty! Or I will be stuck in the past forever!
 *
 *     Doc Brown - 1955-11-05
 *******************************************************/

// HINT:
// setInterval(functionName, 1000); will call functionName() every 1000 miliseconds; kannst noch selber definieren die function; diese function wird alle 10000 millisekunden ausgeführt

// start the clock
setInterval(tick, 1000);
tick(); // run immediately so there's no 1-second delay

// LocalStorage feature for Doc Brown
document.getElementById('save-time').addEventListener('click', () => {
    const timestamp = timeModel.getCurrentTime().toISOString();
    localStorage.setItem('savedTemporalEvent', timestamp);
    alert("Time saved to localStorage! The future is protected.");
});