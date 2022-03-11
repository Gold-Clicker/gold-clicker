//Lemonades
let lem = 0;
let lemPrice = 10;
function lemonade() {
  if (val >= lemPrice) {
    lem += 1;
    val -= lemPrice;
    lemPrice += lemPrice / 10;
    setInterval(price, 1);
    document.getElementById("lem").innerHTML = "&nbsp;Lemonades: " + lem;
    document.getElementById("lemPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(lemPrice);
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
let browPrice = 100;
function brownie() {
  if (val >= browPrice) {
    brow += 1;
    val -= browPrice;
    browPrice += browPrice / 10;
    document.getElementById("brow").innerHTML = "&nbsp;Brownies: " + brow;
    document.getElementById("browPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(browPrice);
    setInterval(price, 1);
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
let wallPrice = 5000;
function wallet() {
  if(val >= wallPrice) {
    secondaryPowers();
    val -= wallPrice;
    wall += 1;
    wallPrice += wallPrice / 10;
    lemPrice *= 2;
    browPrice *= 2;
    add += 6;
    document.getElementById("wall").innerHTML = "&nbsp;Wallets: " + wall;
    document.getElementById("wallPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(wallPrice);
    setInterval(price, 1);
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
    setInterval(price, 1);
    document.getElementById("work").innerHTML = "&nbsp;Workers: " + work;
    document.getElementById("workPrice").innerHTML = "&nbsp;Cost in Gold: " + workPrice;
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
    secondaryPowers();
    add += Math.round(Math.random() * 11) + 1;
    val -= goldPrice;
    gold += 1;
    goldPrice += goldPrice / 10;
    setInterval(price, 1);
    document.getElementById("gold").innerHTML = "&nbsp;Gold Bars: " + gold;
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
let cryPrice = 100000;
function crypto() {
  if(val >= cryPrice) {
    secondaryPowers();
    add += add / 10;
    val -= cryPrice;
    cry += 1;
    cryPrice -= 10;
    setInterval(price, 100);
    document.getElementById("cry").innerHTML = "&nbsp;Crypto Currencies: " + cry;
  }
  function price() {
    document.getElementById("cryPrice").innerHTML = "&nbsp;Cost in Gold: " + cryPrice;
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
//Thief
let thieves = 0;
let thiefPrice = 150000;
function thief() {
   if(val >= thiefPrice) {
      val -= thiefPrice;
      thieves += 1;
      thiefPrice += thiefPrice / 10;
      setInterval(price, 100);
      document.getElementById("thi").innerHTML = "Thieves: " + thieves;
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
  if(thieves < 1) {
    document.getElementById("ithief").style.display = "none";
  } else {
    document.getElementById("ithief").style.display = "block";
  }
}
//Stock
let stok = 0;
let stockPrice = 375000;
function stock() {
  if(val >= stockPrice) {
    secondaryPowers();
    val -= stockPrice;
    stok += 1;
    add += add / 10;
    stockPrice += stockPrice / 10;
    document.getElementById("sto").innerHTML = "&nbsp;Stocks: " + stok;
    setInterval(price, 100);
  }
  function price() {
    document.getElementById("stockPrice").innerHTML = "Cost in Gold: " + stockPrice;
  }
}
setInterval(searchStock, 100);
function searchStock() {
  if(val < stockPrice) {
    document.getElementById("stock").style.display = "none";
  } else {
    document.getElementById("stock").style.display = "block";
  }
  if(stok < 1) {
    document.getElementById("istock").style.display = "none";
  } else {
    document.getElementById("istock").style.display = "block";
  }
}
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
  document.getElementById("stoPrice").innerHTML = "G" + Math.round(stockPrice);
}
