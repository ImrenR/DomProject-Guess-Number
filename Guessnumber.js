 // Fisrt of all let the pc hold a number
 const randomNumber=Math.ceil(Math.random()*20)
 const again=document.querySelector(".again")
 const guess=document.querySelector(".guess")
 const check=document.querySelector(".check")
 const message=document.querySelector(".msg")
 const body=document.querySelector("body")
 const life=document.querySelector(".life")
 console.log(randomNumber)

 let hak=10;
 let topScore=0

 //! 2- When I was pressed on Check button :

 //check.onClick=()=>{}
 check.addEventListener("click",()=>{
   const tahmin =guess.value;


 //? If you dont enter nay value, avoid to click on check
 if(!tahmin){
  message.textContent="Kindly enter a guess "
 }
 else if(tahmin<0 && tahmin>20){
  message.textContent="Enter a value between 0-20"
 } 
 else if(tahmin==randomNumber){
  message.textContent="Correct answer, Congrats!";
  body.style.backgroundColor="green"
  document.querySelector(".number").textContent=randomNumber
  check.disabled=true

  if(hak>topScore){
      topScore=hak;
      document.querySelector(".topScore").textContent=topScore
  }
 }
 //! If the guessed number is wrong, add reduce / increased control
 else{
  if(hak>1){
    hak--
  life.textContent=hak
 
 tahmin>randomNumber 
 ? message.textContent="Hint👉:Reduce the number" 
 : message.textContent="Hint👉:Increase the number"
 } else {
  body.style.backgroundColor="red"
  message.textContent=" Sorry, You lost the game 😥"
  check.disabled=true
  life.textContent=0
 }
}

});

again.addEventListener("click",()=>{

  const randomNumber = Math.ceil(Math.random()*18 + 1);
  message.textContent="The game getting ready for the new player"
  body.style.backgroundColor="blue";
  document.querySelector(".number").textContent="?";
  check.disabled=false;
  life.textContent=10
  hak=10
  guess.value=""



})
