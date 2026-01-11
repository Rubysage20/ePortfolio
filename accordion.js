// accordion.js
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('details');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('toggle', function() {
            if (this.open) {
                // Optional: Close other accordions when one opens
                accordions.forEach(other => {
                    if (other !== this && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });
});