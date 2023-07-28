
function somar(){
  const numeros = document.getElementsByName('numero')
  let total=0
  for(let num of numeros){
    total += parseFloat(num.value)
  }
  document.getElementById('resposta').textContent = total
}

function subtrair(){
  const numeros = document.getElementsByName('numero')
  let total = parseFloat(numeros[0].value) - parseFloat(numeros[1].value)

  document.getElementById('resposta').textContent = total
}
