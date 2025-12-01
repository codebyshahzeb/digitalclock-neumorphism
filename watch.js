let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML  = formatTime(currentTime.getHours());
    mins.innerHTML = formatTime(currentTime.getMinutes());
    secs.innerHTML = formatTime(currentTime.getSeconds());
},1000);
