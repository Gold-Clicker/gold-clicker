 //Cell Upgrade, Hacks into CSS property | ONLY PURCHASABLE ONCE |-------------------------------------------------------------------------
let cell = 0;
let cellPrice = 5000;
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
//Baby Seeno upgrade, Decreases Lemonade Price, +50 GpS-----------------------------------------------------------------------------------
let seeno = 0;
document.getElementById("iseeno").style.display = "none";
function BabySeeno() {
   if(lem >= 1 && work >= 1) {
      lem -= 1;
      work -= 1;
      seeno++;
      lemPrice /= 2;
      add += lem + work;
      document.getElementById("seeno").style.display = "none";
      document.getElementById("iseeno").style.display = "block";
      setInterval(up, 1000);
      const sound = document.getElementById("mseeno");
      sound.play();
   }
   function up() {
      val += lem + work;  
   }
}
setInterval(seenoRun, 100);
function seenoRun() {
   if(lem >= 1 && work >= 1 && seeno < 1)  {
      document.getElementById("seeno").style.display = "block";
   }  else {
      document.getElementById("seeno").style.display = "none";
   }
}
//Government Funding
let govt = 0;
let bond = true;
function AddGov() {
  if(add > 500) {
    govt++;
  }
}
setInterval(GovtRun, 100);
function GovtRun() {
  if(add >= 500 && govt <= 0) {
    document.getElementById("gov").style.display = "block";
  } else {
    document.getElementById("gov").style.display = "none";
  }
  if(govt >= 1) {
    document.getElementById("igov").style.display = "block";
  } else {
    document.getElementById("igov").style.display = "none";
  }
}