function addElement () {
    var f = new Date();
  var usuario = document.getElementById("usuario").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagen = document.getElementById("imagen").value;

  var newDiv = document.createElement("div");
  var varImg = document.createElement("img");
   varImg.setAttribute("src",(imagen))
   varImg.setAttribute("width","100")
   varImg.setAttribute("height","100")
    var newContent1 = document.createTextNode("Usuario: " + usuario + " ");
  var newContent2 = document.createTextNode("Descripción: " + descripcion + " ");
  var fecha= document.createTextNode("feha: " + f.getDate()+ "/" + (f.getMonth() +1)+ "/" + f.getFullYear() + " ");
  var button = document.createElement("button");
      button.innerHTML = "Comentarios";

      button.setAttribute("onclick","addElement2()");
  newDiv.appendChild(varImg);
  newDiv.appendChild(newContent1);
  newDiv.appendChild(newContent2);
  newDiv.appendChild(fecha);
  newDiv.appendChild(button);
  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}

function addElement2 () {
  var f = new Date();
  var usuario = document.getElementById("usuario").value;
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newComentar = document.createTextNode("        Comentar: "  );
  var input = document.createElement("input");
 input.setAttribute("id","comentario");
  input.setAttribute("placeholder","Deja tu comentario...");
  var button = document.createElement("button");
  button.innerHTML = "Comentar";
  button.setAttribute("onclick","addComent()");
    newDiv.appendChild(newComentar);
  newDiv.appendChild(input);
  newDiv.appendChild(button);
  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}

function addComent () {
  var momentoActual = new Date()
  var comentario = document.getElementById("comentario").value;
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  for (var i = 0; i < 0 ; i++) {
  }
  var newComentar = document.createTextNode("Comentario: " + comentario + " " + momentoActual.getHours() + ":" + momentoActual.getMinutes()+ ":" + momentoActual.getSeconds() );

  var button = document.createElement("button");
  button.innerHTML = "Comentar";
  button.setAttribute("onclick","addComent()");
  newDiv.appendChild(newComentar); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}
