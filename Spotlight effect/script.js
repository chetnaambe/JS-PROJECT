addEventListener("mousemove",(e)=>{
    document.body.style.setProperty(`--x`,e.clientX+`px`);
    document.body.style.setProperty(`--y`,e.clientY +`px`);





})
// const btn = document.querySelector("#sound");
const vid = document.querySelector("#bg");
vid.addEventListener("click",()=>{
     vid.muted = false;
    vid.volume = 1;
    vid.play();

});


