// jshint esversion:6
function count()
{
   var str=document.getElementById("write").value;
   var characters=str.length;
   // console.log(characters);
   const words=str.split(' ');
   var word=words.length;
   // console.log(words);
   // console.log(word);
  document.getElementById("char-count").innerHTML="NUMBER OF CHARACTERS ARE "+characters;
  document.getElementById("word-count").innerHTML="NUMBER OF WORDS ARE "+word;
}
