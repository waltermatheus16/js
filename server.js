const http = require('http');
const url = require('url');

let contador = 0;

const verificarNumeroPrimo = (numero) => {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

const servidor = http.createServer((requisicao, resposta) => {
    const urlParseada = url.parse(requisicao.url, true);
    const { pathname, query } = urlParseada;

    if (requisicao.method === 'GET' && pathname === '/verificar-servidor') {
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.end(JSON.stringify({ sucesso: true, horario: new Date().toISOString() }));
    }
    
    else if (requisicao.method === 'GET' && pathname === '/numero-primo') {
        const numero = parseInt(query.numero, 10);
        if (isNaN(numero) || numero < 1) {
            resposta.writeHead(400, { 'Content-Type': 'application/json' });
            resposta.end(JSON.stringify({ erro: 'Entrada inválida' }));
        } else {
            resposta.writeHead(200, { 'Content-Type': 'application/json' });
            resposta.end(JSON.stringify({ numeroPrimo: verificarNumeroPrimo(numero) }));
        }
    }
    
    else if (requisicao.method === 'POST' && pathname === '/contador') {
        let corpo = '';
        requisicao.on('data', pedaco => { corpo += pedaco; });
        requisicao.on('end', () => {
            try {
                const { incrementar } = JSON.parse(corpo);
                if (typeof incrementar !== 'number' || incrementar <= 0 || !Number.isInteger(incrementar)) {
                    resposta.writeHead(400, { 'Content-Type': 'application/json' });
                    resposta.end(JSON.stringify({ erro: 'Entrada inválida' }));
                } else {
                    contador += incrementar;
                    resposta.writeHead(200, { 'Content-Type': 'application/json' });
                    resposta.end(JSON.stringify({ contador }));
                }
            } catch (erro) {
                resposta.writeHead(400, { 'Content-Type': 'application/json' });
                resposta.end(JSON.stringify({ erro: 'Entrada inválida' }));
            }
        });
    }
    
    else {
        resposta.writeHead(404, { 'Content-Type': 'application/json' });
        resposta.end(JSON.stringify({ erro: 'Não encontrado' }));
    }
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});