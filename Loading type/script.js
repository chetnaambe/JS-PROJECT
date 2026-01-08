const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText;

// console.log(para);


// setInterval(() =>{
//     para.addEventListener("mouseenter",()=>{
//     const str = text.split(``).map((char,index) =>{

//     // console.log(str);
//     return characters.split("")[Math.floor(Math.random()*53)]
//     }).join("")
//     para.innerText = str;
//     //  console.log(str);
// })
// },30)

let iteration = 0;

function randomText(){
const str = text.split("").map((char,index)=>{
    if(index< iteration){
        return char
    }
    return characters.split("") [Math.floor(Math.random()*52)]
 }).join("")
para.innerText = str
iteration +=0.25
}
setInterval(randomText,30)