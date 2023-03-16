// Form
const form = document.querySelector('form');
const complet = document.querySelector('.complet');

// Full Name
const formInput = document.querySelector('.form_input');
const fullName = document.querySelector('.full_name');

// Card Number
const formCardNum = document.querySelector('.form_input.card');
const cardNum = document.querySelector('.card_number');

// Card Date
const inputMonth = document.querySelector('.form_input_date');
const inputYears = document.querySelector('.form_input_date.years');
const inputNum = document.querySelector('.form_input_num');
const month = document.querySelector('.date');
const years = document.querySelector('.years');
const cvcCode = document.querySelector('.cvc');

// Form Button
const btn = document.querySelector('.btn_form');
const btnS = document.querySelector('.btn_form_s');

// Full Name
formInput.addEventListener('input', () => {
    fullName.textContent = formInput.value;
    if (fullName.textContent == '') {
        cardNum.textContent = 'Felicia Leire';
    };
});

// Number Card
formCardNum.addEventListener('input', () => {
    cardNum.textContent = formCardNum.value;
    cardNum.textContent = cc_format(formCardNum.value);
    console.log('Test', cc_format(formCardNum.value));
    if (cardNum.textContent == '') {
        cardNum.textContent = '0000 0000 0000 0000';
    };
});


function cc_format(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{1,4}/g);
    return matches.join(' ');
}

// Input Month
inputMonth.addEventListener('input', () => {
    month.textContent = inputMonth.value;
    if (month.textContent == '') {
        month.textContent = '09';
    };
});

// Input Years
inputYears.addEventListener('input', () => {
    years.textContent = inputYears.value;
    if (years.textContent == '') {
        years.textContent = '00';
    };
});

// Input CVC
inputNum.addEventListener('input', () => {
    cvcCode.textContent = inputNum.value;
    if (cvcCode.textContent == '') {
        cvcCode.textContent = '000';
    };
});


btn.addEventListener('click', () => {
    form.style.display = 'none'
    complet.style.display = 'flex';
})

btnS.addEventListener('click', () => {
    complet.style.display = 'none';
    form.style.display = 'flex';
})