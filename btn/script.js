document.getElementById('mainButton').addEventListener('click', function() {
    const additionalButtons = document.getElementById('additionalButtons');
    if (additionalButtons.classList.contains('hidden')) {
        additionalButtons.classList.remove('hidden');
        additionalButtons.classList.add('show');
    } else {
        additionalButtons.classList.remove('show');
        additionalButtons.classList.add('hidden');
    }
});
