console.log("toto");

//--> Lorsque je clique sur l'icone burger,
// le nav-list-mobile apparaît.

// 1- selectionner les éléments nécessaires sous une variable

const icon = document.querySelector('.fa-bars');
const list = document.querySelector('.nav-list-mobile');

// 2- mes éléments apparaissent au click

icon.addEventListener('click', function() {
    //instructions
    list.classList.toggle("list-visible");
    icon.classList.toggle("icon-visible");

})

//Lorsque je clique sur le submitbtn, le texte et le CSS changent.
// 1- je cible mon bouton
const btn = document.querySelector("#submitbtn");

// 2- Réaction au click : modif contenu innerHTML et style
btn.addEventListener('click', function() {
    btn.innerHTML = "Envoyé !";
    btn.style.color = "black";
    btn.style.fontWeight = "0";
    btn.style.fontStyle = "italic";
    btn.style.backgroundColor = "#e8c9cb"
})

// YOUPI ! 
