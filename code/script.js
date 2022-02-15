function warn() {
  return "WARNING: You will lose your progress:";
}
//I May or May not update to have multiple JS files
let val = 0;
let add = 1;

function upFunction() {
  val += add;
  document.getElementById("add").innerHTML = add;
  setTimeout(fade, 100);
  function fade() {
    document.getElementById("add").innerHTML = " ";
  }
}

setInterval(update, 1);
function update() {
  document.getElementById("counter").innerHTML = Math.round(val);
}
//Silly Messages
setInterval(one, 0.0000000000000000000000000000000000000000000000000001);
function one() {
  if (val >= 1 && val < 100) {
    document.getElementById("start").innerHTML = "You slowly gain money.";
  }
}

setInterval(hundred, 0.000000000000000000000000000000000000000000000001);
function hundred() {
  if(val > 100 && val < 1000) {
    document.getElementById("start").innerHTML = "You are now the richest kid in the school.";
  }
}

setInterval(thousand, 100);
function thousand() {
  if(val > 1000 && val < 10000) {
    document.getElementById("start").innerHTML = "People start to try and steal your money.";
  }
}
//Stats
setInterval(stats, 100);
function stats() {
  document.getElementById("cps").innerHTML = "&nbsp;Gold per click: " + add;
  document.getElementById("val").innerHTML = "&nbsp;Gold Made Currently: " + val;
}
//Store TABS
let newsVal = 0;
let News = "&nbsp;What's New? (Alpha 1):<br>&nbsp;&nbsp;-Item Prices Are HIGHER<br>&nbsp;&nbsp;-This Update Tab<br>&nbsp;&nbsp;-Style fixed (Wallet Still not fixed)<br>&nbsp;&nbsp;-Shows Gold per Click when you click on the G<br>&nbsp;&nbsp;-Gold button is Gold and says G<br>&nbsp;What will be in the NEXT UPDATE (Alpha 2):<br>&nbsp;&nbsp;-Fix Wallet Button&nbsp;&nbsp;-Tabs instead of split-screen<br>&nbsp;&nbsp;-More Items<br>&nbsp;&nbsp;-Achievements<br>";
function showNews() {
  if(newsVal <= 0) {
    document.getElementById("Updates").innerHTML = News;
    newsVal = 1;
  } else {
    document.getElementById("Updates").innerHTML = " ";
    newsVal = 0;
  }
}
