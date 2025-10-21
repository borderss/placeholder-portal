// Email obfuscation to prevent web scraping
const emailParts = {
    user: 'contact',
    domain: 'example',
    tld: 'com'
};

// Construct email on-the-fly
function getEmail() {
    return emailParts.user + '@' + emailParts.domain + '.' + emailParts.tld;
}

// Email reveal functionality
let emailRevealed = false;
const emailLink = document.getElementById('email-link');
const emailDisplay = document.getElementById('email-display');

emailLink.addEventListener('click', function(e) {
    e.preventDefault();
    emailRevealed = !emailRevealed;
    
    if (emailRevealed) {
        // Show email in the display
        emailDisplay.textContent = getEmail();
        emailDisplay.style.display = 'block';
        
        // Open mailto link
        window.location.href = 'mailto:' + getEmail();
        
        // Update title
        emailLink.setAttribute('title', getEmail());
    } else {
        emailDisplay.style.display = 'none';
        emailLink.setAttribute('title', 'Email (Click to reveal)');
    }
});
