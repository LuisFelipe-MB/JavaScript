function contador() {
    let ti = window.document.getElementById('txti')
    let tf = window.document.getElementById('txtf')
    let tp = window.document.getElementById('txtp')
    let res = window.document.querySelector('div#res')
    let i = Number(ti.value)
    let f = Number(tf.value)
    let p = Number(tp.value)
    if (i == '' || f == '') {
        res.innerHTML = 'Impossível Contar!'
    } else if (p == 0) {
            window.alert("[ERRO] Passo inválido! Considerando passo 1")
            p = 1
            res.innerHTML = '<p>Contando:</p>'
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }   
        } else if (i > f) {
            //Contagem Descrescente
            res.innerHTML = '<p>Contando:</p>'
            for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }   
        } else {
            //Contagem crescente
            res.innerHTML = '<p>Contando:</p>'
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }   
        }
        res.innerHTML += `\u{1F3C1}`
}