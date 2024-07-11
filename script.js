//resgatar os botões
const buttons = document.querySelectorAll('.btn_calculator');
//mostrar o valor do botão no console 
buttons.forEach(e => {
   e.addEventListener('click', () => {   
    calculatorButton = e.value;
    if(calculatorButton === 'C')
    {
        clearCalculatorDisplay()
    }
    if (calculatorButton === '=') {
        calculate()
    }
    if (calculatorButton === '<') {
        deleteLastElement()
    }
    if (calculatorButton !== 'C'  && calculatorButton !== '=' && calculatorButton !== '<') 
    {
        addElement(calculatorButton)
    }
})
});

function addElement(num) {
    const displayScreen = document.querySelector('.calculator__results__screen');
    let displayValue = displayScreen.value;
    // Certifique-se de que displayValue seja uma string
    displayValue = String(displayValue);
    // Concatena o número ao valor atual da tela e atualiza o valor na tela
    displayScreen.value = displayValue + num;
    // Exibe o valor atualizado no console
}

function clearCalculatorDisplay() {
    document.querySelector('.calculator__results__screen').value = ''
}

function calculate() {
    const displayValue = document.querySelector('.calculator__results__screen').value;
    document.querySelector('.calculator__results__screen').value = eval(displayValue)
}

function deleteLastElement() {
    const displayValue = document.querySelector('.calculator__results__screen').value;
    document.querySelector('.calculator__results__screen').value = displayValue.slice(0, -1);
}