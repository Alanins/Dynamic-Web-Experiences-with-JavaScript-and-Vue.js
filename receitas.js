const receitas = [
    {
        "titulo": "Arroz de Couve-flor",
        "imagem": "Imagem/arroz_couve.avif",
        "preparo": "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        "ingredientes": [
            "Arroz",
            "Couve-flor",
            "Cebola Média",
            "Azeite"
        ]
    },
    {
        "titulo": "Bolo de Café",
        "imagem": "Imagem/bolo-de-chocolate-e-cafe.jpg",
        "preparo": "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        "ingredientes": [
            "Farinha de Trigo",
            "Açúcar",
            "Café Coado",
            "Chocolate em Pó",
            "Ovos"
        ]
    },
    {
        "titulo": "Coxinha de Brigadeiro",
        "imagem": "Imagem/coxinha-de-brigadeiro-com-morango-1024x545.jpg",
        "preparo": "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
        "ingredientes": [
            "Leite Condensado",
            "Chocolate em Pó",
            "Manteiga",
            "Morango",
            "Chocolate Granulado"
        ]
    }
];

function getListaIngredientes(receita) {
    return `
    <ul>
      ${receita.ingredientes.map(ingrediente => `<li> ${ingrediente} </li>`).join('')}
    </ul>
  `;
}

function getCard(receita) {
    return `
    <div class="card" style="width: 250px;">
      <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
      <div class="card-body">
        <h5 class="card-title fw-bold">${receita.titulo}</h5>
        <div class="card-text text-justify">
          ${getListaIngredientes(receita)}
          <hr>
          <p>${receita.preparo}</p>
        </div>
      </div>
    </div>
  `;
}

function preencheCatalogo() {
    const catalogoElement = document.getElementById('pnlCatalogo');
    const catalogoHtml = receitas.map(receita => getCard(receita)).join('');
    catalogoElement.innerHTML = catalogoHtml;
}

window.onload = preencheCatalogo;