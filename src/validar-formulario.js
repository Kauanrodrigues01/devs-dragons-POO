const form = document.querySelector('form')
const camposDoFormulario = document.querySelectorAll('[required]')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)) // Verifica se o campo foi preenchido corretamente
    campo.addEventListener("invalid", (evento) => evento.preventDefault()) // Previne a mensagem de erro padrão do HTML
})

const tiposDeErros = [ // Tipos de erros que o campo pode ter
    "valueMissing", // Campo vazio
    "typeMismatch", // Tipo inválido
    "tooShort", // Tamanho menor que o mínimo
    "rangeUnderflow", // Valor menor que o mínimo
    "customError", // Erro customizado
    "patternMismatch", // Não corresponde ao padrão
    "rangeOverflow", // Valor maior que o máximo
    "stepMismatch", // Não corresponde ao passo
    "badInput" // Entrada inválida
]

const mensagens = { // Mensagens de erro que o campo pode ter
    nome: { // Mensagens de erro para o campo de nome
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
        customError: 'O campo de nome deve ter no mínimo 3 caracteres.'
    },
    level: { // Mensagens de erro para o campo de level
        valueMissing: "O campo de level não pode estar vazio.",
        typeMismatch: "Por favor, preencha um número válido.",
        rangeUnderflow: "O valor deve ser maior ou igual a 1.",
        rangeOverflow: "O valor deve ser menor ou igual a 10.",
        customError: 'O campo de level deve ter um número entre 1 e 10.'
    }
}

function verificaCampo(campo) {
    let mensagem = ""
    campo.setCustomValidity('')

    if (campo.name == 'nome') {
        if (campo.value.length < 3 || campo.value.length > 10) {
            campo.setCustomValidity('O campo de nome deve ter entre 3 e 10 caracteres.')
        }
    }

    if (campo.name == 'level') {
        if (campo.value < 1 || campo.value > 10) {
            campo.setCustomValidity('O campo de level deve ter um número entre 1 e 10.')
        }
    }

    tiposDeErros.forEach(erro => { // Verifica se tem algum erro no campo
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro] // Se tiver erro, pega a mensagem de erro correspondente
        }
    })

    const mensagemErro = campo.parentNode.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity() // Se não tiver nenhum erro retorna TRUE e se tiver retorna FALSE

    if (!validadorDeInput) { // Se tiver erro exibe a mensagem de erro
        mensagemErro.textContent = campo.validationMessage || mensagem
    } else { // Se não tiver erro, limpa a mensagem de erro
        mensagemErro.textContent = ""
    }
}