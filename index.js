function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element && isMobile()) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function isMobile() {
  return window.innerWidth <= 1000; 
}

function criptografar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagem = document.getElementById("imagem");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length !== 0) {
    document.getElementById("textoResultado").value = textoCifrado;
    document.getElementById("texto").value = "";

    document.getElementById("imagem").classList.add("hidden");
    document.getElementById("mensagem-criptografada").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");

    scrollToElement("card");
  } else {
    imagem.src = "./img/imagem.png";
    tituloMensagem.textContent = "Não foi encontrada nenhuma mensagem";
    paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    scrollToElement("main");
    swal("Você deve inserir um texto para criptografar", "warning");
  }
}

function descriptografar() {
  let textoResultado = document.getElementById("textoResultado").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagem = document.getElementById("imagem");

  let textoCifrado = textoResultado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (textoResultado.length !== 0) {
    
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("textoResultado").value = "";

    scrollToElement("main");
  } else {
    imagem.src = "./img/imagem.png";
    tituloMensagem.textContent = "Não foi encontrada nenhuma mensagem";
    paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    scrollToElement("card");
    swal("Você deve inserir um texto para descriptografar", "warning");
  }
}


function copiarTexto() {
  const campoTexto = document.getElementById("textoResultado");
  campoTexto.select();
  campoTexto.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  campoTexto.setSelectionRange(0, 0);

  swal("Sucesso", "texto criptografado copiado", "success");
}