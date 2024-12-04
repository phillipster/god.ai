document.addEventListener('click', function(event) {
    if (!event.target.closest('body')) {
        // User clicked outside of the page
        console.log('User clicked off the page.');
    }
});