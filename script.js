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