function somme(a, b, c){
    return a + b + c;
}

let result = somme(2, 4, 6);
document.getElementById("demo").innerHTML = result;


function rnd(p1, p2){
    value = Math.floor(Math.random() * (p2 - p1) + p1);
    document.getElementById("id2").innerHTML = value;
    console.log(value);
}
rnd(1, 6);


    