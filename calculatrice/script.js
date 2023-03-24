let valeur1 = '', valeur2 = '', operateur = '', resultat = '';
let entete = document.getElementById("entete");

entete.innerText = '0';

let ajouter = (valeur) =>{
    if (!resultat) {
        if (operateur) {       
            valeur2 = valeur2 == '0'? valeur: valeur2+valeur;
            entete.innerText = valeur1+operateur+valeur2;
        }else{
            valeur1 =  valeur1 == '0'? valeur: valeur1+valeur;
            entete.innerText = valeur1;
        }
    }

    
}

let  executer = (opt)=>{
    if(resultat){
        valeur1 = resultat;
        resultat = '';
        valeur2 = '';
        operateur = opt;
        entete.innerText = valeur1 + operateur;
    }else if (valeur1) {
        operateur = opt;
        entete.innerText = valeur1 + operateur;
    }
}

let effacer = ()=>{
    if (resultat) {
        resultat = '';
        valeur1 = '';
        valeur2 = '';
        operateur = '';
        entete.innerText = '0';
    } else if (operateur) {
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
        if (valeur1.length > 1) {
            valeur1 = valeur1.substring(0, valeur1.length-1);
                entete.innerText = valeur1;
        }else{
            valeur1 = '';
            entete.innerText = '0';

        }
    }
}

let calculer = ()=>{
    if (valeur2) {
        if (operateur == "+") {
            resultat = parseFloat(valeur1) + parseFloat(valeur2);
        }else if(operateur == "-"){
            resultat = parseFloat(valeur1) - parseFloat(valeur2);
        }else if(operateur == "x"){
            resultat = parseFloat(valeur1) * parseFloat(valeur2);
        }else{
            resultat = parseFloat(valeur1) / parseFloat(valeur2);         
        }

        if (resultat.toString().indexOf(".") >= 0) {
            let sr = resultat.toString().substring(resultat.toString().indexOf("."));
            if(sr.length > 3){
                resultat = resultat.toFixed(2);
            }
        }


        entete.innerText = valeur1 + operateur+valeur2+" = "+resultat;
    }
}

