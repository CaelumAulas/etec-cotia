function constroiHtmlEscola(escola) {
  return `
    <li class="col-sm-2 col-md-4 mb-4">
      <article>
      <h3>${escola.nome}</h3>
      <address>
          ${escola.endereco}
      </address>
      <button class="btn btn-primary">Matricular-se!</button>
      </article>
    </li>`;
}

//Aqui fazemos o "Ajax" para o servidor node, e ele nos devolve os dados das escolas
fetch('http://localhost:3000/escolas')
.then(response => response.json())
.then(listaEscola => {

  for (const escola of listaEscola) {
    let elementoEscolas = document.querySelector('.escolas');
    elementoEscolas.insertAdjacentHTML('afterbegin', constroiHtmlEscola(escola));
  }

})
