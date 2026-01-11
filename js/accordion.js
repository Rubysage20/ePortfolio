document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the parent accordion section
            const accordionSection = this.parentElement;
            
            // Toggle active class
            accordionSection.classList.toggle('active');
            
            // Get the content panel
            const content = accordionSection.querySelector('.accordion-content');
            
            // Toggle display
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});