// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

function rightShift(yourString : string) {
  yourString;
   let newText = "";
 
   for (let i = yourString.length-1; i >= 0; i--) {
     newText = newText + yourString[i];
   }
   console.log(newText);
 }
 
 rightShift("IMZ");
 