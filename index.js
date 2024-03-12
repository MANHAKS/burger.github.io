
function colores(){
    let a = ["red","green","blue"];

    let rand = Math.floor((Math.random() * 3));

    document.getElementById("color").style.color = a[rand];
    document.body.style.backgroundColor = a[rand];
}

