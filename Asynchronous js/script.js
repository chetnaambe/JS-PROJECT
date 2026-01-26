// ##### js - > Single threaded

// ek kaam ek baar mein kar paayegi

// Synchronous Approach

// pahel print fir facebook se data layega and then print  ise bolte hai synchrouns

// Jab tak  facebook se data nahi aayega tab tak process rooki rahegi aur poora dta freeze ho jayega

// ### to yaha aata haim ASynchronous js



// ########  Introduction to `callbacks` and problem in  callbacks

//  ### Callback : ek function jo turant nahi chalega ye chalega jab aapka koi kaam complete hoga 


// setTimeout(function(){
//     console.log("hey");
// },2000);

//function name = getdatafrominstagram


// Callback Function
// cb -> function mein pass karte ho
// getDataFromInstagram("ayush123",function(){

// })


// function abcd(fn){
//     // fn run hua
//     fn(function(fn2){
//         fn2();
//     });
// }
// abcd(function(){
//     console.log("call back functio called");
//     fn(function(){

//     })
// })




// Call back Example :callback  function jo turant nahi chalta jab tak koi kaam complete na ho jaye
 
// Situation -> Github se repository data laao


// getUserDeatails(username , cb)
// getAllRepos(userid), cb)
// getRepoDetail(repos[0], cb)


// amitSeDtailsLaao(address,cb)
// dukaanKoDhundo(dtails,cb)
// smanlelo(saman, cb)
// GharAAjao(address,cb)


// ###### How to prevent callback hell using promises , resolve and reject  `async` & `await` .
// setinterval and settimeout in js



// Some Example of call back 
    

function abc(fn){
  fn(function(fn2){
   fn2(function(){

   });
  });
}
abc(function(fn){
fn(function(fn3){
  fn3();
})
});




// callback

function amitSeDetailsLaa0(address,cb){
    console.log("Details la Raha hoon");
    setTimeout(()=>{

              cb({
                latitude:32.23, logutude:78.21
              });
    },3000)
}

// ye function call hua hai kyoki upar koi code chala hoga

// jo details aati hai vo function ke parameter me aati hai
// cb = function(details) {
//    console.log(details);
// }

amitSeDetailsLaa0("Burnhanpur M.P",function(details){
console.log(details);
})




function bhaveshIceCremaLa(flavor,cb){
    console.log("Ice cream laa raha hoon");
    setTimeout(()=>{
        cb({
            quantity:1, quality:"good"
        });
    },5000);
}

bhaveshIceCremaLa("choclat",function(message){
    console.log(message);
})