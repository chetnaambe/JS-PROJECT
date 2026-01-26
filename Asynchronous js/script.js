


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



amitSeDetailsLaa0("Burnhanpur M.P",function(details){
console.log(details);
})




