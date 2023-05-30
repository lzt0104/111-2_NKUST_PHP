function startPage(){
    const startPage = `
    國文：<input type="text" id="chi"><br>
    英文：<input type="text" id="eng"><br>
    數學：<input type="text" id="math"><br>
    平均：<div><span id="avg"></span></div><br>
    <button id="cal">計算</button>
    `
    return startPage
}
export {startPage}