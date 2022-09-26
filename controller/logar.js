function logar(){
    var emails = document.getElementById('emails').value
    var senha = document.getElementById('senha').value

console.log(JSON.stringify({
    emails:emails,
    senha:senha
}));

    fetch("/logar",{
        method:'POST',
        body: JSON.stringify({
            emails:emails,
            senha:senha
        }),
        
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            alert("CONECTADO")
        }else {
            alert("Nome e Senha inválidos")
        }
        
    });

}