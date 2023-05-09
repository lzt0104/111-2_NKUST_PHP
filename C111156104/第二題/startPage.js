function startPage(){
    const startpage = `
    <span>小明擁有：<input type="text" id="a"></span>
    <table>
        <tr><td></td><td>單價</td><td>數量</td></tr>
        <tr><td>鉛筆</td><td>20</td><td><input type="text" id="b"></td></tr>
        <tr><td>橡皮擦</td><td>15</td><td><input type="text" id="c"></td></tr>
        <tr><td>小明</td><td id="ans">？</td></tr>
    </table>
    `
    return startpage
}
export {startPage}