//Lemonades
let lem = 0;
let lemPrice = 30;
function lemonade() {
  if (val >= lemPrice) {
    lem += 1;
    val -= lemPrice;
    lemPrice += lemPrice / 10;
    setInterval(lemRun, 1000);
    setInterval(price, 1);
    document.getElementById("lem").innerHTML = "&nbsp;Lemonades: " + lem;
    document.getElementById("lemPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(lemPrice);
  }
  function lemRun() {
    val += 0.1;
  }
  function price() {
    document.getElementById("lemPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(lemPrice);
  }
}
setInterval(searchLem, 100);
function searchLem() {
  if(val < lemPrice) {
    document.getElementById("lemonade").style.display = "none";
  } else {
    document.getElementById("lemonade").style.display = "block";
  }
  if(lem < 1) {
    document.getElementById("ilemonade").style.display = "none";
  } else {
    document.getElementById("ilemonade").style.display = "block";
  }
}
//Brownies
let brow = 0;
let browPrice = 150;
function brownie() {
  if (val >= browPrice) {
    brow += 1;
    val -= browPrice;
    browPrice += browPrice / 10;
    document.getElementById("brow").innerHTML = "&nbsp;Brownies: " + brow;
    document.getElementById("browPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(browPrice);
    setInterval(browRun, 1000);
    setInterval(price, 1);
  }
  function browRun() {
    val += 1;
  }
  function price() {
    document.getElementById("browPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(browPrice);
  }
}
setInterval(searchBrow, 100);
function searchBrow() {
  if(val < browPrice) {
    document.getElementById("brownie").style.display = "none";
  } else {
    document.getElementById("brownie").style.display = "block";
  }
  if(brow < 1) {
    document.getElementById("ibrownie").style.display = "none";
  } else {
    document.getElementById("ibrownie").style.display = "block";
  }
}
//Wallets
let wall = 0;
let wallPrice = 1000;
function wallet() {
  if(val >= wallPrice) {
    val -= wallPrice;
    wall += 1;
    wallPrice += wallPrice / 10;
    lemPrice *= 2;
    browPrice *= 2;
    add += 6;
    document.getElementById("wall").innerHTML = "&nbsp;Wallets: " + wall;
    document.getElementById("wallPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(wallPrice);
    setInterval(wallRun, 60000);
    setInterval(price, 1);
  }
  function wallRun() {
    val += 10;
  }
  function price() {
    document.getElementById("wallPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(wallPrice);
  }
}
setInterval(searchWall, 100);
function searchWall() {
  if(val < wallPrice) {
    document.getElementById("wallet").style.display = "none";
  } else {
    document.getElementById("wallet").style.display = "block";
  }
  if(wall < 1) {
    document.getElementById("iwallet").style.display = "none";
  } else {
    document.getElementById("iwallet").style.display = "block";
  }
}
//Workers
let work = 0;
let workPrice = 10000;
function worker() {
  if(val >= workPrice) {
    work += 1;
    val -= workPrice;
    workPrice += workPrice / 10;
    setInterval(workRun, 1000);
    setInterval(price, 1);
    document.getElementById("work").innerHTML = "&nbsp;Workers: " + work;
    document.getElementById("workPrice").innerHTML = "&nbsp;Cost in Gold: " + workPrice;
  }
  function workRun() {
    val += 2;
  }
  function price() {
    document.getElementById("workPrice").innerHTML = "&nbsp;Cost in Gold: " + workPrice;
  }
}
setInterval(searchWork, 100);
function searchWork() {
  if(val < workPrice) {
    document.getElementById("worker").style.display = "none";
  } else {
    document.getElementById("worker").style.display = "block";
  }
  if(work < 1) {
    document.getElementById("iworker").style.display = "none";
  } else {
    document.getElementById("iworker").style.display = "block";
  }
}
//Gold Bars
let gold = 0;
let goldPrice = 50000;
function goldBar() {
  if(val >= goldPrice) {
    add += Math.round(Math.random() * 11) + 1;
    val -= goldPrice;
    gold += 1;
    goldPrice += goldPrice / 10;
    setInterval(goldRun, 1000);
    setInterval(price, 1);
    document.getElementById("gold").innerHTML = "&nbsp;Gold Bars: " + gold;
  }
  function goldRun() {
    val += Math.round(Math.random() * 101) + 1;
  }
  function price() {
   document.getElementById("goldPrice").innerHTML = "&nbsp;Cost in Gold: " + goldPrice;
 }
}
setInterval(searchGold, 100);
function searchGold() {
  if(val < goldPrice) {
    document.getElementById("goldBar").style.display = "none";
  } else {
    document.getElementById("goldBar").style.display = "block";
  }
  if(gold < 1) {
    document.getElementById("igold").style.display = "none";
  } else {
    document.getElementById("igold").style.display = "block";
  }
}
//Cell Upgrade, Hacks into CSS property | ONLY PURCHASABLE ONCE |
cell = 0;
cellPrice = 75000;
function cellCursor() {
  if(val >= cellPrice) {
    document.getElementById("body").style.cursor = "cell";
    document.getElementById("Dollar").style.cursor = "cell";
    document.getElementById("cell").style.display = "none";
    val -= cellPrice;
    cell += 1;
    add += 100;
  }
}
setInterval(cellRun, 100);
function cellRun() {
  if(val >= cellPrice && cell < 1) {
    document.getElementById("cell").style.display = "block";
  } else {
    document.getElementById("cell").style.display = "none";
  }
  if(cell >= 1) {
    document.getElementById("icellc").style.display = "block";
  } else {
    document.getElementById("icellc").style.display = "none";
  }
}
