var frutitas = [];
document.getElementById('fruta').focus();

function mergeHTML (){
  var html = '';
  for (i=0; i<frutitas.length; i++){
    html += (i + 1)+". "+frutitas[i].charAt(0).toUpperCase() + frutitas[i].slice(1) + "<br>";
  }
  return html;
}


function printHTML (html){
  document.getElementById('fruta').focus(); //cursor en la caja de texto
  fruta.value = ""; // limpia caja de texto
  listaFrutas.innerHTML = html; // imprime html
}

var addFruta = document.getElementById('addFruta');
addFruta.onclick = function() {
  var fruta = document.getElementById('fruta').value;
  if(fruta != ""){
  	frutitas.push(fruta);
  }
  printHTML(mergeHTML());
};
