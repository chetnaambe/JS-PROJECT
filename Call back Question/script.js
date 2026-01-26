// Question regarding callback function


// Exercise 1 

function afterDelay(time,cb){
setTimeout(function(){
    cb({
        messgae:"Hii this exercise one"
    });
},time);
}
afterDelay(2000,function(details){
    console.log(details);   
})



// Exercise 2 intermidate

function getUserData(username,cb){
setTimeout(() => {
    cb({
        id:10,username:"Chetna"
    })
},5000)
}

function getUserPost(id,cb){
    setTimeout(() => {
        cb(
            ["Hello", "This" , "World"]
        );
    },6000)
}

getUserData("Chetna",function(data){
      console.log("Chetna Ka data");
   console.log(data);
      getUserPost(data.id,function(allposts){
        console.log("id 10 ki all posts");
        console.log(data.username,allposts)
      })
})



// Instsgram se data lana hia

function GetInstagramData(username,cb){
   
    setTimeout(()=>{
         console.log("Ye data hai");
        cb({
            uniqueid:1234, username:"ChetnaAmbe"
        })
    },3000);
}

function metaseDataLaao( uniqueid,cb){
    setTimeout(()=>{
        cb({
            followers:1000,
            following:500
        })
    },2000);
}

GetInstagramData("chetnaambe",function(data){
    console.log(data);
    metaseDataLaao(data.uniqueid,function(meta){
        console.log("meta here");
        console.log(meta);
    })
})




// exercise 3 intermidate


function loginUser(username,cb){
    setTimeout(()=>{
        console.log("Login User");
        cb(
            {id:1,username:"Harsh"}
        )
    },4000);
}
function fetchPermission(id,cb){
    setTimeout(()=>{
         console.log("fetch Data");
        cb(["red","blue","Green"]);
        },4000);
}
function loadDashBoard(permission,cb){
    setTimeout(()=>{
         console.log("Loading Dashboard");
        cb();
    },4000);
}


loginUser("Harsh",function(userData){
  fetchPermission(userData.id,function(permission){
    loadDashBoard(permission,function(loaded){
        console.log("permission loadede");
    })
})
})