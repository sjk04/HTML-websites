//digital clock program

function updateclock(){
    const now=new Date();
    const hours=now.getHours().toString();
    const minutes=now.getMinutes().toString();
    const seconds=now.getSeconds().toString();
    const timestamps=`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=timestamps;
}
updateclock();
setInterval(updateclock,1000)