
function calcNumber(event) {
    const btn = event.target.value;
    const textField = document.getElementById('input-text');
    const textFieldValue = textField.value;
    if (btn === '<') {
        const textSplit = textFieldValue.split('');
        textSplit.pop();
        const result = textSplit.join('');
        textField.value = result;
    }

    else if (btn === 'C') {
        textField.value = '';
    }
    else if (btn === 'div') {
        textField.value += '';
        // return '';
    }
    else if (btn === '=') {
        const result = eval(textField.value);
        textField.value = result;
    }
    else {
        textField.value += btn;
    }
    return textField.value;

}


document.getElementById('calculation').addEventListener('click', function (event) {
    const text = calcNumber(event);
})
