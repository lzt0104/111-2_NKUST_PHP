function startPage() {
  let startPage =`
    <table>
      <tr class="header">
        <td rowspan="2">商品編號</td>
        <td colspan="3">一月</td>
        <td colspan="3">兩月</td>
        <td colspan="3">三月</td>
        <td rowspan="2">總數量</td>
      </tr>
      <tr class="header2">
        <td class="cost">成本</td><td class="price">售價</td><td class="number">數量</td>
        <td class="cost">成本</td><td class="price">售價</td><td class="number">數量</td>
        <td class="cost">成本</td><td class="price">售價</td><td class="number">數量</td>
      </tr>
  `
  for (let i = 1 ; i <= 10 ; i++) {
    startPage += `
      <tr>
        <td class="Number">${i}</td>
        <td id="cost${i}1">${i * 10}</td><td id="price${i}1">${i * 10 + 2}</td><td><input type="number" min="0" value="1" id="number${i}1"></td>
        <td id="cost${i}2">${i * 12}</td><td id="price${i}2">${i * 12 + 7}</td><td><input type="number" min="0" value="1" id="number${i}2"></td>
        <td id="cost${i}3">${i * 15}</td><td id="price${i}3">${i * 15 + 11}</td><td><input type="number" min="0" value="1" id="number${i}3"></td>
        <td class="totalNumber" id="totalNumber${i}"></td>
      </tr>
    `
  }
  startPage += `
      <tr class="Turnover">
        <td>營業額</td>
        <td colspan="3" id="aTurnover"></td>
        <td colspan="3" id="bTurnover"></td>
        <td colspan="3" id="cTurnover"></td>
        <td id="Turnover">總營業額</td>
      </tr>
      <tr class="Aurplus">
        <td>盈餘</td>
        <td colspan="3" id="aAurplus"></td>
        <td colspan="3" id="bAurplus"></td>
        <td colspan="3" id="cAurplus"></td>
        <td id="Aurplus">總盈餘</td>
      </tr>
    </table>
    <br>
    <div><button id="cal">計算</button></div>
  `
  return startPage
}

export default startPage