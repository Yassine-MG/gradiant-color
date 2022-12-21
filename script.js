let color_1 = document.querySelector(".color1");
let color_2 = document.querySelector(".color2");
let body = document.querySelector("body");
let options = document.getElementsByName("toDirection")[0];
let codes = document.querySelector(".codes")

console.log(options);

function getColor(){
    let CssProp = window.getComputedStyle(body,null).getPropertyValue("background-image");
    codes.textContent = CssProp;
}





function returnColor(){
    body.style.background = "linear-gradient("+ options.value +","+ color_1.value + "," + color_2.value + ")";
    body.style.backgroundRepeat ="no-repeat";   
    getColor()
}




document.querySelector('select[name = "toDirection"]').addEventListener("change",()=>{
   returnColor();
}) 
color_1.addEventListener("input",returnColor);
color_2.addEventListener("input",returnColor);