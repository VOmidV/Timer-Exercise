function countdown(num){
  count();
  function count() {
    setTimeout(function() {console.log(num); num--; if(num > 0){count()}else{console.log("you are done!");}}, 1000);
  } 
  
}

console.log(countdown(10));

