
let buttons = [...document.getElementsByTagName("button")];

let string = document.getElementById("display-div").innerHTML;

document.getElementById("clear-div").addEventListener("click", function () {
    string = ""
    document.getElementById("display-div").innerHTML = string
    document.getElementById("display-error").innerHTML = ""
})

buttons.map(function (button) {
    button.addEventListener("click", function (event) {
        string = string + event.target.innerHTML;
        document.getElementById("display-div").innerHTML = string
    })
})

document.getElementById("equalTo").addEventListener("click", function () {
    try {
        document.getElementById("display-div").innerHTML = eval(string)
        string = eval(string)
    } catch (error) {
        document.getElementById("display-error").innerHTML = "Invalid Expression"
    }

})



