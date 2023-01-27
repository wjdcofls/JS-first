const clock = document.querySelector("h2#clock");
//△const clock = document.getElementById("clock");

function getClock() {
  const date = new Date(); //Date Object 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침 하자마자 보이게 하려고
setInterval(getClock, 1000); //function을 정한 시간마다 보여준다

//"1".padstart(2,"0") -> '01'
