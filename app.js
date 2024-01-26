var time="60";
var score=0;
var hitvar=0;

function mahreen(){
    score+=10
    document.querySelector("#scoreval").textContent=score
}

function hitval(){
    hitvar=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitvar;
}

function marhaba(){
    var cursor=""
  

for(var i=1;i<=119;i++){
    var rn=Math.floor(Math.random()*10)
    cursor +=`<div class="bublle">${rn}</div>`
var topm=document.querySelector(".topm")
topm.innerHTML=cursor 

}

}
function areeba(){
    var timer =setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#nana").textContent=time;
        }
        else{
            clearInterval(timer)
            document.querySelector(".topm").innerHTML=`<h1>GAME OVER</h1>`
        }
    },1000)
}

document.querySelector(".box").addEventListener("click",function(dets){
    var clicker=Number(dets.target.textContent)
    if(clicker===hitvar){
        mahreen()
        hitval()
        areeba()
        marhaba()
    }
})
hitval()
areeba()
marhaba();