let amigo = {
    nome: 'Luis',
    sexo: 'M',
    peso: 73,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}
    amigo.engordar(3)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)