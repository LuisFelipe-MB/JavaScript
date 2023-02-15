function media(n1=0, n2=0) {
    return (n1 + n2)/2
}

console.log("---------------------------")
console.log("Média das notas do simulado")
console.log("---------------------------")
let res = media(8, 9)
if(res >= 6) {
    console.log(`O aluno foi aprovado com média igual a ${res}`)
}else {
    console.log(`O aluno foi reprovado devido a pontuação menor que a média, a qual foi ${res}`)
}