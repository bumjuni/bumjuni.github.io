const calender = document.querySelector("#calender");
const clock = document.querySelector("#clock");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getClock(){
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth()).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const day = week[today.getDay()];
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    calender.innerText = `${year}-${month}-${date} ${day}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);