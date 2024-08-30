var timer = 60;
var score = 0;
var hitrn = 0;

function increase_Score(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter="";

    for(var i=1;i<=162;i++){
    
    var rn = Math.floor(Math.random()*10);
    clutter +=  `<div id="bubble">${rn}</div>`;
    
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerInt = setInterval(function(){
        if(timer > 0){
         timer--;
         document.querySelector("#tvalue").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
       
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function (dets){
   var clickednumber = Number(dets.target.textContent);
   if(clickednumber === hitrn){
    increase_Score();
    makeBubble();
    getNewHit();
   }

})
runTimer();
makeBubble();
getNewHit();
  



