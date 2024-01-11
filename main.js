
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const newDate = '12 Jan 2024 00:00:00';



const  timerSection = ()=>{
    const curentTime = new Date();
    const newTime = new Date(newDate);
    const timeDifference = (newTime - curentTime)/1000;
    
    const days = Math.floor(timeDifference/3600/24);
    const hours = Math.floor(timeDifference/3600) % 24;
    const minutes = Math.floor(timeDifference/60) % 60;
    const seconds = Math.floor(timeDifference) % 60;
    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = timeCorrection(days);
    hoursEl.innerHTML = timeCorrection(hours);
    minutesEl.innerHTML = timeCorrection(minutes);
    secondsEl.innerHTML = timeCorrection(seconds);
}
function timeCorrection(time){
    return time < 10 ? `0${time}` : time 
}
timerSection();
setInterval(timerSection, 1000)