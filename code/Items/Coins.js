//Euro Coin Upgrade.
let euro = 0;
function AddEuro() {
  if(val >= 17886) {
    euro++;
  }
}
setInterval(EuroRun, 100);
function EuroRun() {
  if(val >= 17886 && euro <= 0) {
    document.getElementById("euro").style.display = "block";
  } else {
    document.getElementById("euro").style.display = "none";
  }
  if(euro >= 1) {
    document.getElementById("iEuro").style.display = "block";
  } else {
    document.getElementById("iEuro").style.display = "none";
  }
}
//Copper Coin
let copper = 0;
function AddCopperCoin() {
  if(lem >= 10) {
    copper++;
    lem = 0;
  }
}
setInterval(CopperRun, 100);
function CopperRun() {
  if(lem >= 10 && copper <= 0) {
    document.getElementById("copper").style.display = "block";
  } else {
    document.getElementById("copper").style.display = "none";
  }
  if(copper >= 1) {
    document.getElementById("iCopper").style.display = "block";
  } else {
    document.getElementById("iCopper").style.display = "none";
  }
}