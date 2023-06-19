function cal() {
  let aTurnover = 0
  let bTurnover = 0
  let cTurnover = 0
  let aAurplus = 0
  let bAurplus = 0
  let cAurplus = 0
  for (let i = 1 ; i <= 10 ; i++) {
    let aCost = parseInt(document.getElementById("cost" + i + "1").innerHTML)
    let aPrice = parseInt(document.getElementById("price" + i + "1").innerHTML)
    let aNumber = parseInt(document.getElementById("number" + i + "1").value)
    let bCost = parseInt(document.getElementById("cost" + i + "2").innerHTML)
    let bPrice = parseInt(document.getElementById("price" + i + "2").innerHTML)
    let bNumber = parseInt(document.getElementById("number" + i + "2").value)
    let cCost = parseInt(document.getElementById("cost" + i + "3").innerHTML)
    let cPrice = parseInt(document.getElementById("price" + i + "3").innerHTML)
    let cNumber = parseInt(document.getElementById("number" + i + "3").value)
    aTurnover += aPrice * aNumber
    bTurnover += bPrice * bNumber
    cTurnover += cPrice * cNumber
    aAurplus += (aPrice - aCost) * aNumber
    bAurplus += (bPrice - bCost) * bNumber
    cAurplus += (cPrice - cCost) * cNumber
    document.getElementById("totalNumber" + i).innerHTML = aNumber + bNumber + cNumber
  }
  document.getElementById("aTurnover").innerHTML = aTurnover
  document.getElementById("bTurnover").innerHTML = bTurnover
  document.getElementById("cTurnover").innerHTML = cTurnover
  document.getElementById("Turnover").innerHTML = aTurnover + bTurnover + cTurnover
  document.getElementById("aAurplus").innerHTML = aAurplus
  document.getElementById("bAurplus").innerHTML = bAurplus
  document.getElementById("cAurplus").innerHTML = cAurplus
  document.getElementById("Aurplus").innerHTML = aAurplus + bAurplus + cAurplus
}

export default cal