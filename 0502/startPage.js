function startPage(){
    const startPage = `
    身高：<input type="text" id="height"><br>
    體重：<input type="text" id="weight"><br>
    BMI：<div id="bmi"></div><br>
    <button id="cal">計算</button>
    `
    return startPage
}
export { startPage }