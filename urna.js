let currentEleicao = "presidente";
document.getElementById("titulo").innerHTML = currentEleicao.toUpperCase();
setInputs();

// let tiposEleicao = [];
// tiposEleicao[22] = "governador";
// tiposEleicao[25] = "governador";
// tiposEleicao[20] = "governador";
// politicosImagens[33] = '<img src="alcides.jpg" />';
// politicosImagens[13] = '<img src="lula.jpg" />';
// politicosImagens[17] = '<img src="bolsonaro.jpg" />';
// politicosImagens[12] = '<img src="ciro.jpg" />';
// politicosImagens[45] = '<img src="geraldo.jpg" />';
// politicosImagens[18] = '<img src="marina.jpg" />';
// politicosImagens[19] = '<img src="alvaro.jpg" />';
// politicosImagens[15] = '<img src="henrique.jpg" />';
// politicosImagens[50] = '<img src="boulos.jpg" />';

let politicos = [
  {
    nome: "Lula Inácio Da Silva",
    partido: "PT",
    imagem: '<img src="img/lula.jpg" />',
    tipo: "presidente",
    numero: 13,
  },
  {
    nome: "Guilherme Boulos",
    partido: "PSOL",
    imagem: '<img src="img/boulos.jpg" />',
    tipo: "deputado",
    numero: 50000,
  },
  {
    nome: "Henrique Meirelles",
    partido: "MDB",
    imagem: '<img src="img/henrique.jpg" />',
    tipo: "presidente",
    numero: 15,
  },
  {
    nome: "Alvaro Dias",
    partido: "PODEMOS",
    imagem: '<img src="img/alvaro.jpg" />',
    tipo: "presidente",
    numero: 19,
  },
  {
    nome: "Marina Silva",
    partido: "REDE",
    imagem: '<img src="img/marina.jpg" />',
    tipo: "presidente",
    numero: 18,
  },
  {
    nome: "Geraldo Alckmin",
    partido: "PSDB",
    imagem: '<img src="img/geraldo.jpg" />',
    tipo: "presidente",
    numero: 45,
  },

  {
    nome: "Wilson Witzel",
    partido: "PSC",
    imagem: '<img src="img/wilson.jpg" />',
    tipo: "governador",
    numero: 20,
  },
  {
    nome: "Alcides Rodrigues",
    partido: "PDC",
    imagem: '<img src="img/alcides.jpg" />',
    tipo: "governador",
    numero: 33,
  },
  {
    nome: "Jair Messias Bolsonaro",
    partido: "PDC",
    imagem: '<img src="img/bolsonaro.jpg" />',
    tipo: "presidente",
    numero: 17,
  },
  {
    nome: "Ciro gomes",
    partido: "PDT",
    imagem: '<img src="img/ciro.jpg" />',
    tipo: "presidente",
    numero: 12,
  },
  {
    nome: "binho marques",
    partido: "PT",
    imagem: '<img src="img/binhomarques.jpg" />',
    tipo: "governador",
    numero: 22,
  },
  {
    nome: "João Doria",
    partido: "PSDB",
    imagem: '<img src="img/doria.jpg" />',
    tipo: "governador",
    numero: 25,
  },
];

function getInput() {
  let campo1 = document.getElementById("number1");

  if (campo1.value.length === 0) {
    return campo1;
  }

  let campo2 = document.getElementById("number2");

  if (campo2.value.length === 0) {
    return campo2;
  }

  let campo3 = document.getElementById("number3");
  if (campo3.value.length === 0) {
    return campo3;
  }

  let campo4 = document.getElementById("number4");
  if (campo4.value.length === 0) {
    return campo4;
  }

  let campo5 = document.getElementById("number5");
  if (campo5.value.length === 0) {
    return campo5;
  }
}

function getNumber() {
  let campo1 = document.getElementById("number1").value;
  let campo2 = document.getElementById("number2").value;

  if (currentEleicao == "deputado") {
    let campo3 = document.getElementById("number3").value;
    let campo4 = document.getElementById("number4").value;
    let campo5 = document.getElementById("number5").value;

    return parseInt(campo1 + campo2 + campo3 + campo4 + campo5);
  }
  return parseInt(campo1 + campo2);
}
function dados_politico(nome, partido, img) {
  //document.getElementById("nome_politico").innerHTML = `Nome: ${nome} <br>`;
  document.getElementById("nome_politico").innerHTML += `Partido: ${partido}`;
  document.getElementById("img_politico").innerHTML = `${img}`;
}
function confirmacaoVoto(nome, partido) {
  //document.getElementById("nome_politico").innerHTML = `Nome: ${nome} <br>`;
  document.getElementById("nome_politico").innerHTML += `Partido: ${partido}`;
}

function number_voto(number) {
  getInput().value = number;
  const fullNumber = getNumber();

  const politico = politicos.find((politico) => {
    return politico.numero == fullNumber && politico.tipo === currentEleicao;
  });

  if (politico) {
    dados_politico(politico.nome, politico.partido, politico.imagem);

    document.getElementById(
      "titulo"
    ).innerHTML = `SEU VOTO PARA: ${politico.nome}<i class="fas fa-check-circle" style="margin-left:4px; color:green"></i> `;
    document.getElementById("tipo_politico").innerHTML = politico.tipo;
    document.getElementById("word_numero").innerHTML = `Número`;
  }

  // if (
  //   currentEleicao === "governador" &&
  //   politicoNome
  //   //  &&
  //   // tipoEleicao === "governador"
  // ) {
  //   const img = politicosImagens[fullNumber];

  //   document.getElementById("img_politico").innerHTML = img;
  //   dados_politico(politicoNome, "PT");
  // }
}
function setCurrentEleicao() {
  if (currentEleicao == "presidente") {
    currentEleicao = "governador";
  } else if (currentEleicao == "governador") {
    currentEleicao = "deputado";
  }
}

function setInputs() {
  if (currentEleicao == "presidente" || currentEleicao == "governador") {
    document.getElementById("inputs").innerHTML = createInput(2);
  } else {
    document.getElementById("inputs").innerHTML = createInput(5);
  }
}

function createInput(times) {
  let inputs = "";
  for (let i = 1; i <= times; i++) {
    inputs += ` <input type="text" class="number" id="number${i}" disabled />`;
  }
  console.log(inputs);
  return inputs;
}
function fim() {
  if (currentEleicao == "deputado") {
    document.getElementById("numbers").innerHTML = "";
    document.getElementById(
      "titulo"
    ).innerHTML = `<p style="display: flex; justify-content: center; font-size: 3.0em; ">FIM<i class="fas fa-check-circle" style="margin-left:4px; color:green"></i></p> `;
    document.getElementById("tipo_politico").innerHTML = "";
    document.getElementById("profile").innerHTML = "";
  }
}

function confirmar() {
  fim();
  setCurrentEleicao();
  setInputs();
  corrige();
}

function branco() {
  setCurrentEleicao();
  corrige();
}

function corrige() {
  document.getElementById("titulo").innerHTML = currentEleicao.toUpperCase();

  for (let item of document.getElementsByClassName("number")) {
    item.value = "";
  }

  //document.getElementById("profile").innerHTML = "";
  document.getElementById("nome_politico").innerHTML = "";
  document.getElementById("img_politico").innerHTML = "";
  document.getElementById("tipo_politico").innerHTML = "";
}
