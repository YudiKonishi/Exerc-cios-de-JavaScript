var data = new Date()
var hora = data.getHours()
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'manhã.png'
        document.body.style.background = 'rgb(136, 165, 169)'
    }else if (hora < 19) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(198, 190, 92)'
    }else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = 'rgb(80, 56, 85)'
    }
}