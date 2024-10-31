document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${name}!`;
    document.getElementById('greetingMessage').textContent = greetingMessage;
});

// document.getElementById('nameInput').addEventListener('input', function(event) {
//     const name = event.target.value;
//     const greetingMessage = `Hello, ${name}!`;
//     document.getElementById('greetingMessage').textContent = greetingMessage;
// });


function UpdateValue(event) {
    const name = event.target.value;
    const greetingMessage = `Hello, ${name}!`;
    document.getElementById('greetingMessage').textContent = greetingMessage;
}