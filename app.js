
const resultado = document.getElementById("resultado");

async function buscarSinal() {
  resultado.textContent = "🔄 Buscando sinal...";

  try {
    const res = await fetch("https://blaze-api-proxy.vercel.app/double"); // Proxy simples para Blaze
    const data = await res.json();
    const ultimasCores = data.slice(-7);

    const branco = ultimasCores.filter(cor => cor === 'white').length;
    const preto = ultimasCores.filter(cor => cor === 'black').length;
    const vermelho = ultimasCores.filter(cor => cor === 'red').length;

    if (branco >= 2) {
      resultado.textContent = "🟢 Sinal: Apostar no BRANCO (alta chance!)";
    } else if (preto >= 4) {
      resultado.textContent = "⚫ Sinal: Apostar no PRETO";
    } else if (vermelho >= 4) {
      resultado.textContent = "🔴 Sinal: Apostar no VERMELHO";
    } else {
      resultado.textContent = "⏳ Sem sinal forte no momento.";
    }
  } catch (e) {
    resultado.textContent = "❌ Erro ao buscar sinal.";
    console.error(e);
  }
}
