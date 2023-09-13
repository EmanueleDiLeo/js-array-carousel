const images =[
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];

const arrowTop = document.querySelector(".arrow-top");
const arrowBot = document.querySelector(".arrow-bot");
const boxImg = document.querySelector(".box-img");

let indexImg = 0;

for(let i = 0; i < images.length; i++){
  boxImg.innerHTML += `<img class="hide item" src="${images[i]}" alt="${i+1}">`;
  console.log(images[i]);
}

const itemsImg =document.getElementsByClassName("item");

itemsImg[indexImg].classList.remove("hide");
console.log(itemsImg[indexImg]);

// EVENTO CLICK FRECCIA SU
arrowTop.addEventListener("click", function(){
  itemsImg[indexImg].classList.add("hide");
  console.log(itemsImg[indexImg]);

  if(indexImg === 0){
    indexImg = images.length - 1;
    console.log(itemsImg[indexImg]);
  }
  else{
    indexImg--;
    console.log(itemsImg[indexImg]);
  }

  itemsImg[indexImg].classList.remove("hide");


});

// EVENTO CLICK FRECCIA GIU
arrowBot.addEventListener("click", function(){

  itemsImg[indexImg].classList.add("hide");
  console.log(itemsImg[indexImg]);

   if(indexImg === (images.length - 1)){
     indexImg = 0;
     console.log(itemsImg[indexImg]);
   }
   else{
     indexImg++;
     console.log(itemsImg[indexImg]);
   }


  itemsImg[indexImg].classList.remove("hide");

});

