////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let val = 0;
let add = 1;
let tot = 0;
document.getElementById("start").addEventListener("click", increment);
function increment() {
  val += val * 100;
  add += 100;
}
function upFunction() {
  let op = "1";
  val += add;
  add += 0.01;
  tot += 1;
  document.getElementById("Add").style.opacity = "1";
  document.getElementById("Add").innerHTML = Math.round(add);
  document.getElementById("clicks").innerHTML = "&nbsp;Total Clicks: " + tot;
  setTimeout(fade, 100);
  function fade() {
    document.getElementById("Add").innerHTML = " ";
  }
}

function up() {
  val += add / 1000;
  document.getElementById("Add").innerHTML = add / 100;
  setTimeout(fade, 100);
  function fade() {
    document.getElementById("Add").innerHTML = " ";
  }
}


      
setInterval(update, 10);
function update() {
  document.getElementById("counter").innerHTML = Math.round((val + Number.EPSILON) * 100) / 100;
}

//Stats
setInterval(stats, 100);
function stats() {
  document.getElementById("cps").innerHTML = "&nbsp;Gold per click: " +  Math.round((add + Number.EPSILON) * 100) / 100;
  document.getElementById("val").innerHTML = "&nbsp;Gold Made Currently: " +  Math.round((val + Number.EPSILON) * 100) / 100;
  document.getElementById("clicks").innerHTML = "&nbsp;Total Clicks: " +  Math.round((tot + Number.EPSILON) * 100) / 100;
  document.getElementById("gps").innerHTML = "&nbsp;Gold per Second (GpS): " + Effect;
}
