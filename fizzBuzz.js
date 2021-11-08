// fizzbuzz
//fizz = divisivel por 3
// buzz = divisivel por 5
// se não for um numero ='não éum numero'
//se não for divisil nem por 3 e 5 =Entrada.

let resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'Fizzbuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'buzz'
    return entrada;
}