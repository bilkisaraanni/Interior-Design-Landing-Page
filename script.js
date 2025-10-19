// nav part 
let menu = document.querySelector('.fa-bars');
let navbtn = document.querySelector('.buttres');
let navulres = document.querySelector('.navulres');
let show = false;
menu.addEventListener('click', () => {
     if(!show){
        navulres.style.display = "block"; 
        navbtn.style.display = "block"; 
        
        show = true;
     }else{
        navulres.style.display = "none";
        show = false;
     }
})

// bannar part countdown 

let count = document.querySelector('.count');
let countone = document.querySelector('.countone'); // Fixed selector
let counttwo = document.querySelector('.counttwo');

let counter = 0;
let counterOne = 0;
let counterTwo = 0;

let intervel = setInterval(() => {
    count.textContent = counter;
    counter++
    if( counter > 400){
       clearInterval(intervel)
    }
},100);

let intervelOne = setInterval(()=>{
    countone.textContent = counterOne;
    counterOne++
    if(counterOne > 600){
      clearInterval(intervelOne)
    }
},100);

let intervelTwo = setInterval(()=>{
     counttwo.textContent = counterTwo;
     counterTwo++
     if(counterTwo > 100){
      clearInterval(intervelTwo)
     }
},100);

//  4th part

let living = document.querySelector(".pera");
let state = false;
const Click = ()=>{
   
   if(!state){
      living.style.display = "block";
      state = true;
   }else{
      living.style.display = "none";
      state = false;
   }
}

let commercial = document.querySelector(".peraone");
let common = false;
const onClick = ()=>{
   if(!common){
      commercial.style.display = "block";
      common = true;
   }else{
      commercial.style.display = "none";
      common = false;
   }
}


// function one(a,b){
//    console.log(a*b)
// }
// one(7,5)
