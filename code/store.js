//Lemonades
let lem = 0;
let lemPrice = 10;
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
let browPrice = 50;
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
let wallPrice = 100;
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
let workPrice = 500;
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
let goldPrice = 1000;
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
//Crypto
let cry = 0;
let cryPrice = 10000;
function crypto() {
  if(val >= cryPrice) {
    add += add / 10;
    val -= cryPrice;
    cry += 1;
    cryPrice -= 10
    setInterval(cryRun, 1000)
    setInterval(price, 100);
    document.getElementById("cry").innerHTML = "&nbsp;Crypto Currencies: " + cry;
  }
  function price() {
    document.getElementById("cryPrice").innerHTML = "&nbsp;Cost in Gold: " + cryPrice;
  }
  function cryRun() {
    val += val / 100;
  }
}
setInterval(searchCry, 100);
function searchCry() {
  if(val < cryPrice) {
    document.getElementById("crypto").style.display = "none";
  } else {
    document.getElementById("crypto").style.display = "block";
  }
  if(cry < 1) {
    document.getElementById("icrypto").style.display = "none";
  } else {
    document.getElementById("icrypto").style.display = "block";
  }
}
//bubble gum
let gum = 0;
let gumPrice = 10000;
function bubblegum() {
  if(val >= gumPrice) {
    const sure = window.confirm("Are you sure you want too buy this Item?");
    if(sure) {
    gumPrice += gumPrice * gumPrice;
    val -= val * val;
    gum += 1;
    document.getElementById("start").innerHTML = "Negative Money, Is that even possible??!?!?!?!?!?!"
    document.getElementById("bubblegum").style.display = "none"
    } else {
      document.getElementById("start").innerHTML = "Safely avoided unmeasurable apocalypse."
  }
  }
}
setInterval(searchGum, 100);
function searchGum() {
  if(val < gumPrice) {
    document.getElementById("bubblegum").style.display = "none";
  }
}
//Thief
/*
let thief = 0;
let thiefPrice = 50000;
function thief() {
   if(val >= thiefPrice) {
      val -= thiefPrice;
      thief += 1;
      thiefPrice += thiefPrice / 10;
      setInterval(thiefRun, 1000);
      setInterval(price, 100);
      document.getElementById("thi").innerHTML = "Thieves: " + thief;
   }
   function thiefRun() {
      va -= va           l
   }
   function price() {
      document.getElementById("thiefPrice").innerHTML = "Cost in Gold: " + thiefPrice;
   }
}
setInterval(searchThi, 100);
function searchThi() {
  if(val < thiefPrice) {
    document.getElementById("thief").style.display = "none";
  } else {
    document.getElementById("thief").style.display = "block";
  }
  if(thief < 1) {
    document.getElementById("ithief").style.display = "none";
  } else {
    document.getElementById("ithief").style.display = "block";
  }
}
*/
//Price Tags
setInterval(Price, 100);
function Price() {
  document.getElementById("lp").innerHTML = "G" + Math.round(lemPrice);
  document.getElementById("bp").innerHTML = "G" + Math.round(browPrice);
  document.getElementById("walp").innerHTML = "G" + Math.round(wallPrice);
  document.getElementById("worp").innerHTML = "G" + Math.round(workPrice);
  document.getElementById("gp").innerHTML = "G" + Math.round(goldPrice);
  document.getElementById("celp").innerHTML = "G" + Math.round(cellPrice);
  document.getElementById("cryp").innerHTML = "G" + Math.round(cryPrice);
  document.getElementById("thip").innerHTML = "G" + Math.round(thiefPrice); 
}
