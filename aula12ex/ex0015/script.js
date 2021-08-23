function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var art = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            art = 'um'
            if (idade >= 0 && idade <= 2) {
                genero = 'recém-nascido'
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 12) {
                genero = 'menino'
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                genero = 'adolescente'
                img.setAttribute('src', 'adolescente-homem.png')
            } else if (idade < 65) {
                genero = 'homem'
                img.setAttribute('src', 'homem.png')
            } else {
                genero = 'idoso'
                img.setAttribute('src', 'homem-velho.png')
            }
        } else if (fsex[1].checked) {  
            art = 'uma'
            if (idade >= 0 && idade <= 2) {
                genero = 'recém-nascida'
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade < 12) {
                genero = 'menina'
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                genero = 'adolescente'
                img.setAttribute('src', 'adolescente-mulher.png')
            } else if (idade < 50) {
                genero = 'mulher'
                img.setAttribute('src', 'mulher.png')
            } else {
                genero = 'mulher'
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${art} ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
