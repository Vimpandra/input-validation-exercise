const formValidation = (function() {
    const iptEmail = document.getElementById('email');
    const iptCountry = document.getElementById('country');
    const iptZipCode = document.getElementById('zipCode');
    const iptPassword = document.getElementById('password');
    const iptConfirmPw = document.getElementById('confirmPw');
    const submitBtn = document.getElementById('submitBtn');

    const mainForm = document.getElementById('mainForm');

    const iptErrorEmail = document.getElementById('iptErrorEmail');
    const iptErrorCountry = document.getElementById('iptErrorCountry');
    const iptErrorZipCode = document.getElementById('iptErrorZipCode');
    const iptErrorPassword = document.getElementById('iptErrorPassword');
    const iptErrorConfirmPw = document.getElementById('iptErrorConfirmPw');

    iptEmail.addEventListener('input', () => {
        if (iptEmail.validity.typeMismatch) {
            iptEmail.setCustomValidity('Please enter a valid email addres')
            iptErrorEmail.textContent = iptEmail.validity;
            console.log(iptEmail.validity);
            iptErrorEmail.classList.remove('hidden');
        } else {
            iptEmail.setCustomValidity('');
            iptErrorEmail.textContent = null;
            iptErrorEmail.classList.add('hidden');
        }
    });

    iptCountry.addEventListener('input', () => {
        if (iptCountry.value.length < 3) {
            iptCountry.setCustomValidity('Plase enter a valid country name');
            iptErrorCountry.textContent = 'Plase enter a valid country name';
            iptErrorCountry.classList.remove('hidden');
        } else {
            iptCountry.setCustomValidity('');
            iptErrorCountry.textContent = null;
            iptErrorCountry.classList.add('hidden');
        }
    });

    iptZipCode.addEventListener('input', () => {
        if (iptZipCode.validity.patternMismatch) {
            iptZipCode.setCustomValidity('Please enter a valid brazilian CEP');
            iptErrorZipCode.textContent = 'Please enter a valid brazilian CEP';
            iptErrorZipCode.classList.remove('hidden');
        } else {
            iptZipCode.setCustomValidity('');
            iptErrorZipCode.textContent = null;
            iptErrorZipCode.classList.add('hidden');
        }
    });

    submitBtn.addEventListener('click', (e) => {
        if (iptEmail.validity.valid) {
            window.location = './thanks.html';
        } else {
            e.preventDefault();
        }
    });

}());

const LabelsControl = (function() {    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value !== '') {
                input.classList.add('filled');
            }
        });
        input.addEventListener('focus', () => {
            input.classList.add('filled');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.classList.remove('filled');
            }
        });
    });
}());