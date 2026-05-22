
let len = carlist.length
let rand = Math.floor(Math.random() * carlist.length) ;
let rand2 = Number(rand)

console.log(rand2)

document.getElementById("randa").href = carlist[rand2].a
document.getElementById("randimg").src = carlist[rand2].img
document.getElementById("randnam").textContent = carlist[rand2].car
