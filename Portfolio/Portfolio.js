window.onscroll = function() {progression() };
function progression(){
    if (document.body.scrollTop>1500 || document.documentElement.scrollTop>1500){
    document.getElementById("progression_barre_50").style.width= "50%";
    document.getElementById("progression_barre_40").style.width= "40%";
    document.getElementById("progression_barre_75").style.width= "75%";
}
}
function barre(){
document.getElementById("propos").style.borderLeft="solid black 3px";
}
function remove(){
    document.getElementById("propos").style.borderLeft="solid black 0px"
}
let test = document.getElementById("test");

// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
test.addEventListener("mouseenter", function( event ) {
  // on met l'accent sur la cible de mouseenter
  event.target.style.color = "purple";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.borderLeft="solid black 0px";
  }, 500);
}, false);