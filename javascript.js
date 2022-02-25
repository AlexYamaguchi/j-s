

//var randomNumber = Math.floor(Math.random() * 6) + 1; //random numbers from 1 to 6
//var randomDiceImage = "dice" + randomNumber + ".png"; //dice1 to dice6

//var image1 = document.querySelectorAll("img")[0];

//image1.setAttribute("src", randomDiceImage);


//var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random numbers from 1 to 6
//var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1 to dice6

//var image2 = document.querySelectorAll("img")[1];

//image2.setAttribute("src", randomDiceImage2);


//document.querySelector("h2").innerHTML = randomNumber + " " + randomNumber2;




//if (randomNumber > randomNumber2) {
//  document.querySelector("h1").innerHTML = "🚩Player #1 Wins!";


//} else if (randomNumber < randomNumber2) {
//  document.querySelector("h1").innerHTML = "Player #2 Wins! 🚩";
//} else {
//  document.querySelector("h1").innerHTML = "Draw!";
//}



  // function changeImage() {

  //   if (document.getElementById("imgClickAndChange").src == "yama.png") 
  //   {
  //       document.getElementById("imgClickAndChange").src = "yama-.png";
  //   }
  //   else 
  //   {
  //       document.getElementById("imgClickAndChange").src = "yama-.png";
  //   }
  // }


  /////////////////////////////////////////////////////////////////////////
  //YAMA
  /////////////////////////////////////////////////////////////////////////

  var counter = 1;

  ImgGallery.onclick = function (){
  if (counter == 1){
      document.getElementById("ImgGallery").src = "yama-.png";
      // <audio id="mySound" src="watashi.mp3" type="audio/mpeg"></audio>
      counter++;
       setTimeout(() => {
         document.getElementById('mySound-yama').play();
       }, 500)
  }
  else if (counter == 2){
      document.getElementById("ImgGallery").src = "mountain.png";
      setTimeout(() => {
        document.getElementById('mySound-mountain').play();
      }, 500)
     


      counter++;
              
   
  }
  else if (counter == 3){
      document.getElementById("ImgGallery").src = "yama.png";
      counter++;
  }
  else if (counter == 4){
      document.getElementById("ImgGallery").src = "yama-.png";
      counter++;
  }
  else if (counter == 5){
      document.getElementById("ImgGallery").src = "mountain.png";
      counter++;
  }
  else if (counter == 6){
      document.getElementById("ImgGallery").src = "yama.png";
      counter==1;
  }
  };

  /////////////////////////////////////////////////////////////////////////
  //KAWA
  /////////////////////////////////////////////////////////////////////////

  var counterx = 1;

  ImgGallery1.onclick = function (){
  if (counterx == 1){
      document.getElementById("ImgGallery1").src = "river2.png";
      setTimeout(() => {
        document.getElementById('mySound-kawa').play();
      }, 500)
      counterx++;
  }
  else if (counterx == 2){
      document.getElementById("ImgGallery1").src = "river3.png";
      setTimeout(() => {
        document.getElementById('mySound-river').play();
      }, 500)
      counterx++;
  }
  else if (counterx == 3){
      document.getElementById("ImgGallery1").src = "river1.png";
      counterx++;
  }
  else if (counterx == 4){
      document.getElementById("ImgGallery1").src = "river2.png";
      counterx++;
  }
  else if (counterx == 5){
      document.getElementById("ImgGallery1").src = "river3.png";
      counterx++;
  }
  else if (counterx == 6){
      document.getElementById("ImgGallery1").src = "river1.png";
      counterx==1;
  }
  };


 /////////////////////////////////////////////////////////////////////////
  //MIZU
  /////////////////////////////////////////////////////////////////////////
  var counterxw = 1;

  ImgGallery2.onclick = function (){
  if (counterxw == 1){
      document.getElementById("ImgGallery2").src = "water2.png";
      setTimeout(() => {
        document.getElementById('mySound-mizu').play();
      }, 500)
      counterxw++;
  }
  else if (counterxw == 2){
      document.getElementById("ImgGallery2").src = "water3.png";
      setTimeout(() => {
        document.getElementById('mySound-water').play();
      }, 500)
      counterxw++;
  }
  else if (counterxw == 3){
      document.getElementById("ImgGallery2").src = "water1.png";
      counterxw++;
  }
  else if (counterxw == 4){
      document.getElementById("ImgGallery2").src = "water2.png";
      counterxw++;
  }
  else if (counterxw == 5){
      document.getElementById("ImgGallery2").src = "water3.png";
      counterxw++;
  }
  else if (counterxw == 6){
      document.getElementById("ImgGallery2").src = "water1.png";
      counterxw==1;
  }
  };


  /////////////////////////////////////////////////////////////////////////
  //YEAR
  /////////////////////////////////////////////////////////////////////////
  var counterInu = 1;

  ImgInu.onclick = function (){
  if (counterInu == 1){
      document.getElementById("ImgInu").src = "dog_hira.png";
      setTimeout(() => {
        document.getElementById('mySound-inu').play();
      }, 500)
      counterInu++;
  }
  else if (counterInu == 2){
      document.getElementById("ImgInu").src = "dog.png";
      setTimeout(() => {
        document.getElementById('mySound-dog').play();
      }, 500)
      counterInu++;
  }
  else if (counterInu == 3){
      document.getElementById("ImgInu").src = "inu.png";
      counterInu++;
  }
  else if (counterInu == 4){
    document.getElementById("ImgInu").src = "dog_hira.png";
    setTimeout(() => {
      document.getElementById('mySound-inu').play();
    }, 500)
    counterInu++;
}
else if (counterInu == 5){
    document.getElementById("ImgInu").src = "dog.png";
    setTimeout(() => {
      document.getElementById('mySound-dog').play();
    }, 500)
    counterInu++;
}
else if (counterInu == 6){
    document.getElementById("ImgInu").src = "inu.png";
    counterInu++;
}
  };

  /////////////////////////////////////////////////////////////////////////
  //HON BOOK
  /////////////////////////////////////////////////////////////////////////
  var counterHon = 1;

  ImgHon.onclick = function (){
  if (counterHon == 1){
      document.getElementById("ImgHon").src = "hon_hira.png";
      setTimeout(() => {
        document.getElementById('mySound-hon').play();
      }, 500)
      counterHon++;
  }
  else if (counterHon == 2){
      document.getElementById("ImgHon").src = "book.png";
      setTimeout(() => {
        document.getElementById('mySound-book').play();
      }, 500)
      counterHon++;
  }
  else if (counterHon == 3){
      document.getElementById("ImgHon").src = "hon.png";
      counterHon++;
  }
  else if (counterHon == 4){
    document.getElementById("ImgHon").src = "hon_hira.png";
    setTimeout(() => {
      document.getElementById('mySound-hon').play();
    }, 500)
    counterHon++;
}
else if (counterHon == 5){
  document.getElementById("ImgHon").src = "book.png";
  setTimeout(() => {
    document.getElementById('mySound-book').play();
  }, 500)
  counterHon++;
}
else if (counterHon == 6){
    document.getElementById("ImgHon").src = "hon.png";
    counterHon++;
}
  };


