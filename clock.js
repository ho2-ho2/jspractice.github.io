// html 불러오기
const clock = document.querySelector("#clock");
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//시계 시작(돌리기)
getClock();
//몇초마다 나타날건지 
setInterval(getClock, 1000);