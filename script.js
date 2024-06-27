// script.js

document.addEventListener('DOMContentLoaded', () => {
    const containerF = document.createElement('div');
    containerF.classList.add('container-fluid');

    const introDiv = document.createElement('div');
    introDiv.setAttribute('class', 'w-100 h-auto my-2 intro-div');

    const titleH1 = document.createElement('h1');
    titleH1.setAttribute('id', 'title');
    titleH1.setAttribute('class', 'h1 text-center my-2');
    titleH1.innerHTML = `<span class="px-3 py-2 text-uppercase text-dark title-span">Basic Calculator</span>`;

    const titleP = document.createElement('p');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    const col = document.createElement('div');
    col.setAttribute('class', 'col-11 col-md-10 col-lg-4 m-auto mb-5 cal-div');

    const calculatorDiv = document.createElement('div');
    calculatorDiv.setAttribute('class', 'calculator mx-3 mt-4');

    const display = document.createElement('input');
    display.setAttribute('type', 'text');
    display.setAttribute('id', 'result');
    display.setAttribute('placeholder', '0');
    display.setAttribute('readonly', 'readonly');
    display.setAttribute('class', 'w-100 text-end h-auto form-control fw-bold');

    const buttonsLayout = document.createElement('div');
    buttonsLayout.classList.add('row');

    const buttonColumns = [];
    const buttonTexts = ['AC', '⌫', '%', '*', 7, 8, 9, '/', 4, 5, 6, '-', 1, 2, 3, '+', 0, '00', '.', '='];

    for (let i = 0; i < buttonTexts.length; i++) {
        const buttonColumn = document.createElement('div');
        buttonColumn.setAttribute('class', 'col-3 my-3 d-flex justify-content-center align-items-center');

        const button = document.createElement('button');
        button.setAttribute('class', 'w-100 btn');
        button.textContent = buttonTexts[i];
        button.addEventListener('click', () => {
            appendToDisplay(button.textContent);
        });

        buttonColumn.appendChild(button);
        buttonColumns.push(buttonColumn);
        buttonsLayout.appendChild(buttonColumn);
    }

    calculatorDiv.append(display, buttonsLayout);
    col.appendChild(calculatorDiv);
    rowDiv.appendChild(col);
    introDiv.append(titleH1, titleP);
    containerF.append(introDiv, rowDiv);
    document.body.appendChild(containerF);
});

function appendToDisplay(value) {
    const display = document.getElementById('result');
    if (value === 'AC') {
        display.value = '';
    } else if (value === '⌫') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            alert('Invalid Input');
            display.value = '';
        }
    } else {
        display.value += value;
    }
}
