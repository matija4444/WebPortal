//Jednostavna skripta za animaciju stranice
var myVar;
//Funkcija koja se ucitava kod ucitavanje body elementa
function myFunction() {
    //ova funkcija ce pozvati funkciju showPage ali nakon 2 sekunde
  myVar = setTimeout(showPage, 2000);
}
//Ova funkcija sakrije loader a pokaze web portal
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("portal").style.display = "block";
}