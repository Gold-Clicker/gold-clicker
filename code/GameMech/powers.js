function Powers() {
let lemEffect = lem / 10;
let browEffect = brow;
let wallEffect = wall * 1.67; 
let workEffect = work * 2;
let goldEffect = Math.round(Math.random() * gold);
let cryEffect = val / 100 * cry;
let thiefEffect = work * 2 / 2 * thieves;
let stokEffect = tot * stok;
  
let Effect = lemEffect + browEffect + wallEffect + workEffect + goldEffect + cryEffect + thiefEffect + stokEffect;
  val += Effect;
  document.getElementById("gps").innerHTML = "&nbsp;Gold per Second: " + Effect;
  setTimeout(() => {
    Powers();
  }, 1000);
}
Powers();

function upgradePow() {
  val += (lem + work) * seeno;
}
function CoinPower() {
  const step = () => {
    requestAnimationFrame(() => {
      val += (euro) / 100;
      step();
    });
  }
  step();
}
function secondaryPowers() {
  add += val / 100 * stok;
  add += val / 10 * cry;
  add += Math.round(Math.random() * gold);
  add += wall * 5;
}