window.onload = cardApp;

function cardApp () {
  'use strict';
  
  console.log('hello test');
var el = document.getElementById("createCard");
console.log(el);
el.addEventListener("click", cardCreator);
 function cardCreator() {
 	alert('can you see me');
 }

  
};
