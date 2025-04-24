const perguntas = [
    {
      pergunta: `🍓🍓🍓  vs  🍓🍓  
  Qual lado tem mais morangos?`,
      opcoes: ["Esquerdo", "Direito", "Iguais"],
      correta: "Esquerdo"
    },
    {
      pergunta: `🍌🍌🍌🍌  vs  🍌🍌🍌🍌  
  Qual lado tem mais bananas?`,
      opcoes: ["Esquerdo", "Direito", "Iguais"],
      correta: "Iguais"
    },
    {
      pergunta: `🍉🍉🍉🍉🍉  vs  🍉🍉🍉🍉🍉🍉  
  Qual lado tem mais melancias?`,
      opcoes: ["Esquerdo", "Direito", "Iguais"],
      correta: "Direito"
    },
    {
      pergunta: `🥝🥝  vs  🥝🥝🥝  
  Qual lado tem menos kiwis?`,
      opcoes: ["Esquerdo", "Direito", "Iguais"],
      correta: "Esquerdo"
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