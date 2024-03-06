document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("terminal").classList.remove("hidden");
        document.getElementById("output").innerHTML = "<div>Welcome to my portfolio! Write 'help' to see commands.</div>";
        document.getElementById("commandInput").classList.remove("hidden");
	document.getElementById("commandInput").focus();
    }, 3000);

    const loadingAnimation = document.getElementById('loadingAnimation');
    const frames = ['-', '\\', '|', '/'];
    let frameIndex = 0;

    setInterval(() => {
        loadingAnimation.textContent = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
    }, 200);

    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');

    commandInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            if (command !== '') {
                appendCommand(command);
                executeCommand(command);
                commandInput.value = '';
                scrollToBottom();
            }
        }
    });

    function appendCommand(command) {
        const formattedCommand = `<div class="command">guest@portfolio:~$ ${command}</div>`;
        output.innerHTML += formattedCommand;
    }

    function executeCommand(command) {
        switch(command) {
            case 'help':
                output.innerHTML += `<div>Available commands: help, about, contact</div>`;
                break;
            case 'about':
                output.innerHTML += `<div>This is a simple terminal interface created using HTML, CSS, and JavaScript.</div>`;
                break;
            case 'contact':
                output.innerHTML += `<div>Contact me: serhiisymonchukca@gmail.com \\ +75073807910 \\ linked.in\y\symonchuk</div>`;
                break;
            default:
                output.innerHTML += `<div>Command not found: ${command}</div>`;
        }
    }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }
});
