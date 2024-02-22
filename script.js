function numeroParaPalavras(valor) {
    var unidades = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    var dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    var centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
    var especiais = {10: 'dez', 11: 'onze', 12: 'doze', 13: 'treze', 14: 'quatorze', 15: 'quinze', 100: 'cem'};

    if (valor in especiais) {
        return especiais[valor].charAt(0).toUpperCase() + especiais[valor].slice(1) + ' reais';
    }

    var valorEscrito = '';
    var valorStr = valor.toString();

    if (valorStr.length === 4) {
        valorEscrito += unidades[parseInt(valorStr[0])] + ' mil ';
        valorStr = valorStr.substring(1);
    }
    if (valorStr.length === 3) {
        valorEscrito += centenas[parseInt(valorStr[0])] + ' ';
        valorStr = valorStr.substring(1);
    }
    if (valorStr.length === 2) {
        if (valorStr[1] !== '0') {
            valorEscrito += dezenas[parseInt(valorStr[0])] + ' ';
        } else {
            valorEscrito += dezenas[parseInt(valorStr[0])];
        }
        valorStr = valorStr.substring(1);
    }
    if (valorStr.length === 1 && valorStr[0] !== '0') {
        valorEscrito += unidades[parseInt(valorStr[0])];
    }

    // Adiciona a palavra "reais" ao final e garante que a primeira letra seja maiúscula
    if (valor !== '0') {
        valorEscrito = valorEscrito.charAt(0).toUpperCase() + valorEscrito.slice(1) + ' reais';
    } else if (valor === '0') {
        valorEscrito = 'Zero reais';
    }

    return valorEscrito.trim();
}

document.getElementById('valor').addEventListener('input', function(e) {
    var valor = e.target.value;
    var valorEscrito = numeroParaPalavras(valor); // Função que converte o número em palavras
    document.getElementById('valorEscrito').value = valorEscrito;
});

document.getElementById('reciboForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var instituicao = document.getElementById('instituicao').value;
    var aluno = document.getElementById('aluno').value;
    var data = document.getElementById('data').value;
    var recebemosDe = document.getElementById('recebemosDe').value;
    var valor = document.getElementById('valor').value;
    var valorEscrito = document.getElementById('valorEscrito').value;
    var mes = document.getElementById('mes').value;
    var recibo = 'Recibo: ' + instituicao + ', Aluno(a): ' + aluno + ', Data: ' + data + ', Recebemos de: ' + recebemosDe + ', a importância de: ' + valor + ', referente ao pagamento da mensalidade do mês de: ' + mes;

    // Cria uma nova janela ou aba no navegador
    var printWindow = window.open('', '_blank');

    // Adiciona o conteúdo do recibo à nova janela
    printWindow.document.write('<html><head><title>Recibo</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="estilo.css">');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; font-size: 14pt; } h1 { font-size: 24pt; text-align: center;} button { background-color: blue; border-radius: 10px;} img { width: 40%; height: auto; display: block; margin: 0 auto; } .info { border: 1px solid black; padding: 10px; margin-top: 20px; }  @media print{ button {opacity: 0;}}  </style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<button onclick="window.print()" style="background-color: #007BFF; color: white; padding: 8px; border: none; border-radius: 2px;">Imprimir</button>'); // Adiciona o botão de imprimir
    printWindow.document.write('<img src="assets/logo.png" alt="Logo">'); // Adiciona a logo
    printWindow.document.write('<h1>RECIBO DE PAGAMENTO</h1>');
    printWindow.document.write('<p><strong>Instituição:</strong> ' + instituicao + '</p>');
    printWindow.document.write('<p><strong>Aluno(a):</strong> ' + aluno + '</p>');
    printWindow.document.write('<p><strong>Data:</strong> ' + data + '</p>');
    printWindow.document.write('<p><strong>Recebemos de:</strong> ' + recebemosDe + '</p>');
    printWindow.document.write('<p><strong>A importância de:</strong> ' + valorEscrito + '</p>');
    printWindow.document.write('<p><strong>Valor:</strong> R$ ' + valor + '</p>');
    printWindow.document.write('<p><strong>Referente ao pagamento da mensalidade do mês de:</strong> ' + mes + '</p>');
    printWindow.document.write('<div class="info">');
    printWindow.document.write('<p style="text-align: center;">PARA MAIOR CLAREZA AFIRMAMOS O PRESENTE</p>');
    printWindow.document.write('<p><strong>EMITENTE:</strong> CENTRO EDUCACIONAL CAMINHO DO FUTURO</p>');
    printWindow.document.write('<p><strong>CNPJ:</strong> 18640449/0001-80</p>');
    printWindow.document.write('<p><strong>RUA:</strong> TRAVESSA BERILO Nº185 – BAIRRO: TARUMÃ – AÇÚ</p>');
    printWindow.document.write('<p><strong>BAIRRO:</strong> COMUNIDADE UNIÃO DA VITORIA- CEP: 69023-030</p>');
    printWindow.document.write('<p><strong>FONE:</strong> (92) 99291-8906 / (92) 99429-0147</p>');
    printWindow.document.write('<p><strong>E-mail:</strong> patrícia.stefany.stela@gmail.com</p>');
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');

    // Fecha o documento para que seja possível imprimir
    printWindow.document.close();

    // Foca na nova janela
    printWindow.focus();
});
