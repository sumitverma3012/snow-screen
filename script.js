function createDynamicSnowFlakes(){
    const snow = document.createElement('i');
    snow.classList.add('fas');
    snow.classList.add('fa-snowflake');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.fontSize = (Math.random() * 10) + 10 + 'px';
    snow.style.animationDuration = (Math.random() * 3) + 2 + 's';
    snow.style.opacity = Math.random();
    snow.style.zIndex = 2;
    document.body.appendChild(snow);
    setTimeout(() => {
        snow.remove()
    }, 3000)
}



// ======== Work in progress ======== 
function checkDateInPastOrNot(future) {
    const futureDate = new Date(future);
    const currentDate = new Date();
    let futureDateInUTC;
    
    const dateDiff = Date.parse(futureDate) - Date.parse(currentDate);
    if(dateDiff > 0) {
        futureDateInUTC = Date.UTC(futureDate.getFullYear(), futureDate.getMonth(), futureDate.getDate(), futureDate.getHours(), futureDate.getMinutes(), futureDate.getSeconds());
    } 
    const currentDateInUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    
    return {
        futureDateInUTC,
        currentDateInUTC
    }
}

function dateCounter() {
    const {futureDateInUTC, currentDateInUTC} = checkDateInPastOrNot("December 24, 2021 23:59:59");
    const difference = futureDateInUTC - currentDateInUTC;
    const seconds = Math.floor((difference/1000) % 60 );
    const minutes = Math.floor((difference/1000/60) % 60 );
    const hours = Math.floor( (difference/(1000*60*60)) % 24 );
    const days = Math.floor( (difference)/(1000*60*60*24) );
    return {
        days,
        hours,
        minutes,
        seconds
    }
} 

function displayClock() {
    const {
        days,
        hours,
        minutes,
        seconds
    } = dateCounter();
    const timeDiv = document.createElement('div');
    timeDiv.innerHTML = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    timeDiv.classList.add('timeDiv');
    
    const dateDiv = document.createElement('div');
    dateDiv.innerHTML =`${days} Days to go`
    dateDiv.classList.add('dateDiv');
    
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv');
    containerDiv.appendChild(timeDiv);
    containerDiv.appendChild(dateDiv);
    containerDiv.style.zIndex = 1;
    document.body.appendChild(containerDiv);
}

// displayClock();
setInterval(createDynamicSnowFlakes, 100)