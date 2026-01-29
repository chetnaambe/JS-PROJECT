let search = document.querySelector("#input");
let sbox = document.querySelector("#SBox");

search.addEventListener("click", function (e) {
     e.stopPropagation();
    sbox.classList.toggle("active");
});
document.addEventListener("click", function () {
    sbox.classList.remove("active");
});


// let up  = document.getElementById("up");
// document.addEventListener("dblclick",function(r){
// r.stopPropagation();
// up.classList.toggle("active");
// });

let main = document.getElementById("main");
let up = document.getElementById("up");

main.addEventListener("dblclick", function (e) {
    e.preventDefault();


    const x = e.clientX;
    const y = e.clientY;

    up.style.left = x + "px";
    up.style.top = y + "px";

    up.classList.add("active");
  
});

document.addEventListener("click", function () {
    up.classList.remove("active");
});

