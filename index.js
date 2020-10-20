function padTime(number) {
  return number < 10 ? '0' + number : number;
}

function getTime() {
  const now = new Date();
  
  return (
    padTime(now.getHours())
    + ':' + padTime(now.getHours())
    + ':' + padTime(now.getSeconds())
    + ':' + padTime(now.getMilliseconds())
  )
}

setInterval(() => {
  document.getElementById('time').innerText = getTime()
}, 50)
