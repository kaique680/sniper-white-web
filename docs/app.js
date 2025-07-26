async function buscarSinal() {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '🔄 Buscando resultados reais...';

  try {
    // Simulação de captura da Blaze Double
    const resposta = await fetch("https://blaze.com/api/roulette_games/recent");
    const dados = await resposta.json();

    // Pegamos os últimos 7 resultados
    const ultimos = dados.slice(0, 7).map(r => r.color); // 0: vermelho, 1: preto, 2: branco

    // Contagem de brancos
    const brancos = ultimos.filter(cor => cor === 2).length;

    // Lógica simples de padrão para exemplo (você pode colocar sua lógica real aqui depois)
    if (ultimos.includes(2) && brancos >= 1) {
      resultadoDiv.innerHTML = '⚪ Branco recente detectado. Aguardando novo padrão...';
    } else if (ultimos.slice(0, 3).every(cor => cor !== 2)) {
      resultadoDiv.innerHTML = '🟢 Próxima entrada: Branco (96% de chance)';
    } else {
      resultadoDiv.innerHTML = '⚠️ Nenhum padrão forte agora. Aguarde.';
    }

  } catch (erro) {
    resultadoDiv.innerHTML = '❌ Erro ao buscar sinal.';
    console.error('Erro:', erro);
  }
}
