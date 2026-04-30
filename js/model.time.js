"use strict";

// model = the brain, in this task only used for saving time

// welche daten braucht die uhr; stunden, min, sec. dafür functions machen
// zbd update time function; siehe setintervall oder so

// nicht nur KI fragen; allg. research! normaler prozess, research >> tatsächliche zeit beim schrieben des programm

// export let, und get functions mit this; pretty much; is ned viel

export let timeModel = {
        getCurrentTime: function(){
            return new Date();
        },
        getHour: function(){
            return this.getCurrentTime().getHours();
        },
        getMinute: function(){
            return this.getCurrentTime().getMinutes();
        },
        getSecond: function(){
            return this.getCurrentTime().getSeconds();
        }
}

