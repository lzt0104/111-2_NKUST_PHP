import startPage from "./startPage.js"
import selectProduct from "./selectProduct.js"

window.onload = function () {
  document.getElementById("root").innerHTML = startPage()
  // axios.post("http://localhost/C111156104/2/DoSelect.php")
  //   .then(res => {
  //     let html = res['data'];
  //     document.getElementById("root").innerHTML =  html;
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  selectProduct()
}