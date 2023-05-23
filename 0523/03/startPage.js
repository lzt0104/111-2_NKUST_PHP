function startPage() {
    const startPage = `
    <input type="text" id="a">
    <select id="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" id="b">
    =
    <div id="ans"></div><br>
    <button id="cal">計算</button>
    `
    return startPage
}
export { startPage }