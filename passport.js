document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('translateBtn');

    const originalText = {
        fullname1: 'ЗИЗИНА',
        fullname2: 'ЕКАТЕРИНА',
        fullname3: 'РОМАНОВНА',
        genderCity: 'Ж               Г. МОСКВА',
        dob: '30.12.2007'
    };

    const latinText = {
        fullname1: 'ZIZINA',
        fullname2: 'EKATERINA',
        fullname3: 'ROMANOVNA',
        genderCity: 'F               MOSCOW',
        dob: '30.12.2007'
    };

    let isCyrillic = true;

    button.addEventListener('click', function() {
        if (isCyrillic) {
            document.getElementById('fullname-line1').innerText = latinText.fullname1;
            document.getElementById('fullname-line2').innerText = latinText.fullname2;
            document.getElementById('fullname-line3').innerText = latinText.fullname3;
            document.getElementById('gender-city').innerText = latinText.genderCity;
            document.getElementById('dob').innerText = latinText.dob;
        } else {
            document.getElementById('fullname-line1').innerText = originalText.fullname1;
            document.getElementById('fullname-line2').innerText = originalText.fullname2;
            document.getElementById('fullname-line3').innerText = originalText.fullname3;
            document.getElementById('gender-city').innerText = originalText.genderCity;
            document.getElementById('dob').innerText = originalText.dob;
        }
        isCyrillic = !isCyrillic;
    });
});