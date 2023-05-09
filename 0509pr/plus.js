function plus() {
    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    let ans = parseInt(a) + parseInt(b)
    return ans
}
export { plus }