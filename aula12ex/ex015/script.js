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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexinf[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4) {
                //Bebê    
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(sexinf[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 14) {
                //Criança   
                img.setAttribute('src', 'menina.png')
            }else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}