/**
 * PROJETO: Cidadania Digital e IA (2026)
 * SCRIPT: Manipulação dinâmica do DOM para acessibilidade e validação de quiz.
 */

// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function () {
    
    /* ==========================================================================
       FUNCIONALIDADE 1: Acessibilidade - Modo Escuro (Toggle Dark Mode)
       ========================================================================== */
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    
    // Captura o clique do usuário para alternar o tema do site
    toggleDarkModeBtn.addEventListener("click", function () {
        // Verifica o tema atual configurado na tag HTML raiz
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            // Se estiver escuro, muda para o padrão claro
            document.documentElement.removeAttribute("data-theme");
            toggleDarkModeBtn.textContent = "🌓 Modo Escuro";
        } else {
            // Se estiver claro, adiciona o atributo de modo escuro
            document.documentElement.setAttribute("data-theme", "dark");
            toggleDarkModeBtn.textContent = "☀️ Modo Claro";
        }
    });

    /* ==========================================================================
       FUNCIONALIDADE 2: Validador do Quiz Anti-Desinformação
       ========================================================================== */
    const submitQuizBtn = document.getElementById("btn-submit-quiz");
    const resultBox = document.getElementById("quiz-result");

    submitQuizBtn.addEventListener("click", function () {
        // Armazena as respostas selecionadas pelo usuário em variáveis
        const answerQ1 = document.getElementById("q1").value;
        const answerQ2 = document.getElementById("q2").value;

        // Validação simples: impede o envio se o formulário estiver incompleto
        if (answerQ1 === "" || answerQ2 === "") {
            resultBox.textContent = "⚠️ Por favor, selecione uma resposta para todas as perguntas.";
            resultBox.style.backgroundColor = "#feebc8"; // Estilo temporário de alerta
            resultBox.style.color = "#c05621";
            resultBox.style.borderColor = "#c05621";
            resultBox.classList.remove("hidden");
            return; // Interrompe a execução
        }

        // Processamento das variáveis para calcular a pontuação
        let score = 0;
        if (answerQ1 === "correto") score++;
        if (answerQ2 === "correto") score++;

        // Exibe o feedback dinamicamente alterando textos e exibindo a div
        resultBox.classList.remove("hidden");
        
        // Customização da resposta baseada no acerto do usuário
        if (score === 2) {
            resultBox.textContent = `🎉 Excelente! Você acertou ${score} de 2 perguntas. Você tem uma boa base para identificar conteúdos falsos e deepfakes!`;
            resultBox.style.backgroundColor = "#c6f6d5";
            resultBox.style.color = "#2f855a";
            resultBox.style.borderColor = "#2f855a";
        } else {
            resultBox.textContent = `📚 Você acertou ${score} de 2. Lembre-se sempre de redobrar a atenção, analisar as pistas visuais e nunca compartilhar mídias suspeitas!`;
            resultBox.style.backgroundColor = "#fed7d7"; // Tons avermelhados para revisão
            resultBox.style.color = "#9b2c2c";
            resultBox.style.borderColor = "#9b2c2c";
        }
    });
});
