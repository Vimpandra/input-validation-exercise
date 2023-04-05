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

    mainForm.addEventListener('click', (e) => {
        if (!mainForm.reportValidity()) {
            e.preventDefault();
        }
    });

    iptEmail.addEventListener('input', () => {
        if (iptEmail.validity.typeMismatch) {
            iptEmail.setCustomValidity('Please enter a valid email addres')
            iptErrorEmail.textContent = 'Please enter a valid email addres';
            iptErrorEmail.classList.remove('hidden');
        } else {
            iptEmail.setCustomValidity('');
            iptErrorEmail.textContent = null;
            iptErrorEmail.classList.add('hidden');
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