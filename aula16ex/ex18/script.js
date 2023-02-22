let num = document.querySelector('input#fnum')
let tab = document.querySelector('select#ftab')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function intabela(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function numeros() {
    if(isNumber(num.value) && !intabela(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já presente na tabela')
    }
    num.value = ''
    num.fucus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else {
        valores.sort()
        let total = valores.length
        let menor = valores[0]
        let maior = valores[total - 1]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma/total
        } 
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
    
}