const lista = document.getElementById("lista-imoveis");

// buscar imóveis vindos do admin
const imoveis = JSON.parse(localStorage.getItem("imoveis")) || [];

function renderizar(listaImoveis) {
  lista.innerHTML = "";

  if (listaImoveis.length === 0) {
    lista.innerHTML = "<p>Nenhum imóvel disponível.</p>";
    return;
  }

  listaImoveis.forEach((imovel, index) => {
    lista.innerHTML += `
      <div class="card">
        <img src="${imovel.imagem}">
        <div class="info">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.bairro} · ${imovel.quartos} quartos</p>

          <div class="preco">
            ${imovel.preco.toLocaleString("pt-AO")} Kz / mês
          </div>

          <div class="acoes">
            <button onclick="verDetalhes(${index})">
              Ver detalhes
            </button>

            <a href="https://wa.me/244912345678" target="_blank">
              <button class="whatsapp">
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

function filtrar() {
  const bairro = document.getElementById("bairro").value.toLowerCase();
  const preco = document.getElementById("preco").value;
  const quartos = document.getElementById("quartos").value;

  let resultado = imoveis.filter(i => {
    return (
      (!bairro || i.bairro.toLowerCase().includes(bairro)) &&
      (!preco || i.preco <= preco) &&
      (!quartos || i.quartos >= quartos)
    );
  });

  renderizar(resultado);
}

function verDetalhes(index) {
  localStorage.setItem("imovelDetalhe", JSON.stringify(imoveis[index]));
  window.location.href = "imovel.html";
}

// carregar automaticamente
renderizar(imoveis);
