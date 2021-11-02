const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [ ];
let contador = 1;

myButton.onclick = (event) => {
  const btnDelete = document.createElement("button");
  const miLi =  document.createElement("li");
  miLi.innerText = `Elemento lista #${contador}`;
  btnDelete.innerText = "X";
  liReferences.push(miLi);// Para saber la posicion de los li
  myUl.appendChild(miLi); // Agregar el li al ul
  miLi.appendChild(btnDelete); // Agregar el boton al li
  
  // Funcion para borrar el li 
  btnDelete.onclick = (event) => {
    myUl.removeChild(miLi);
    liReferences.splice(liReferences.indexOf(miLi), 1);
  }

  contador++;
}

