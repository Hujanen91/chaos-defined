function randomPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = 'Pop-up #'+ Math.floor(Math.random() * 1000) + ' <br> <button onclick="randomPopup()">Close? Nope!</button>';
    document.body.appendChild(popup);
    popup.style.display = 'block';
}

// Randomly change the background color
setInterval(() => {
    const colors = ['#FF5733', '#4CFF33', '#335BFF', '#FF33A5', '#FF5733'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}, 3000);

// Create a new error message every 2 seconds
setInterval(() => {
    console.error('Random error message: Something broke! Please fix it!');
}, 2000);

// Random Image that shakes
setInterval(() => {
    const img = document.createElement('div');
    img.classList.add('broken-img');
    document.body.appendChild(img);
}, 3000);

// Form madness
function generateForm() {
    let form = document.createElement('form');
    form.innerHTML = `
        <label for="hex">Enter your favorite color (Hex): </label>
        <input type="text" id="hex" name="hex" placeholder="#FF5733"><br><br>
        <label for="age">What is your age in Roman Numerals?</label>
        <input type="text" id="age" name="age" placeholder="IV"><br><br>
        <button type="submit">Submit</button>
    `;
    document.body.appendChild(form);
}

// Add random confusing text at the bottom
setInterval(() => {
    const confusingText = document.createElement('div');
    confusingText.classList.add('confusing-text');
    confusingText.innerHTML = 'Why are you even reading this? What does it all mean?';
    document.body.appendChild(confusingText);
}, 7000);

// Start everything at page load
window.onload = () => {
    randomPopup();
    setInterval(generateForm, 10000);
};