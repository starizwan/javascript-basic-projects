const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


function countdown() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    const newYear = `1 Jan ${currentYear + 1}`

    const newYearsDate = new Date(newYear)
    var timeMilli = (newYearsDate - currentDate)

    var seconds = Math.floor(timeMilli / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds = seconds % (minutes * 60);
    minutes = minutes % (hours * 60);
    hours = hours % (days * 24);

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return (time < 10) ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000);