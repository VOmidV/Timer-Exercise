function randompicker(){
  let count = 1;

  randomNum();
  function randomNum(){
  setTimeout(() => {
    let random = Math.random();
    if(random > 0.75){
      console.log(count);
      }else{
        count++;
        randomNum();
      }
  }, 1000);
}
}

