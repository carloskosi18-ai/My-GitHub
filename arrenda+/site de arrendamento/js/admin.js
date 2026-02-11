const form = document.getElementById("form-imovel");
const lista = document.getElementById("lista-admin");

let imoveis = JSON.parse(localStorage.getItem("imoveis")) || [];

function salvar() {
  localStorage.setItem("imoveis", JSON.stringify(imoveis));
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  if (imoveis.length === 0) {
    lista.innerHTML = "<p>Nenhum imóvel cadastrado.</p>";
    return;
  }

  imoveis.forEach((imovel, index) => {
    lista.innerHTML += `
      <div class="admin-card">
        <h3>${imovel.titulo}</h3>
        <p><strong>Bairro:</strong> ${imovel.bairro}</p>
        <p><strong>Quartos:</strong> ${imovel.quartos}</p>
        <p><strong>Preço:</strong> ${imovel.preco.toLocaleString("pt-AO")} Kz</p>
        <button onclick="remover(${index})">
          <i class="fas fa-trash"></i> Remover
        </button>
      </div>
    `;
  });
}

function remover(index) {
  if (confirm("Deseja remover este imóvel?")) {
    imoveis.splice(index, 1);
    salvar();
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  imoveis.push({
    titulo: titulo.value,
    bairro: bairro.value,
    preco: Number(preco.value),
    quartos: Number(quartos.value),
    imagem: imagem.value || "img/luanda.jpg"
  });

  form.reset();
  salvar();
});

renderizar();

form.addEventListener("submit", e => {
  e.preventDefault();

  imoveis.push({
    titulo: titulo.value,
    bairro: bairro.value,
    preco: Number(preco.value),
    quartos: Number(quartos.value),
    imagem: imagem.value || "img/luanda.jpg",
    whatsapp: whatsapp.value
  });

  form.reset();
  salvar();
});
