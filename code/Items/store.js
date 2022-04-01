//Lemonades
let lem = 0;
let lemPrice = 10;
function lemonade() {
  if (val >= lemPrice) {
    lem++;
    val -= lemPrice;
    lemPrice += lemPrice / 10;
  }
}

setInterval(searchLem, 100);
function searchLem() {
  if(val < lemPrice) {
    document.getElementById("lemonade").style.opacity = "0.5";
  } else {
    document.getElementById("lemonade").style.opacity = "1";
  }
}
//Brownies
let brow = 0;
let browPrice = 100;
function brownie() {
  if (val >= browPrice) {
    brow++;
    val -= browPrice;
    browPrice += browPrice / 10;
  }
}
setInterval(searchBrow, 100);
function searchBrow() {
  if(val < browPrice) {
    document.getElementById("brownie").style.opacity = "0.5";
  } else {
    document.getElementById("brownie").style.opacity = "1";
  }
}
//Wallets
let wall = 0;
let wallPrice = 500;
function wallet() {
  if(val >= wallPrice) {
    secondaryPowers();
    val -= wallPrice;
    wall += 1;
    wallPrice += wallPrice / 10;
    lemPrice *= 2;
    browPrice *= 2;
  }
}
setInterval(searchWall, 100);
function searchWall() {
  if(val < wallPrice) {
    document.getElementById("wallet").style.opacity = "0.5";
  } else {
    document.getElementById("wallet").style.opacity = "1";
  }
}
//Workers
let work = 0;
let workPrice = 1000;
function worker() {
  if(val >= workPrice) {
    work++;
    val -= workPrice;
    workPrice += workPrice / 10;
  }
}
setInterval(searchWork, 100);
function searchWork() {
  if(val < workPrice) {
    document.getElementById("worker").style.opacity = "0.5";
  } else {
    document.getElementById("worker").style.opacity = "1";
  }
}
//Gold Bars
let gold = 0;
let goldPrice = 5000;
function goldBar() {
  if(val >= goldPrice) {
    secondaryPowers();
    add += Math.round(Math.random() * 11) + 1;
    val -= goldPrice;
    gold += 1;
    goldPrice += goldPrice / 10;
 }
}
setInterval(searchGold, 100);
function searchGold() {
  if(val < goldPrice) {
    document.getElementById("goldBar").style.opacity = "0.5";
  } else {
    document.getElementById("goldBar").style.opacity = "1";
  }
}
//Crypto
let cry = 0;
let cryPrice = 15000;
function crypto() {
  if(val >= cryPrice) {
    secondaryPowers();
    add += add / 10;
    val -= cryPrice;
    cry += 1;
    cryPrice += tot + add;
  }
}
setInterval(searchCry, 100);
function searchCry() {
  if(val < cryPrice) {
    document.getElementById("crypto").style.opacity = "0.5";
  } else {
    document.getElementById("crypto").style.opacity = "1";
  }
}
//Thief
let thieves = 0;
let thiefPrice = 75000;
function thief() {
   if(thieves <= 0) {
     fakeThief();
   } else {
     trueThief();
   }
}
function fakeThief() {
  if(confirm("Thieves will take your money and the government will stop working with you if you are working with them.")) {
     trueThief();
   }
}
function trueThief() {
   if(val >= thiefPrice) {
      val -= thiefPrice;
      thieves += 1;
      thiefPrice += thiefPrice / 10;
      if(govt >= 1) {
        bond = false;
        govt = 0;
      }
   }
}
setInterval(searchThi, 100);
function searchThi() {
  if(val < thiefPrice) {
    document.getElementById("thief").style.opacity = "0.5";
  } else {
    document.getElementById("thief").style.opacity = "1";
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
  }
}
setInterval(searchStock, 100);
function searchStock() {
  if(val < stockPrice) {
    document.getElementById("stock").style.opacity = "0.5";
  } else {
    document.getElementById("stock").style.opacity = "1";
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
