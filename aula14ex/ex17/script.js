function tabuar() {
    let num = document.getElementById("num").value
    let res = document.getElementById("res")
    if (num.length == 0) {
        window.alert('Necessário inserir um número no campo')
    } else {
        num = parseInt(num)
        c = 1
        res.innerHTML = ""   
        while (c<11) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}