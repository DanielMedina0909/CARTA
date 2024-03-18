function siguiente(){
    window.location.href="index2.html";

}
function regresar(){
    window.location.href="index.html";
}
function si() {
    window.location.href="index3.html";
}
  
function no() {
    let anchoSi = document.getElementById("si").offsetWidth;
    document.getElementById("si").style.width = (anchoSi + 10) + "px";
    
    if (anchoSi >= 400) {
      document.getElementById("no").style.display = "none";
    }
  }
function inicio(){
    window.location.href="index.html";

}