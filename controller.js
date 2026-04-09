// ESTADO INICIAL: 1500
let data = { dia: 1, mes: 1, ano: 1500 };
let dificuldade = 1;
let desafioAtual = { pergunta: "", resposta: 0 };

// 1. INCREMENTO (O longo caminho desde 1500)
function incrementar(tipo) {
    if (tipo === 'ano') {
        data.ano++;
    } else if (tipo === 'mes') {
        data.mes = data.mes >= 12 ? 1 : data.mes + 1;
    } else {
        data.dia = data.dia >= 31 ? 1 : data.dia + 1;
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('res-dia').innerText = data.dia.toString().padStart(2, '0');
    document.getElementById('res-mes').innerText = data.mes.toString().padStart(2, '0');
    document.getElementById('res-ano').innerText = data.ano;
}

// 2. DESAFIOS DE NÍVEL "CÁLCULO III"
function gerarDesafioImpossivel() {
    const tipos = ['integral', 'bhaskara_complexa', 'volume_esfera'];
    const sorteio = tipos[Math.floor(Math.random() * tipos.length)];

    if (sorteio === 'integral') {
        // Simulação de integral de x^n
        let n = dificuldade + 1;
        desafioAtual.pergunta = `Calcule a integral definida de ${n}x^${n-1} no intervalo [0, 2]:`;
        desafioAtual.resposta = Math.pow(2, n);
    } 
    else if (sorteio === 'bhaskara_complexa') {
        // x² - (Soma)x + Produto = 0
        let x1 = dificuldade * 2;
        let x2 = 3;
        let soma = x1 + x2;
        let prod = x1 * x2;
        desafioAtual.pergunta = `Na equação x² - ${soma}x + ${prod} = 0, qual o valor da maior raíz (x)?`;
        desafioAtual.resposta = Math.max(x1, x2);
    } 
    else {
        // Volume da Esfera (4/3 * PI * r³) - Aproximando PI para 3
        let r = dificuldade;
        desafioAtual.pergunta = `Considerando PI=3, qual o volume de uma esfera com raio r=${r}? (V = 4 * r³)`;
        desafioAtual.resposta = 4 * Math.pow(r, 3);
    }

    document.getElementById('pergunta-texto').innerText = desafioAtual.pergunta;
}

function verificarDesafio() {
    const respUser = parseFloat(document.getElementById('resposta-math').value);
    
    if (Math.abs(respUser - desafioAtual.resposta) < 0.1) {
        feedback.innerText = "ACESSO LIBERADO. DIGITE MANUALMENTE.";
        document.getElementById('input-data-livre').disabled = false;
    } else {
        dificuldade++;
        feedback.innerText = `ERROU! A COMPLEXIDADE SUBIU PARA O NÍVEL ${dificuldade}!`;
        gerarDesafioImpossivel();
    }
}

// Inicia o sistema
gerarDesafioImpossivel();
atualizarDisplay();

