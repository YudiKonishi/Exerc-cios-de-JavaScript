let tab = document.querySelector('select#res')
let num = document.querySelector('input#num')
let fin = document.querySelector('div#fim')
lista = []
count = 0
function add() {
    if (count == 0) {
        tab.innerHTML = ""
    }
    if (num.value.length == 0) {
        window.alert('Necessário inserir um número no campo')
    } else if (Number(num.value)>100 || Number(num.value)<1) {
        window.alert('Digite um número entre 1 e 100.')
    } else if (lista.indexOf(parseInt(num.value))==-1) {
        count += 1
        lista.push(parseInt(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado.`
        item.value = `res${count}`
        tab.appendChild(item)
        fin.innerHTML = ''
    } else {
        window.alert('Número já inserido anteriormente.')
    }
    num.value = ''
    num.focus()
}
function fim() {
    if (lista.length == 0) {
        window.alert('Adicone valores antes de finalizar')
    } else {
        let soma = 0
        lista.sort()
        for(let b in lista){
            soma += parseInt(lista[b])
        }
        fin.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.`
        fin.innerHTML += `<br> O maior valor informado foi ${lista[(lista.length-1)]}.`
        fin.innerHTML += `<br> O menor valor informado foi ${lista[0]}.`
        fin.innerHTML += `<br> Somando todos os valores, temos ${soma}.`
        fin.innerHTML += `<br> A média dos termos é ${soma/lista.length}.`
    }
    
}