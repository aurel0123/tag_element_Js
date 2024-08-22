let ul = document.querySelector('ul'); 
let input = document.querySelector('input');
let tags = []; 
let countNumber = document.querySelector('span'); 

// Creation de l'etiquette
function createTag() { // supression de tous less li avant l"'ajout d'un autre li 
    ul.querySelectorAll('li').forEach(li => li.remove()); 
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="fa-solid fa-xmark" onclick =" remove(this, '${tag}') "></i></i></li>`
        ul.insertAdjacentHTML("afterbegin", liTag) ; //insertion de la balise li 
    })
    countTag(); 

}

let maxnumber = 10 ; 
countTag(); 
function countTag(){
    input.focus()
    countNumber.innerText = maxnumber - tags.length ; 
}

//function de suppression d'elemnt
function remove(element, tag ){
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0,index), ...tags.slice(index + 1)] ; 
    console.log(tags); 
    element.parentElement.remove(); 
    countTag(); 
}

input.addEventListener('keyup', (e)=>{
    if(e.key == "Enter"){
        //creation d'unvariable qui stocke les donnée inscrire dnans le inputs
        let tag = e.target.value.replace(/\s+/, ' ') ; /*  le methode replace designe que lorsqu'une occurence ou plusiurs 
        occurences d'espace plan sont retouvé dans la chaine qu'il soit remplacé par un vide  */
        if(tag.length > 1 && !tags.includes(tag)){ // cette condition verifie si la valeur de la variable tag est superieure à 1 et si cette valeur est inclure dans la tableau tags 
             if(tags.length < 10){
                tag.split(',').forEach(tag => { // apres chaque valuer inserer mettre un virgule
                    tags.push(tag); // Ajouter la valeur de la variable dans le tableau Tags 
                    createTag();              
                  });
             }
        }
        e.target.value = ''; // vide la valeur de la variable input
    }
    
})
 let removeall = document.querySelector('button') ; 
 removeall.addEventListener('click', () => {
    tags= []; 
    ul.querySelectorAll('li').forEach(li => li.remove()); 
    countTag(); 
 }

)