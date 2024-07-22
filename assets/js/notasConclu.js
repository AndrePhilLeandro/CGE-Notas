function exibirNotas() {
    const notasContainer = document.getElementById("notas-container");
    notasContainer.innerHTML = ""; 
    let notasConcluidas = JSON.parse(localStorage.getItem("notasConcluidas")) || [];
    notasConcluidas.forEach((nota) => {
        const notaHTML = `
            <div class="card" style="margin-bottom: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.descricao}</p>
                </div>
            </div>
        `;
        notasContainer.innerHTML += notaHTML;
    });
}
document.addEventListener("DOMContentLoaded", function() {
    exibirNotas();
});
