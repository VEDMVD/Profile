document.addEventListener('DOMContentLoaded', () => {
    // Basic sticky header styling change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.padding = '15px 5%';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '20px 5%';
        }
    });

    // Profile image error handling to ensure image loads
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.onerror = function() {
            // Fallback to the other profile image if the first one fails
            if(this.src.includes('profile1.png')) {
                this.src = 'images/profile2.png';
            }
        };
    }
});
