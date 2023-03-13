const countdown = () => {
    const currentDate = new Date();
    const targetDate = new Date("2023-06-10T06:00:00");
  
    const totalSeconds = (targetDate - currentDate) / 1000;
  
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  };
  
  countdown();
  setInterval(countdown, 1000);
  