const resultHTML =document.querySelector('result')
const outputHTML = document.querySelector('#output')
const buttonsList = document.querySelectorAll('button')
console.log(buttonsList)

for (let i = 0; i < buttonsList.length; i++) {
    console.log(buttonsList[i])
    buttonsList[i].addEventListener('click', calculate)
}
function calculate(){
    let buttonText= this.innerText
    console.log(buttonText)
    if (buttonText == 'AC'){

    }
    else if (buttonText == 'DEL'){

    }
    else if (buttonText == '='){
        let result = eval(outputHTML.innerText)
        resultHTML.innerText = ;
    }
    else {
        outputHTML.innerText += buttonText;
    }
}