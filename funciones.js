// ---Indicamos que cuando haya cargado la pagina web se llame funcion inicial
window.onload = iniciar;

function iniciar() {
   // Se guarda en variable elemento HTML
   var btnCalcular = document.getElementById("calc");

   //Para que funcione el evento click (parametro,nombrefuncion)
   btnCalcular.addEventListener("click", clickBtnCalcular);

}

var p = document.getElementById("peso");
var a = document.getElementById("altura");

function clickBtnCalcular() {
   if (p.value != "" && a.value != "") {
      var imc = (p.value / (a.value * a.value));
      imc = Math.round(imc);
      if (imc < 18) {
         alert("Su imc es:  " + imc + ". Su categoria indice: PESO BAJO");
      }
      else if (imc >= 18 && imc < 26) {
         alert("Su imc es:  " + imc + ". Su categoria indice: PESO NORMAL");
      }
      else if (imc >= 27 && imc < 30) {
         alert("Su imc es:  " + imc + " categoria de indice: OBESIDAD GRADO I");
      }
      else if (imc >= 30 && imc < 40) {
         alert("Su imc es:  " + imc + " categoria de indice: OBESIDAD GRADO II");
      }
      else if (imc > 40) {
         alert("Su imc es:  " + imc + " categoria de indice: OBESIDAD GRADO III");
      }
   }
   else {
      alert("Ingresa peso y altura por favor");
   }

}




