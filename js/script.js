function entrar(){
    
}


/*Cadastrar usuário */

function validarUsu(){
    let nomeUsu = document.getElementById('nomeUsu')
    let emailUsu = document.getElementById('emailUsu')
    let resCad = document.getElementById('resCad')
    if(nomeUsu.value.length == 0 && emailUsu.value.length == 0){
        resCad.innerHTML = `&#x274C; Cadastro inválido &#x274C; <br> Insira os dados corretamente!`
        resCad.style.backgroundColor = `rgb(174, 255, 187)`
        resCad.style.height = `60px`
        resCad.style.fontSize = `13px`
    }else{
        resCad.innerHTML = `&#x2714; Cadastro realizado com sucesso! &#x2714;`
        resCad.style.backgroundColor = `rgb(174, 255, 187)`
        resCad.style.height = `40px`
        resCad.style.fontSize = `13px`
    }
}
/*Enviar senha nova */

function novaSenha(){
    let emailNovo = document.getElementById('emailNovo')
    let resNovaSenha = document.getElementById('resNovaSenha')
    if(emailNovo.value.length == 0){
        resNovaSenha.innerHTML = `&#x274C; Insira seu e-mail corretamente! &#x274C;`
        resNovaSenha.style.backgroundColor = `rgb(174, 255, 187)`
        resNovaSenha.style.height = `40px`
        resNovaSenha.style.fontSize = `13px`
    }
    else{
        resNovaSenha.innerHTML = `&#x2714; E-mail enviado com sucesso! &#x2714;<br> Verifique seu e-mail. `
        resNovaSenha.style.backgroundColor = `rgb(174, 255, 187)`
        resNovaSenha.style.height = `60px`
        resNovaSenha.style.fontSize = `13px`
    }
}
