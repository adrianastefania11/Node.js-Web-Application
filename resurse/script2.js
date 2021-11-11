window.onload = function(){
  document.body.addEventListener("click", function(event) {
    var _div = document.createElement("div");
    document.body.appendChild(_div);
    _div.classList.add("animat");
    var stil=getComputedStyle(_div);
    
    _div.style.backgroundColor="orange";
  
    _div.style.position = "absolute";
    _div.style.left = event.clientX -parseInt(stil.width)/2 +"px";
    _div.style.top = event.clientY -parseInt(stil.height)/2 +"px";
    //alert(event.clientX + ' ' + event.clientY);
    var nr = Math.random();//nr random intre 0 si 1 (fara 1)
    
    if(nr < 0.5)
    _div.style.animationName = "miscare1";
    else
    _div.style.animationName = "miscare2";
    
    _div.onclick = function(event){
      event.stopPropagation();
    }
  })


}