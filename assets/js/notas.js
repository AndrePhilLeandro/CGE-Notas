function abremodal() {
  document.getElementById("modal").style.display = "block";
}
function fechamodal() {
  document.getElementById("modal").style.display = "none";
}
function editNote(index) {
  const notes = JSON.parse(localStorage.getItem("notas")) || [];
  const note = notes[index];

  if (note) {
    const newTitle = prompt("Novo título:", note.titulo);
    const newDescription = prompt("Nova descrição:", note.descricao);

    note.titulo = newTitle;
    note.descricao = newDescription;

    localStorage.setItem("notas", JSON.stringify(notes));
    exibirNotas();
  } else {
    alert("Nota não encontrada!");
  }
}
let total = localStorage.getItem("notas");
let contador = 0;
// Verifica se há dados antes de tentar usar
if (total) {
  let notas = JSON.parse(total); // Converte a string para array

  notas.forEach((obj, index) => {
    console.log(`Índice: ${index}`);
    contador++;
    console.log(contador);
  });
} else {
  console.log("Nenhuma nota encontrada no localStorage.");
}
document.getElementById(
  "totalNotas"
).innerHTML = `<h6 style="color: white;" id="totalNotas">Notas ao total:${contador} </h6>`;

// Localstorage 1
document
  .getElementById("FormNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("Titulonota").value;
    const descricao = document.getElementById("desc").value;
    let novasNotas = JSON.parse(localStorage.getItem("notas")) || [];
    novasNotas.push({ titulo, descricao });
    localStorage.setItem("notas", JSON.stringify(novasNotas));
    window.location.reload();
    exibirNotas();
    fechamodal();
  });
function exibirNotas() {
  const notasContainer = document.getElementById("notas-container");
  notasContainer.innerHTML = "";
  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  notas.forEach((nota, index) => {
    const notaHTML = `
            <div class="card" style="margin-bottom: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.descricao}</p>
                    <div style="text-align: end;">
                    <button type="button" class="btn btn-outline-success" onclick="notaConclu(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                  </svg>
                  </button>
                  <button type="button" class="btn btn-outline-danger" onclick="excluirNota(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                        <button type="button" class="btn btn-outline-info" onclick="editNote(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    notasContainer.innerHTML += notaHTML;
  });
}
function excluirNota(index) {
  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  notas.splice(index, 1);
  localStorage.setItem("notas", JSON.stringify(notas));
  window.location.reload();
  exibirNotas();
}
document.addEventListener("DOMContentLoaded", function () {
  exibirNotas();
});

// Localstorage 2
function notaConclu(index) {
  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  let notaConcluida = notas[index];
  notas.splice(index, 1);
  let notasConcluidas =
    JSON.parse(localStorage.getItem("notasConcluidas")) || [];
  notasConcluidas.push(notaConcluida);
  localStorage.setItem("notasConcluidas", JSON.stringify(notasConcluidas));
  localStorage.setItem("notas", JSON.stringify(notas));
  window.location.reload();
  exibirNotas();
}
