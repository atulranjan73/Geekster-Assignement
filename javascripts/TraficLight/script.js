const lights = [
    document.getElementById('red'),
    document.getElementById('yellow'),
    document.getElementById('green')
]
let currentIndex = 0 ;
function Changelight(){
    for(let i = 0 ; i<lights.length ; i++){
        lights[i].style.backgroundColor= '#555'
    }
    lights[currentIndex].style.backgroundColor = lights[currentIndex].id;
}
Changelight();

setInterval(()=>{
    currentIndex = (currentIndex+1)%lights.length;
Changelight();
},3000)