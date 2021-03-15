//destructuring em function

function rand( { min = 0, max = 1000} = {}){ // declarar o = {} condiciona o destructuring à caso não tenha algum valor definido, trabalhe com o objeto original
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
    console.log(rand(obj)) //sorteira numeros entre 50 e 40
    console.log(rand({min:955}))//sorteia numeros entre 955 e 1000
    console.log(rand({}))//declarando objeto vazio, não delimita nada em específico, assim acaba sorteando números entre 0 e 1000
    console.log(rand())// tendo
