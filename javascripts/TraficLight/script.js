const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green= document.getElementById('green')
const lights = [
red , yellow ,green
]
let currentIndex = 0 ;
function Changelight(){
    for(let i = 0 ; i<lights.length ; i++){
        lights[i].style.backgroundColor= 'black'
    }
    lights[currentIndex].style.backgroundColor = lights[currentIndex].id;
}
Changelight();

setInterval(()=>{
    currentIndex = (currentIndex+1)%lights.length;
Changelight();
},3000)