export default function clockAlarm(clockAlarm,starClock,stopClock,startAlarm,stopAlarm){

    let clockInterval,alarmTimeOut;
    document.addEventListener("click", e =>{
        if(e.target.matches(starClock) ){
            clockInterval = setInterval((e) => {
                let day = new Date().toLocaleTimeString();
                document.getElementById("clock-alarm").innerHTML = `<h3>${day}</h3>`;
            } ,1000)
            e.target.disabled = true;
        }

        if(e.target.matches(stopClock)){
            clearInterval(clockInterval);
            document.getElementById("clock-alarm").innerHTML = null;
            document.querySelector(starClock).disabled = false;
        }

    })

}