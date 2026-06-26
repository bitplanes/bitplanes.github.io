function fullscreenGame(){

const iframe=document.getElementById("game");

if(iframe.requestFullscreen){

iframe.requestFullscreen();

}else if(iframe.webkitRequestFullscreen){

iframe.webkitRequestFullscreen();

}

}
