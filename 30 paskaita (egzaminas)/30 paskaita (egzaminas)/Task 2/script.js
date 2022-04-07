/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonEl = document.getElementById("btn__element");
const buttonElState = document.getElementById("btn__state");
let total = 0;

buttonEl.addEventListener("click", () => {
  total = total + 1;
  // console.log('total ===', total);
  buttonElState.innerHTML = total;
});
