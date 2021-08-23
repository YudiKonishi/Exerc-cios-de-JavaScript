
function contar() {
    var ini = (document.getElementById("ini").value)
    var fim = (document.getElementById("fim").value)
    var pulo = (document.getElementById("pulo").value)
    var res = document.querySelector("div#res")
    var conc = ""
    
    if (ini.length == 0 || fim.length == 0 || pulo.length == 0) {
        window.alert('Faltam dados!')
    }else{
        ini = Number(ini)
        fim = Number(fim)
        pulo = Number(pulo)
        if (ini<fim) {
            if (pulo==0) {
                for(var count = ini; count <= fim; count++) {
                    conc += count.toString() + '👉'
                }
            }else {
                for(var count = ini; count <= fim; count += pulo) {
                    conc += count.toString() + '👉'
                }
            }
        } else if (ini == fim) {
            window.alert('Início e fim iguais, não existem números a serem contados.')

        } else {
            if (pulo==0) {
                for(var count = ini; count >= fim; count--) {
                    conc += count.toString() + '👉'
                }
            }else {
                for (var count = ini; count >= fim; count -= pulo) {
                    conc += count.toString() + '👉'
                }
            }
        }
    }
res.innerHTML = `${conc}🏴`
}
