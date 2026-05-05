const bancoDePlacas = {
    "MATRIZ": [
        "POH5E84", "POC4C24", "PNI1D31", "PMW1H71", "POD4B43", "PNG7965", "PNH0588", 
        "PMU7726", "SBR9G20", "PNB4912", "ORR1913", "PON2103", "PMR4E11", "POH5H34", 
        "OCN5632", "POX2A52", "SMB8J00", "POK9E56", "POU0172", "RIA4E20", "RIA3B30"
    ],
    "SILAS": [
        "RIE4E35", "RIE2H20", "RIC2E07", "SAX8F01", "SBR9B50"
    ],
    "BARROSO": [
        "TIF8J01", "SBN2C62", "SBN2J12"
    ],
    "SITIO": [
        "SAX7H51", "POU5G33", "RID1J23", "NUO6A84", "RIA5G70", "POE1H71", "SBM0H10", 
        "POD1103", "PNG7945", "RIA7H19", "RIA7J09", "POU5L03", "PNN4862", "POV0J43"
    ],
    "STA_ROSA": [
        "TLL1F49", "RIF9G21", "PNQ1J91", "SAX9F71", "PNU6G11", "POX5468"
    ]
};
const inputPlaca = document.getElementById("placa");

// Função de validação
function validar() {
    const placaDigitada = inputPlaca.value.trim().toUpperCase();
    
    // Identifica a loja pelo nome do arquivo HTML (ex: matriz, silas)
    // Se a URL for ".../matriz.html", nomeLoja vira "MATRIZ"
    let nomeArquivo = window.location.pathname.split("/").pop().replace(".html", "");
    const lojaAtual = nomeArquivo.toUpperCase();

    const placasPermitidas = bancoDePlacas[lojaAtual] || [];//

    if (placasPermitidas.includes(placaDigitada)) {
        alert("✅ TUDO OK! Placa confirmada para a unidade " + lojaAtual);
    } else {
        alert("❌ ERRO: Placa inválida para a unidade " + lojaAtual + ". Verifique se você está na loja correta.");
        inputPlaca.value = ""; // Limpa o campo digitado
    }
}

// Escuta a tecla ENTER
inputPlaca.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        validar();
    }
});

// Mantém o evento de "change" (quando clica fora do campo) se desejar
inputPlaca.addEventListener("change", validar);