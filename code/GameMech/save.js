function save() {
  const step = () => {
  //general stuff
  window.localStorage.setItem("val", val);
  window.localStorage.setItem("add", add);
  window.localStorage.setItem("tot", tot);

  //items
  window.localStorage.setItem("lem", lem);
  window.localStorage.setItem("brow", brow);
  window.localStorage.setItem("wall", wall);
  window.localStorage.setItem("work", work);
  window.localStorage.setItem("gold", gold);
  window.localStorage.setItem("cry", cry);
  window.localStorage.setItem("thieves", thieves);
  window.localStorage.setItem("stok", stok);
  
  //item prices
  window.localStorage.setItem("lemPrice", lemPrice);
  window.localStorage.setItem("browPrice", browPrice);
  window.localStorage.setItem("wallPrice", wallPrice);
  window.localStorage.setItem("workPrice", workPrice);
  window.localStorage.setItem("goldPrice", goldPrice);
  window.localStorage.setItem("cryPrice", cryPrice);
  window.localStorage.setItem("thiefPrice", thiefPrice);
  window.localStorage.setItem("stokPrice", stockPrice);

  //upgrades
  window.localStorage.setItem("cell", cell);
  window.localStorage.setItem("seeno", seeno);
  window.localStorage.setItem("govt", govt); 
    //Coin Upg
  window.localStorage.setItem("euro", euro);
  window.localStorage.setItem("copper", copper);
  
  showValues();
    requestAnimationFrame(() => {
      step();
    });
  }
  step();
}

function showValues() {
  document.getElementById("lem").innerHTML = "&nbsp;Lemonades: " + lem;
  document.getElementById("brow").innerHTML = "&nbsp;Brownies: " + brow;
  document.getElementById("wall").innerHTML = "&nbsp;Wallets: " + wall;
  document.getElementById("work").innerHTML = "&nbsp;Workers: " + work;
  document.getElementById("gold").innerHTML = "&nbsp;Gold Bars: " + gold;
  document.getElementById("cry").innerHTML = "&nbsp;Crypto Currencies: " + cry;
  document.getElementById("thi").innerHTML = "&nbsp;Thieves: " + thieves;
  document.getElementById("sto").innerHTML = "&nbsp;Stocks: " + stok;
  
  document.getElementById("lemPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(lemPrice);
  document.getElementById("browPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(browPrice);
  document.getElementById("wallPrice").innerHTML = "&nbsp;Cost in Gold: " + Math.round(wallPrice);
  document.getElementById("workPrice").innerHTML = "&nbsp;Cost in Gold: " + workPrice;
  document.getElementById("goldPrice").innerHTML = "&nbsp;Cost in Gold: " + goldPrice;
  document.getElementById("cryPrice").innerHTML = "&nbsp;Cost in Gold: " + cryPrice;
  document.getElementById("thiefPrice").innerHTML = "Cost in Gold: " + thiefPrice;
  document.getElementById("stockPrice").innerHTML = "Cost in Gold: " + stockPrice;
}

function load() {
  document.getElementById("Blanket").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("Blanket").style.display = "none";
  }, 1000);
  
  val = Number(localStorage.getItem("val"));
  add = Number(localStorage.getItem("add"));
  tot = Number(localStorage.getItem("tot"));
  
  lem     = Number(localStorage.getItem("lem"));
  brow    = Number(localStorage.getItem("brow"));
  wall    = Number(localStorage.getItem("wall"));
  work    = Number(localStorage.getItem("work"));
  gold    = Number(localStorage.getItem("gold"));
  cry     = Number(localStorage.getItem("cry"));
  thieves = Number(localStorage.getItem("thieves"));
  stok    = Number(localStorage.getItem("stok"));
  
  lemPrice   = Number(localStorage.getItem("lemPrice"));
  browPrice  = Number(localStorage.getItem("browPrice"));
  wallPrice  = Number(localStorage.getItem("wallPrice"));
  workPrice  = Number(localStorage.getItem("workPrice"));
  goldPrice   = Number(localStorage.getItem("goldPrice"));
  cryPrice   = Number(localStorage.getItem("cryPrice"));
  thiefPrice = Number(localStorage.getItem("thiefPrice"));
  stokPrice  = Number(localStorage.getItem("stokPrice"));
  
  cell  = Number(localStorage.getItem("cell"));
  seeno = Number(localStorage.getItem("seeno"));
  govt  = Number(localStorage.getItem("govt"));
    euro = Number(localStorage.getItem("euro"));
    copper = Number(localStorage.getItem("copper"));
  
  if(cell >= 1) {
    document.getElementById("body").style.cursor = "cell";
    document.getElementById("Dollar").style.cursor = "cell";
  }
  if(!bond) {
    govt = 0;
    document.getElementById("igov").innerHTML = "You have displeased Us.";
  }
  save();
  CoinPower();
}
function reset() {
  let superWarning = "This will PERMANENTLY ERASE all of your Progress.";
  if(confirm(superWarning) == true) {
    val = 0;
    add = 1;
    tot = 0;
    
    lem = 0;
    brow = 0;
    wall = 0;
    work = 0;
    gold = 0;
    cry = 0;
    thieves = 0;
    stok = 0;
    
    lemPrice = 10;
    browPrice = 100;
    wallPrice = 5000;
    workPrice = 10000;
    goldPrice = 50000;
    cryPrice = 100000;
    thiefPrice = 150000;
    stokPrice = 375000;
    
    cell = 0;
    seeno = 0;
    govt = 0;
     
    euro = 0;
    copper = 0;
    localStorage.clear();
    start.innerHTML = "Start Clicking!";
    start.style.color = "cyan";
  }
}