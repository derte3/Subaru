let nam = "shitass";
let shi = 30;
let rule = 34;
let cnt = 0;
let bgch = Boolean(false);
console.log("the word of the day is " + nam);
console.log(shi + rule);
document.getElementById("i1").onclick = function() {
    if (bgch == Boolean(false)) {
    document.body.style.backgroundColor = "lightgreen";
    bgch = Boolean(true);}
    else{
        document.body.style.backgroundColor = "#0554a6";
    bgch = Boolean(false);};
    
    console.log("i1 clr1 used "+bgch)
};

document.getElementById("i2").onclick = function() {
    document.getElementById("t1").textContent = "some other test text"
    console.log("i2 txt1 used")
}
document.getElementById("i3").onclick = function() {
    cnt++;
    document.getElementById("t1").textContent = "count " + cnt
}

document.getElementById("i4").onclick = function() {
    let img = "../Impreza.jpg";
    const img2 = document.createElement("img");
    img2.width = 200;
    img2.src = img;
    document.getElementById("img1").appendChild(img2);
}