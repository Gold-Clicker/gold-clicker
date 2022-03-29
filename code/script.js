function warn() {
  return "Warning";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let val = 0;
let add = 1;
let tot = 0;
function upFunction() {
  val += add;
  add += 0.01;
  tot += 1;
  document.getElementById("add").innerHTML = Math.round(add);
  document.getElementById("clicks").innerHTML = "&nbsp;Total Clicks: " + tot;
  setTimeout(fade, 100);
  function fade() {
    document.getElementById("add").innerHTML = " ";
  }
}

function up() {
  val += add / 1000;
  document.getElementById("add").innerHTML = add / 100;
  setTimeout(fade, 100);
  function fade() {
    document.getElementById("add").innerHTML = " ";
  }
}

setInterval(update, 1);
function update() {
  document.getElementById("counter").innerHTML = Math.round(val);
}
//Stats
setInterval(stats, 100);
function stats() {
  document.getElementById("cps").innerHTML = "&nbsp;Gold per click: " + add;
  document.getElementById("val").innerHTML = "&nbsp;Gold Made Currently: " + val;
}
