//////////////////////////
//  CLICK ON PHONK CARD
//////////////////////////
document.querySelectorAll('.phonk-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('select-btn') && !e.target.closest('.select-btn')) {
            const phonkName = this.getAttribute('data-phonk');
            redirectToPhonk(phonkName);
        }
    });
});


//////////////////////////
//  BUTTON SEARCH
//////////////////////////
document.getElementById('goCustomPhonk').addEventListener('click', function() {
    const customPhonk = document.getElementById('customPhonk').value.trim();

    if (customPhonk) {
        redirectToPhonk(customPhonk);
    } else {
        alert('MyPhonk: please type something to search.');
    }
});


//////////////////////////
//  ENTER KEY SEARCH
//////////////////////////
document.getElementById('customPhonk').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('goCustomPhonk').click();
    }
});


//////////////////////////
//  REDIRECT FUNCTION
//////////////////////////
function redirectToPhonk(phonkName) {

    const targetUrl = `./phonk?${phonkName}`;

    // Show "Loading..." box
    const notice = document.getElementById('redirectNotice');
    const urlElement = document.getElementById('redirectUrl');

    urlElement.textContent = `address : ${targetUrl}`;
    notice.classList.add('show');

    // Simulate redirect
    setTimeout(() => {
        alert(`No phonk with this name: to:\n\n${targetUrl}`);
        notice.classList.remove('show');
    }, 1500);
}


//////////////////////////
//  ANIMATIONS ON LOAD
//////////////////////////
document.addEventListener('DOMContentLoaded', function() {

    // Fade-in cards
    const cards = document.querySelectorAll('.phonk-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Pulse logo glow
    const logoIcon = document.querySelector('.logo-icon');
    setInterval(() => {
        logoIcon.style.textShadow = `0 0 ${10 + Math.random() * 15}px #8a2be2`;
    }, 1000);
});
