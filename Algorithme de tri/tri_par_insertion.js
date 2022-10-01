function tri_insertion(tab){
    var length = tab.length;
    var temp, i , j;

    for(i = 1; i < length; i++){
        // On stock la valeur actuelle dans la variable temp
        temp = tab[i];
        j = i - 1;

        while(j >= 0 && tab[j] > temp){
            // On déplace le nombre
            tab[j + 1] = tab[j];
            j--;
            
        }

        // On insère la valeur temp à la position
        // correct dans la partie triée
        tab[j + 1] = temp;

    }
    return tab;
}

var tab = [5, 8, 11, 6, 1, 9, 3];

tri_insertion(tab);
console.log(tab);