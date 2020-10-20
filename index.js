import * as iq from 'image-q'

{
function padTime(number) {
  return number < 10 ? '0' + number : number;
};

function getTime() {
  const now = new Date();
  
  return (
    padTime(now.getHours())
    + ':' + padTime(now.getHours())
    + ':' + padTime(now.getSeconds())
    + ':' + padTime(now.getMilliseconds())
  )
};

setInterval(() => {
  document.getElementById('time').innerText = getTime()
}, 50);
}

function setPallete(points) {
  points.forEach((point, index) => {
    document.getElementById(`color-${index}`).style.backgroundColor
      = `rgb(${point.r}, ${point.g}, ${point.b})`
  });

  document.getElementById('loader-wrapper').style.display = 'none'
  document.getElementById('colors-wrapper').style.display = 'block'
  document.getElementById('image-link').style.display = 'block'
}
