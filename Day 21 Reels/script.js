// var arr = [
//     {dp:"https://i.pinimg.com/736x/72/f6/d2/72f6d20a2742f12bd1bf1d6b03f4163f.jpg",
//         ide :"@minal_02",
//         story:"https://i.pinimg.com/736x/a2/13/a4/a213a47b4555b3da6a1d46fd8929a486.jpg"

//     },
//         {dp:"https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg",
//               ide :"@asmita_m2",
//             story:"https://i.pinimg.com/736x/b9/25/a8/b925a8a7f78dbb1335f568f555ddf355.jpg"
        
//     },
//         {dp:"https://i.pinimg.com/736x/63/6d/55/636d55632ac3c2067144984cb70d8b55.jpg",
//              ide :"@itsmaddy_52",
//             story:"https://i.pinimg.com/736x/46/90/8c/46908cca63b711e2ef267038116f4f09.jpg"
        
//     },
//         {dp:"https://i.pinimg.com/1200x/3c/d3/76/3cd3764ff576208a8305732ef8156f0a.jpg",
//              ide :"@joy_p",
//             story:"https://i.pinimg.com/736x/79/75/0b/79750b0f2170b912d1923786a13e5c6e.jpg"
        
//     },
//         {dp:"https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg",
//              ide :"@mehar23_d",
//             story:"https://i.pinimg.com/1200x/67/c8/35/67c8351f8173093cf4bb93ff69478531.jpg"
        
//     },
//         {dp:"https://i.pinimg.com/736x/62/5a/21/625a21d8face38805078fe2f0467b0f5.jpg",
//              ide :"@blue_b",
//             story:"https://i.pinimg.com/1200x/d9/cb/f7/d9cbf7f4c83b77cee1fc2ccdf9ec8a06.jpg"
        
//     },
    
// ]

// var stories = document.querySelector(`#stories`)
// var full =  document.querySelector("#fullscreen")
// var top = document.querySelector("#top")
// var username = document.querySelector("#top h5")

// var clutter = " "
// arr.forEach(function(elem,idx){
//    clutter += ` <div class="story">
//             <img id = "${idx}" src="${elem.dp}" alt="">
//        </div>`
           
// })
// stories.innerHTML = clutter


// stories.addEventListener(`click`,function(dets){

    
//     full.style.display = "block"
//     full.style.backgroundImage = `url(${arr[dets.target.id].story})`
//    setTimeout(function(){
//        full.style.display = "none"
    
//     },2000)
// });




const arr = [
  {
    dp: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
        story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./ten.mp4",
    ismuted: true,
    idName: "@minal_je"
    
  },
  {
    dp: "https://i.pinimg.com/736x/50/8a/03/508a03c5b23537f2c84eef4392948c57.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./nine.mp4",
        ismuted: true,
    idName: "@haniya02"
  },
  {
    dp: "https://i.pinimg.com/736x/b0/02/68/b00268621c6ea423b9da60fa8a8d9e82.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./three.mp4",
        ismuted: true,
    idName: "@bleedb2"
  },
  {
    dp: "https://i.pinimg.com/736x/29/51/64/295164d1f43cd92694a7aff5f3e265c7.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./eleven.mp4",
        ismuted: true,
    idName: "@maddy8"
  },
  {
    dp: "https://i.pinimg.com/1200x/e5/71/7d/e5717dafff0d33fdc4e18cbaa798880d.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./five.mp4",
       ismuted: true,
    idName: "@nonsibic2"
  },
  {
    dp: "https://i.pinimg.com/736x/21/0f/cd/210fcd67a6671958b61a31c8a4cdd824.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "six.mp4",
       ismuted: true,
    idName: "@yuviika"
  },
  {
    dp: "https://i.pinimg.com/736x/56/d8/a2/56d8a2e1678242af4693f50a2978bcc1.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "seven.mp4",
         ismuted: true,
    idName: "@begood45"
  },
  {
    dp: "https://i.pinimg.com/1200x/69/2e/3c/692e3c007164b092427336f17f5e7a30.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./eight.mp4",
        ismuted: true,
    idName: "@mahi_5"
  },
  {
    dp: "https://i.pinimg.com/1200x/9b/75/2a/9b752a14c0a327c796635e8972dadc73.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./second.mp4",
        ismuted: true,
    idName: "@nonto_2b"
  },
  {
    dp: "https://i.pinimg.com/736x/41/99/ea/4199eafa61a816bbeddd5a3457160f26.jpg",
            story: "https://i.pinimg.com/736x/0f/82/a4/0f82a426e505c6504096bd8825f2ab07.jpg",
    video: "./four.mp4",
         ismuted: true,
    idName: "@ye_b2"
  }
];












var stories = document.querySelector("#stories");

var fulls = document.querySelector("#fullscreen");
var profilePic = document.querySelector("#profilePic");
var profileName = document.querySelector("#profileName");
 var st = document.querySelector("#video")



var clutter = "";
arr.forEach(function(elem,idx){
   clutter += ` <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
       </div>`;
           
});
stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    var index = dets.target.id;

    fulls.style.display = "block";

    st.src = arr[index].video; 
    st.play();  
   
    

     profilePic.src = arr[index].dp;
     profileName.textContent = arr[index].idName;

       setTimeout(function () {
fulls.style.display = "none";
st.pause();
  }, 8500);

  // st.onended = function () {
  //   fulls.style.display = "none";
    
  //   st.currentTime = 0;
  // };
})


const like = document.querySelector("#like");

like.addEventListener(`click`,function(){
  like.style.opacity = `1`
  like.style.color = "red"
    like.style.fontSize= `30px`
   like.style.transform = ` scale(1.2) `


})


var mid = document.querySelector("#mid");

var sum = "";
arr.forEach(function(value,idx){
  sum+=     `  <div class="reel">
                <video autoplay loop ${value.ismuted?`muted`:``} src="${value.video}"></video>
                <div class="mute" id=${idx}>
                <i class="ri-volume-mute-fill"></i>
                </div>
                <div class="post">
                  <img src="${value.dp}" alt="">
                  <h5>"${value.idName}"</h5>
                  <button class="follow">Follow</button>
                  </div>
                  <div class="right">
                    <i  class="ri-heart-3-fill like"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-ins-line"></i>
                    <i  class="ri-bookmark-fill save"></i>
                  <i class="ri-more-2-line"></i>
                  </div>
                </div>`
                });
mid.innerHTML = sum;;

   mid.addEventListener("click", function(e) {

  if (e.target.classList.contains("like")) {
    e.target.style.color = "red";
  }

  if (e.target.classList.contains("save")) {
    e.target.style.color = "yellow";
  }

  const muteBtn = e.target.closest(".mute");
  if (muteBtn) {
    const reel = muteBtn.closest(".reel");
    const video = reel.querySelector("video");
    const icon = muteBtn.querySelector("i");

    video.muted = !video.muted;

    icon.className = video.muted? "ri-volume-mute-fill" : "ri-volume-up-fill";
  }
    if (e.target.tagName === "VIDEO") {
    document.querySelectorAll("#mid video").forEach(v => {
      if (v !== e.target) {
        v.pause();
        v.muted = true;
      }
    });

    e.target.muted = false; // play with sound
    e.target.play();
  }
});












var buttons = document.querySelectorAll(".follow");
buttons.forEach(function(button){
button.addEventListener(`click`,function(){
                if(button.innerHTML == "Follow"){
          button.innerHTML = "Unfollow";
        }
        else{
          button.innerHTML = "Follow";
        }
});
});
