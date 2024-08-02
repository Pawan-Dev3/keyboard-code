document.addEventListener('DOMContentLoaded', () => {
    const keyDisplay = document.getElementById('key');
    const keycodeDisplay = document.getElementById('keycode');
    const historyList = document.getElementById('key-history');

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const keycode = event.keyCode;
        keyDisplay.textContent = key;
        keycodeDisplay.textContent = keycode;
        const historyItem = document.createElement('li');
        historyItem.textContent = `${key} - ${keycode}`;
        historyList.appendChild(historyItem);
        const audio = new Audio('keypress-sound.mp3');
        audio.play();
    });
});
