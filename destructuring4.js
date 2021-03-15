//destructuring em array dentro de function
function rand ([min = 0, max = 1000] = [] ){
    if (min > max) [min, max] = [max, min] //condicionador que evita erros, trocando posições caso estejam invalidas
    const valor = Math.random() * (max - min) + min // esse '+ min' faz os valores no console log ficarem delimitados entre as 2 opções
    return Math.floor(valor) //floor pois ali encima tá declarado como + min
}

console.log(rand([50,20])) //exemplo do min > max e resultando na troca de posições
console.log(rand([840]))
console.log(rand([, 5]))
console.log(rand([]))
console.log(rand())