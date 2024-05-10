function contagem() {
  var inicio = parseInt(document.getElementsByName("inicio")[0].value);
  var fim = parseInt(document.getElementsByName("fim")[0].value);
  var passo = parseInt(document.getElementsByName("passo")[0].value);
  var contagem = inicio;
  var resultado = "";

  // Enquanto a contagem for menor ou igual ao fim
  while (contagem <= fim) {
      // Concatena a contagem ao resultado
      resultado += contagem + " ";
      // Incrementa a contagem pelo tamanho do passo
      contagem += passo;
  }

  // Exibe o resultado na div com nome contagem
  document.getElementById("contagem").innerText = resultado;
}

