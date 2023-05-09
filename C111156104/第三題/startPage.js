function startPage() {
    const startpage = `
    <table>
    <tr><td><img src="./img1.png" id="img1"></td><td><img src="./img2.png" id="img2"></td><td><img src="./img3.png" id="img3"></td></tr>
    <tr><td><img src="./img4.png" id="img4"></td><td><img src="./img5.png" id="img5"></td><td><img src="./img6.png" id="img6"></td></tr>
    </table>
    <p>請選擇您的商品：<select id="op">
        <option value="0">請選擇商品</option>
        <option value="1">【TOSHIBA 東芝】58型 $12,999</option>
        <option value="2">【JVC】50型 $10,988</option>
        <option value="3">【小米】65型 $15,990</option>
        <option value="4">【HERAN 禾聯】55型 $9,999</option>
        <option value="5">【DigiKing】43吋 $4,999</option>
        <option value="6">【Haier 海爾】50型 $8,988</option>
    </select></p>
    `
    return startpage
}
export { startPage }