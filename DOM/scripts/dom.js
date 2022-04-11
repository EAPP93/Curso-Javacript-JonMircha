import clockAlarm from './clock_alarm.js';
import hamburgerMenu from './hamburger_menu.js';

document.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".hamburger-menu","#span1","#span2","#span3",".toggle-menu",".toggle-menu a");
    clockAlarm("#clock-alarm","#start-clock","#stop-clock","#start-alarm","#stop-alarm")
})

