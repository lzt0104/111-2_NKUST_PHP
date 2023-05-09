function getRadioValue() {
    let radioButton = document.getElementsByName("member") 
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            return radioButton[i].value
        }
    }
}
export {getRadioValue}