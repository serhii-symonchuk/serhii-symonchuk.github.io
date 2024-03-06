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
                output.innerHTML += `<div>Available commands: help, website, contact</div>`;
                break;
            case 'about':
                output.innerHTML += `
                <div>      
                <div class="home-container">
                <span class="home-text">
                  <span>My name is Serhii Symonchuk</span>
                  <br class="home-text02" />
                  <span>I study and develop in the field of cybersecurity.</span>
                  <br class="home-text04" />
                  <span>I especially like to do Pentesting and&nbsp;</span>
                  <span>developing hacking skills,</span>
                  <br />
                  <span>have three years of experience.</span>
                  <br />
                  <span>I write test tools in Python.</span>
                  <br />
                  <span>The languages I speak: Ukrainian, English.</span>
                  <br />
                </span>
                <img src="me.jpg" alt="image" class="home-image" />
              </div>
              </div>`;
                break;
            case 'website':
                output.innerHTML += `<div>This is a simple portfolio website created using HTML, CSS, and JavaScript. </div>`;
                break;
            case 'contact':
                output.innerHTML += `<div>Contact me: serhiisymonchukca@gmail.com | LinkedIn: Serhii Symonchuk (@symonchuk)| +17053807910 </div>`;
                break;
            default:
                output.innerHTML += `<div>Command not found: ${command}</div>`;
        }
    }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }
});
