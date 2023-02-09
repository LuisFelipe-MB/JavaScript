function tabuada() {
    let tab = window.document.getElementById('seltab')
    let tn1 = window.document.getElementById('txtn1')
    let n1 = Number(tn1.value)
    if(tn1.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}