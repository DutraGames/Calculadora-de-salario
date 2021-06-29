
const SalMin = '1054'


function cal () {
    let Seu = document.getElementById('input').value
    let Sal = document.getElementById('sal')
    let Valor = (Seu / SalMin)
    Sal.innerHTML = 'Você recebe: ' + Valor.toFixed(2) + ' Sálario(s) Mínimo(s)'
}