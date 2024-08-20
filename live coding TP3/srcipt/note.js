function moyenne(note){
    if(note < 10) {
        console.log('echec');
    }else if (note <= 10 || note <12) {
        console.log('passable');
    }else if (note <= 12|| note < 14) {
        console.log('Assez Bien');
    }else if (note <= 14 || note < 16) {
        console.log('Bien');
    }else if (note <= 16 || note < 18) {
        console.log('Trés Bien');
    }else if (note <= 18 || note < 20) {
        console.log('Excellent');
    }else if (note > 20) {
        console.log('Erreur');
    }

    moyenne(16,5);
}