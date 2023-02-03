function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoinf= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anoinf.value.length == 0 || Number(anoinf.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexinf = document.getElementsByName('radsex')
        var idade = ano - Number(anoinf.value)
        var genero = ''
        if (sexinf[0].checked) {
            genero = 'H'
        } else {
            genero = 'M'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}