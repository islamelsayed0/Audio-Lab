document.addEventListener('DOMContentLoaded', function () {
    // Get buttons by class name
    const dogButton = document.querySelector('.dog');
    const pigButton = document.querySelector('.pig');
    const catButton = document.querySelector('.cat');
    const snakeButton = document.querySelector('.snake');
    const rabbitButton = document.querySelector('.rabbit');

    // Get audio elements by ID
    const dogSound = document.getElementById('dogSound');
    const pigSound = document.getElementById('pigSound');
    const catSound = document.getElementById('catSound');
    const snakeSound = document.getElementById('snakeSound');
    const rabbitSound = document.getElementById('rabbitSound');

    // Add event listeners to buttons
    dogButton.addEventListener('click', () => playSound(dogSound));
    pigButton.addEventListener('click', () => playSound(pigSound));
    catButton.addEventListener('click', () => playSound(catSound));
    snakeButton.addEventListener('click', () => playSound(snakeSound));
    rabbitButton.addEventListener('click', () => playSound(rabbitSound));

    // Function to play sound
    function playSound(sound) {
        if (sound) {
            sound.play().catch(error => {
                console.error('Error playing sound:', error);
                alert('Error playing sound. Check console for more details.');
            });
        }
    }
});
