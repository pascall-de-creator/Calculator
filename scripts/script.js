var inputfield = document.getElementById("input")
var equation = ""

function clearinput() {
    inputfield.value = ""
    equation = ""
}
function backspace() {
    var eqArray = []
    for (let index = 0; index < equation.length; index++) {
        eqArray.push(equation[index])
    }
    eqArray.pop(eqArray.length)
    var stringed = eqArray.toString()
    stringed = stringed.replaceAll(',','')
    equation = stringed
    inputfield.value = equation
}
function typein(char) {
    equation = equation.concat(char)
    inputfield.value = equation
}
function solve() {
    try {
        inputfield.value = eval(inputfield.value)
        equation = ""
    } catch (error) {
        alert("Error: can not evaluate equation")
    }
}