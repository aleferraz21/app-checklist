function enviarChecklist() {
    const placaMoto = document.getElementById('placa').value;
    const itens = [
        'pneus', 'farois', 'piscas', 'transmissao', 
        'retrovisores', 'oleo', 'bau', 'freio-tras', 'freio-diant'
    ];
    let checklistFinal = {};
    let pendente = false;
    itens.forEach(item => {
        const selecionado = document.querySelector(`input[name="${item}"]:checked`);
        
        if (selecionado) {
            checklistFinal[item] = selecionado.value;
        } else {
            pendente = true; 
        }
    });
    if (placaMoto === "") {
        alert("❌ Por favor, digite a placa da moto!");
        return;
    }

    if (pendente) {
        alert("⚠️ Você esqueceu de marcar algum item do checklist!");
    } else {
        const agora = new Date();
        const dadosCompletos = {
            placa: placaMoto,
            data: agora.toLocaleDateString('pt-BR'),
            hora: agora.toLocaleTimeString('pt-BR'),
            respostas: checklistFinal
        };
        alert("✅ Checklist enviado com sucesso!");
        
        console.log("Dados que serão enviados ao backend:", dadosCompletos);
}
}