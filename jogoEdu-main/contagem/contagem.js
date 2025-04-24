const perguntas = [
    {
      pergunta: `🍎🍎🍎🍎🍎
      Quantas maçãs tem?`,
      opcoes: ["4", "5", "6"],
      correta: "5"
    },
    {
      pergunta: `❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
      Quantos corações tem?`,
      opcoes: ["10", "12", "8"],
      correta: "10"
    },
    {
      pergunta: `❤️❤️+❤️❤️❤️
      Somando os corações, qual o resultado?`,
      opcoes: ["3", "7", "5"],
      correta: "5"
    },
    {
      pergunta: `🍎🍎🍎🍎-🍎🍎 
      Subtraindo as maçãs, qual o resultado?`,
      opcoes: ["2", "9", "6"],
      correta: "2"
    }
  ];

  let indiceAtual = 0;
  let pontuacao = 0;
  
  function carregarPergunta() {
    const atual = perguntas[indiceAtual];
    document.getElementById("pergunta").textContent = atual.pergunta;
  
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
  
    atual.opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.onclick = () => verificarResposta(opcao);
      opcoesDiv.appendChild(botao);
    });
  
    document.getElementById("feedback").textContent = "";
    document.getElementById("proximo").style.display = "none";
  }
  
  function verificarResposta(respostaSelecionada) {
    const atual = perguntas[indiceAtual];
    const feedback = document.getElementById("feedback");
  
    if (respostaSelecionada === atual.correta) {
      pontuacao++;
      feedback.textContent = "✅ Correto!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Errado! A resposta correta é: ${atual.correta}`;
      feedback.style.color = "red";
    }
  
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    document.getElementById("proximo").style.display = "inline-block";
  
    // Desabilita os botões
    const botoes = document.querySelectorAll("#opcoes button");
    botoes.forEach(botao => botao.disabled = true);
  }
  
  function proximaPergunta() {
    indiceAtual++;
  
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      document.getElementById("game-container").innerHTML = `
        <h2>Fim do Jogo!</h2>
        <p>Sua pontuação final foi: ${pontuacao}/${perguntas.length}</p>
        <button onclick="location.reload()">Jogar Novamente</button>
      `;
    }
  }
  
  window.onload = carregarPergunta;