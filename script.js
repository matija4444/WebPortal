var myVar;

function myFunction() {
    console.log('myFunction called');
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
    console.log('showPage called');
  document.getElementById("loader").style.display = "none";
  document.getElementById("portal").style.display = "block";
}