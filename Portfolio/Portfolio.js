                                              //Fonction qui permet au barre de progression de se remplir progressivement
window.onscroll = function() {progression() };
function progression(){
    if (document.body.scrollTop>1500 || document.documentElement.scrollTop>1500){
    document.getElementById("progression_barre_50").style.width= "50%";
    document.getElementById("progression_barre_40").style.width= "40%";
    document.getElementById("progression_barre_75").style.width= "75%";
}
}
                                              //Fonction de défilement pour les boutons du menu burger
function defilementpropos(){
  window.scroll(0,630)
}
function defilementcnam(){
  window.scroll(0,1850)
}
function defilementprojet(){
  window.scroll(0,2900)
}
function defilementcontact(){
  window.scroll(0,3806)
}




                        //Fonction qui permet de faire apparaitre une barre noir quand on passe la souris sur un lien dans le menu burger
function barre(){
document.getElementById("propos").style.borderLeft="solid black 3px";
document.getElementById("propos").style.cursor="pointer";
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