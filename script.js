document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let displayValue = '0';
    let pendingValue;
    let evalStringArray = [];

    const updateDisplay = (clickObj) => {
        const btnText = clickObj.target.innerText;
        
        if (displayValue === '0')
            displayValue = '';

        if (btnText === 'C') {
            displayValue = '0';
            pendingValue = undefined;
            evalStringArray = [];
        } else if (btnText === '=') {
            evalStringArray.push(displayValue);
            const evaluation = eval(evalStringArray.join(' '));
            displayValue = evaluation + '';
            evalStringArray = [];
        } else if (btnText === '+' || btnText === '-' || btnText === '*' || btnText === '/') {
            pendingValue = displayValue;
            evalStringArray.push(pendingValue);
            evalStringArray.push(btnText);
            displayValue = '0';
        } else {
            displayValue += btnText;
        }

        display.innerText = displayValue;
    };

    buttons.forEach(button => {
        button.addEventListener('click', updateDisplay);
    });
});
