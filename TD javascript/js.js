//on recupere la balise button via son id
let button=document.getElementById('button');

button.addEventListener('click',funtion(), { //cette evenement dr declencle lorsque on clique sur le button
   nb = document.getElementById('nombre').value; //on recupere la valeur entree dans l'input
    //on verifie que la valeur a belle et bien ete recuperee
    if (nb) {
        //on entre les mots cles dans les tableaux
        let nb_uniter = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
        let nb_dizaine =['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
        let nb_dizaine2 =['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
        let nb_centaine =['', 'cent', 'deux cent', 'trois cent', 'quatre cent', 'cinq cent', 'six cent', 'sept cent', 'huit cent', 'neuf cent'];

        //on declare les variables qui seront utilises dans nos fonctions
        let aux;

        let p_ecrit_en_ch;
        let p_ecrit_en_1;

        let nb_fin = [,,,]; 

        function decomposition_total() { //on fait une decomposition totale et on le place dans un tableaux de centaine, millieme, million et milliard
            let u = nb % 10;
            let d = nb % 100 - u;
            let c = nb % 1000 - d - u;
            let m = nb % 1000000 - c - d - u;
            let million = nb % 1000000000 - m - c - d - u;
            let milliard = nb % 10000000000000000000 - million - m - c - d - u;

            let aux_u = u;
            let aux_d = d/10;
            let aux_c = c / 100;
            let aux_m = m / 1000;
            let aux_million = million / 1000000;
            let aux_milliard = milliard / 1000000000;
            //on regroupe les unites les dizaines et les centaines dans une variable
            let nb_c_trg = aux_c + ''+ aux_d + '' + aux_u;
            //chaque cellule du tableau contiendra au maximun un nombre a trois chiffre qui sera decomposer par la fonction decompisition_partiel(nb9)
            let tab_t = [aux_milliard, aux_million, aux_m, nb_c_trg];

            return tab_t;

        }

        function decomposition_partiel(nb9){ //nous decomposons se nombre et nous le placons dans un tableau de centaine, de dizaine et d'unite

            let up = nb9 % 10;
            let dp = nb9 % 100 - up;
            let cp = nb9 % 1000 - dp - up;

            let aux_up = up;
            let aux_dp = dp / 10;
            let aux_cp = cp / 100;

            let tab_p = [aux_cp, aux_dp, aux_up];
            return tab_p;

        }

        function lire_p(aux7) {
            let uniter;
            let dizaine;
            let centaine;
            let aux1
            aux1 = aux7;

            if (aux1[0]== 0 && aux1[1] == 0){ if (aux1[2] == 0) { uniter = ' ';} else {uniter = nb_uniter[aux1[2]]; }
            if (aux1[1] == 7 || aux1[1] == 9) {
                dizaine = nb_dizaine2[aux1[1]];
                uniter = nb_uniter[aux1[2]];            }
            } else{

                if(aux1[1] != 1) {
                    dizaine = nb_dizaine2[aux1[1]];
                    uniter = nb_uniter[aux1[2]];
                } else{
                    dizaine = nb_dizaine[aux1[2]];
                    uniter = ' ';
                }
            }
            if (aux1[0]) { centaine = nb_centaine[aux1[0]];}

            let result_p = [ centaine, dizaine, uniter];
            //on convertis result_p en chaine de caratere
            let result_p1 = result_p.join(' ');
            return result_p1;
        }
            //on recupere le tableau retourner par la fontcion decomposition_total(nb)
        aux - decomposition_total(nb);

        if (aux[0] != 0){
            //si on est dans la cellule des milliard on execute les 3 lignes ci dessous
            p_ecrit_en_ch = decomposition_partiel(aux[0]);
            p_ecrit_en_1 = lire_p(p_ecrit_en_ch);
            nb_fin[0] = p_ecrit_en_1 + ' milliard';

        }
        if (aux[1] != 0){
            //si on est dans la cellule des million on execute les 3 lignes ci dessous
            p_ecrit_en_ch = decomposition_partiel(aux[1]);
            p_ecrit_en_1 = lire_p(p_ecrit_en_ch);
            nb_fin[1] = p_ecrit_en_1 + ' million';
        }
        if (aux[2] != 0){
            //si on est dans la cellule des centaine-dizaine-uniter on execute les 3 lignes ci dessous
            p_ecrit_en_ch = decomposition_partiel(aux[2]);
            p_ecrit_en_1 = lire_p(p_ecrit_en_ch);
            nb_fin[2] = p_ecrit_en_1 + ' mille';
        }
        if (aux[3]  != 0){
            //si on est dans la cellule des milliard on execute les 3 lignes ci dessous
            p_ecrit_en_ch = decomposition_partiel(aux[3]);
            p_ecrit_en_1 = lire_p[p_ecrit_en_ch];
            nb_fin[3] = p_ecrit_en_1;
    }
    //on converti le tableau nb_fin en chaine de caractere
    let nombre_lettre = nb_fin.join(' ');
    //on reccupere notre div par son id
    let div2 = document.getElementById('div2');
    //on l'affiche
    div2.style.display = 'block';
    //puis on injecte la reponse dans notre div
    div2.innerHTML = nombre_lettre; 
}

}, false);