var varH1 = document.querySelector('h1');
varH1.innerText = 'Qual seu número da sorte secreto?';

var varP = document.querySelector('p');
varP.innerHTML = 'Tente sua sorte, entre 1 e 10 faça sua escolha';

let secret_number = Math.floor((Math.random() * 10) + 1);
let tentativas = 0;  // Variável para contar o número de tentativas

function verificarChute() {
    let guess = document.querySelector('input').value;
    tentativas++;  // Incrementar o número de tentativas a cada chute

    if (guess == secret_number) {
        if (tentativas === 1) {
            // Se acertou na primeira tentativa, mostrar a imagem do tigrinho triste
            document.getElementById('conteudo-jogo').style.display = 'none';
            document.getElementById('tigrinho-triste').style.display = 'block';

            let mensagem = `Você acertou em ${tentativas} tentativa? Vou soltar a cartinha.`;
            document.getElementById('mensagem-triste').innerText = mensagem;
        } else {
            // Se não for na primeira tentativa, mostrar a imagem do tigrinho com raiva
            document.getElementById('conteudo-jogo').style.display = 'none';
            document.getElementById('tigrinho-raiva').style.display = 'block';

            let mensagem = `Você acertou em ${tentativas} tentativas! Deposita mais 20 aí que eu libero a cartinha.`;
            document.getElementById('mensagem-vitoria').innerText = mensagem;
        }
    } else {
        if (guess < secret_number) {
            varP.innerHTML = 'Haha, não foi dessa vez! O número é maior';
        } else {
            varP.innerHTML = 'Ainda não, o número é menor';
        }
    }
}

function reiniciarJogo() {
    secret_number = Math.floor((Math.random() * 10) + 1);
    tentativas = 0;  // Reiniciar o contador de tentativas
    varH1.innerHTML = 'Qual seu número da sorte secreto?';
    varP.innerHTML = 'Tente sua sorte, entre 1 e 10 faça sua escolha';
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);

    // Restaurar o conteúdo do jogo e esconder todas as imagens e mensagens
    document.getElementById('conteudo-jogo').style.display = 'block';
    document.getElementById('tigrinho-raiva').style.display = 'none';
    document.getElementById('tigrinho-triste').style.display = 'none';
}




