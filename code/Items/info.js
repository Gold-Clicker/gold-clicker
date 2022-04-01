//Store Items
{
  document.getElementById("lemonade").addEventListener("mouseover", () => {
    document.getElementById("ilemonade").style.display = "block";
  });
  
  document.getElementById("brownie").addEventListener("mouseover", () => {
    document.getElementById("ibrownie").style.display = "block";
  });
  
  document.getElementById("wallet").addEventListener("mouseover", () => {
    document.getElementById("iwallet").style.display = "block";
  });
  
  document.getElementById("worker").addEventListener("mouseover", () => {
    document.getElementById("iworker").style.display = "block";
  });
  
  document.getElementById("goldBar").addEventListener("mouseover", () => {
    document.getElementById("igold").style.display = "block";
  });
  
  document.getElementById("crypto").addEventListener("mouseover", () => {
    document.getElementById("icrypto").style.display = "block";
  });
  
  document.getElementById("thief").addEventListener("mouseover", () => {
    document.getElementById("ithief").style.display = "block";
  });
  
  document.getElementById("stock").addEventListener("mouseover", () => {
    document.getElementById("istock").style.display = "block";
  });
}
//"Removing" the info blocks
const nodeList = document.querySelectorAll(".sItem");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener("mouseout", () => {
    
    const nodeList = document.querySelectorAll(".info");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "none";
    }
    
  });
}

//Moving info blocks to mouse cursor Y
function mouseCoords(event) {
  let x = event.clientX;
  let y = event.clientY;
  
  const nodeList = document.querySelectorAll(".info");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.top = y - 5 + "px";
    }
}