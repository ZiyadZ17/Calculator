const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', count);

function funPlus(a, b) {
    let ans = Number(a) + Number(b);
    result.innerHTML = ans;
}

function funMinus(a, b) {
    let ans = Number(a) - Number(b);
    result.innerHTML = ans;
}

function funMulti(a, b) {
    let ans = Number(a) * Number(b);
    result.innerHTML = ans;
}

function funDivide(a, b) {
    let ans = Number(a) / Number(b);
    result.innerHTML = ans;
}

function count() {
    const sign = document.querySelector('.sign').value;
    const inputA = document.querySelector('.input-a').value;
    const inputB = document.querySelector('.input-b').value;

    switch (sign) {
        case '+':
            funPlus(inputA, inputB);
        break;

        case '-':
            funMinus(inputA, inputB);
        break;

        case '*':
            funMulti(inputA, inputB);
        break;

        case '/':
            funDivide(inputA, inputB);
        break;
    
        default:
            break;
    }
}