//achieve.js will also have hacks.

//hacks

//rebirth

//Silly Messages
const start = document.getElementById("start");
setInterval(one, 0.0000000000000000000000000000000000000000000000000001);
function one() {
  if (val >= 1 && val < 100) {
    document.getElementById("start").innerHTML = "You slowly gain money.";
  }
}

setInterval(hundred, 0.0000000000000000000000000000000000000000000000001);
function hundred() {
  if(val >= 100 && val <= 1000) {
    document.getElementById("start").innerHTML = "You are now the richest kid in the school.";
  }
}

setInterval(thousand, 100);
function thousand() {
  if(val >= 1000 && val < 10000) {
    document.getElementById("start").innerHTML = "People start to try and steal your money.";
    document.getElementById("start").style.color = "blue";
  }
}

setInterval(tenfold, 100);
function tenfold() {
  if(val >= 10000 && val < 100000) {
    document.getElementById("start").innerHTML = "You have the average income of an athlete.";
    document.getElementById("start").style.color = "purple";
  }
}

setInterval(hunid, 100);
function hunid() {
  if(val >= 100000 && val < 1000000) {
    document.getElementById("start").innerHTML = "WHAT! ONLY One Hundred Grand? do better...";
    document.getElementById("start").style.color = "green";
  }
}

setInterval(million, 100);
function million() {
  if(val >= 1000000 && val < 10000000) {
    document.getElementById("start").innerHTML = "One hundred million silver coins is equal to One Million Gold Coins";
    document.getElementById("start").style.color = "yellow";
  }
}

setInterval(tenMillion, 100);
function tenMillion() {
  if(val >= 10000000 && val < 100000000) {
    document.getElementById("start").innerHTML = "As if One Million Gold Coins wasn't enough...";
    document.getElementById("start").style.color = "orange";
  }
}

setInterval(hMillion, 100);
function hMillion() {
   if(val >= 100000000 && val < 1000000000) {
      document.getElementById("start").innerHTML = "One...Hundred...Million...";
      document.getElementById("start").style.color = "#1fdbd5";
   }
}

setInterval(BILLION, 100);
function BILLION() {
   if(val >= 1000000000 && val < 10000000000) {
      start.innerHTML = "Great Job, One Billion *Happiness*";
      start.style.color = "red";
   }
}


setInterval(billionTen, 100);
function billionTen() {
   if(val >= 10000000000 && val < 100000000000) {
      start.innerHTML = "What do you plan on doing with the money?";
      start.style.color = "#301e1d";
   }
}






setInterval(Infinite, 100);
function Infinite() {
  if(val >= Infinity) {
    setTimeout(error, 100);
    start.innerHTML = "?!ERROR?!";
  }
  function error() {
    start.innerHTML = "?!ERROR?!";
    setTimeout(reset, 10000);
  }
}
