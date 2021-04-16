const sumar = require('./sumar')
const restar = require('./restar')
const dividir = require('./dividir')
const multiplicar = require('./multiplicar')
let yargs =  require('yargs')
let operador = yargs.argv.operador
let a = Number(yargs.argv.a)
let b = Number(yargs.argv.b)

//Para utilizar la calculadora se debe ejecutar node calculadora.js --operador 'operacion' --a 'valor de a' --b 'valor de b'
switch(operador){
    case 'sumar':
    case '+':
        console.log(sumar(a,b))
    break;
    case 'restar':
    case '-':
        console.log(restar(a,b))
    break;
    case 'multiplicar':
    case '*':
        console.log(multiplicar(a,b))
    break;
    case 'dividir':
    case '/':
        console.log(dividir(a,b))
    break;
    default:
        console.log(`La opcion '${operador}' es inválida`)
}


  

