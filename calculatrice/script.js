let valeur1 = '', valeur2 = '', operateur = '', resultat = '';
let entete = document.getElementById("entete");

entete.innerText = '0';

let ajouter = (valeur) =>{
    if (operateur) {       
        valeur2 = valeur2 == '0'? valeur: valeur2+valeur;
        entete.innerText = valeur1+operateur+valeur2;
    }else{
        valeur1 =  valeur1 == '0'? valeur: valeur1+valeur;
        entete.innerText = valeur1;
    }
}

let  executer = (opt)=>{
    if (valeur1) {
        operateur = opt;
        entete.innerText = valeur1 + operateur;
    }
}

let effacer = ()=>{
    if (operateur) {
        if (valeur2) {
            if (valeur2.length > 1) {
                valeur2 = valeur2.substring(0, valeur2.length-1);
                entete.innerText = valeur1+operateur+valeur2;

            }else{
                valeur2 = '';
                entete.innerText = valeur1 + operateur;

            }
        } else {
            operateur = '';
            entete.innerText = valeur1;
        }
    } else {
        
    }
}

