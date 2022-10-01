function tri_bulle(tab){ // Fonction tri à bulle
    let i, status;

    do{
        status = false

        for(i = 0; i < tab.length - 1; i++){
            /* On vérifie si l'élément actuel est supérieur à l'élément suivant dans le tableau
            si c'est le cas on effectue un échange de valeur avec une variable temporaire */
            if(tab[i] > tab[i + 1]){ 
                var temp = tab[i];
                tab[i] = tab[i + 1];
                tab[i + 1] = temp;
                status = true;
            }
        }
    }while(status) // On continu tant que les éléments soient pas triés
}

let tab = [6, 5, 4, 3, 2, 1];

tri_bulle(tab);
console.log(tab);
