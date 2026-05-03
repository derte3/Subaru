const carlist = [
{ car: "1000", img: "../Subaru/js/randimg/1000.jpg", a: "../Subaru/Cars/1000/index.html" },
{ car: "1500", img: "../Subaru/js/randimg/1500.jpg", a: "../Subaru/Cars/1500/index.html" },
{ car: "360", img: "../Subaru/js/randimg/360.jpg", a: "../Subaru/Cars/360/index.html" },
{ car: "Ascent", img: "../Subaru/js/randimg/Ascent.jpg", a: "../Subaru/Cars/Ascent/index.html" },
{ car: "Baja", img: "../Subaru/js/randimg/Baja.jpg", a: "../Subaru/Cars/Baja/index.html" },
{ car: "BRAT", img: "../Subaru/js/randimg/BRAT.jpg", a: "../Subaru/Cars/BRAT/index.html" },
{ car: "BRZ", img: "../Subaru/js/randimg/BRZ.jpg", a: "../Subaru/Cars/BRZ/index.html" },
{ car: "EXIGA", img: "../Subaru/js/randimg/EXIGA.jpg", a: "../Subaru/Cars/EXIGA/index.html" },
{ car: "FF1", img: "../Subaru/js/randimg/FF1.jpg", a: "../Subaru/Cars/FF1/index.html" },
{ car: "Forester", img: "../Subaru/js/randimg/Forester.jpg", a: "../Subaru/Cars/Forester/index.html" },
{ car: "Impreza", img: "../Subaru/js/randimg/Impreza.jpg", a: "../Subaru/Cars/Impreza/index.html" },
{ car: "Justy", img: "../Subaru/js/randimg/Justy.jpg", a: "../Subaru/Cars/Justy/index.html" },
{ car: "Legacy", img: "../Subaru/js/randimg/Legacy.jpg", a: "../Subaru/Cars/Legacy/index.html" },
{ car: "Leone", img: "../Subaru/js/randimg/Leone.jpg", a: "../Subaru/Cars/Leone/index.html" },
{ car: "Levorg", img: "../Subaru/js/randimg/Levorg.jpg", a: "../Subaru/Cars/Levorg/index.html" },
{ car: "Outback", img: "../Subaru/js/randimg/Outback.jpg", a: "../Subaru/Cars/Outback/index.html" },
{ car: "Pleo", img: "../Subaru/js/randimg/Pleo.jpg", a: "../Subaru/Cars/Pleo/index.html" },
{ car: "R1", img: "../Subaru/js/randimg/R1.jpg", a: "../Subaru/Cars/R1/index.html" },
{ car: "R2", img: "../Subaru/js/randimg/R2.jpg", a: "../Subaru/Cars/R2/index.html" },
{ car: "Rex", img: "../Subaru/js/randimg/Rex.jpg", a: "../Subaru/Cars/Rex/index.html" },
{ car: "R_2", img: "../Subaru/js/randimg/R_2.jpg", a: "../Subaru/Cars/R_2/index.html" },
{ car: "Sambar", img: "../Subaru/js/randimg/Sambar.jpg", a: "../Subaru/Cars/Sambar/index.html" },
{ car: "Solterra", img: "../Subaru/js/randimg/Solterra.jpg", a: "../Subaru/Cars/Solterra/index.html" },
{ car: "Stella", img: "../Subaru/js/randimg/Stella.jpg", a: "../Subaru/Cars/Stella/index.html" },
{ car: "Sumo", img: "../Subaru/js/randimg/Sumo.jpg", a: "../Subaru/Cars/Sumo/index.html" },
{ car: "SVX", img: "../Subaru/js/randimg/SVX.jpg", a: "../Subaru/Cars/SVX/index.html" },
{ car: "Trailseeker", img: "../Subaru/js/randimg/Trailseeker.jpg", a: "../Subaru/Cars/Trailseeker/index.html" },
{ car: "Traviq", img: "../Subaru/js/randimg/Traviq.jpg", a: "../Subaru/Cars/Traviq/index.html" },
{ car: "Tribeca", img: "../Subaru/js/randimg/Tribeca.jpg", a: "../Subaru/Cars/Tribeca/index.html" },
{ car: "Vivio", img: "../Subaru/js/randimg/Vivio.jpg", a: "../Subaru/Cars/Vivio/index.html" },
{ car: "XT", img: "../Subaru/js/randimg/XT.jpg", a: "../Subaru/Cars/XT/index.html" },
{ car: "XV", img: "../Subaru/js/randimg/XV.jpg", a: "../Subaru/Cars/XV/index.html" }

]
let len = carlist.length
let rand = Math.floor(Math.random() * 32) + 1;
let rand2 = Number(rand)

console.log(rand2)

document.getElementById("randa").href = carlist[rand2].a
document.getElementById("randimg").src = carlist[rand2].img
document.getElementById("randnam").textContent = carlist[rand2].car
