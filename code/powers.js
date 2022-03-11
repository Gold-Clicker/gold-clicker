setInterval(Powers, 1000);
function Powers() {
  val += lem / 10;
  const lemEffect = lem / 10;
  
  val += brow;
  const browEffect = brow;
  
  val += wall * 1.67;
  add += wall * 5;
  const wallEffect = wall * 1.67; 
  
  val += work * 2;
  const workEffect = work * 2;
  
  val += Math.round(Math.random() * gold);
  add += Math.round(Math.random() * gold);
  const goldEffect = Math.round(Math.random() * gold);
  
  val += val / 100 * cry;
  add += val / 10 * cry;
  const cryEffect = val / 100 * cry;
  
  val += work * 2 / 2 * thieves;
  val -= val / 1000 * thieves;
  const thiefEffect = work * 2 / 2 * thieves;
  
  val += tot * stok;
  add += val / 100 * stok;
  const stokEffect = tot * stok;
  
  const Effect = lemEffect + browEffect + wallEffect + workEffect + goldEffect + cryEffect + thiefEffect + stokEffect;
  
  document.getElementById("gps").innerHTML = "&nbsp;Gold per Second (GpS): " + Effect;
}
function secondaryPowers() {
  add += val / 100 * stok;
  add += val / 10 * cry;
  add += Math.round(Math.random() * gold);
  add += wall * 5;
}