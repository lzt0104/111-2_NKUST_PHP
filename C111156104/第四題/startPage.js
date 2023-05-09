function startPage(){
    const startpage = `
    <table border="1" style="text-align:center" >
        <tr style="background-color: aqua;"><td rowspan="2">商品編號</td><td colspan="3">1月</td><td colspan="3">2月</td><td colspan="3">3月</td><td rowspan="2">總數量</td></tr>
        <tr style="background-color: aqua;"><td>成本</td><td>售價</td><td>數量</td><td>成本</td><td>售價</td><td>數量</td><td>成本</td><td>售價</td><td>數量</td></tr>
        <tr><td style="background-color: yellow;">1</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">2</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">3</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">4</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">5</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">6</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">7</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">8</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">9</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr><td style="background-color: yellow;">10</td><td>90</td><td>86</td><td><input type="text" name="1"></td><td>90</td><td>86</td><td><input type="text" name="2"></td><td>90</td><td>86</td><td><input type="text" name="3"></td><td style="background-color: greenyellow;"></td></tr>
        <tr style="background-color: lightblue;"><td>營業額</td><td colspan="3"></td><td colspan="3"></td><td></td><td></td><td></td><td>總營業額</td></tr>
        <tr style="background-color: pink;"><td>盈餘</td><td colspan="3"></td><td colspan="3"></td><td></td><td></td><td></td><td>盈餘</td></tr>
    </table>
    <button id="cal">計算</button>`
    return startpage
}
export {startPage}