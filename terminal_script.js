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
                output.innerHTML += `<div>Available commands: about, website, contact, help</div>`;
                break;
            case 'about':
                output.innerHTML += ` 
                <div>                
                <div class="home-container">
                <span class="home-text">
                  <br/>
                  <span>● My name is Serhii Symonchuk</span>
                  <br/>
                  <span>● I study and develop in the field of cybersecurity.</span>
                  <br/>
                  <span>● I especially like to do Pentesting and&nbsp;</span>
                  <span>developing hacking skills, have three years of experience.</span>
                  <br/>
                  <span>● I write test tools in Python.</span>
                  <br/>
                  <span>● The languages I speak: Ukrainian, English.</span>
                  <br/>
                  <br/>
                </span>
              </div>
              </div>`;
                break;
            case 'website':
                output.innerHTML += `<div>This is a simple portfolio website created using HTML, CSS, and JavaScript. </div>`;
                break;
            case 'contact':
                output.innerHTML += `
                <div>
                <br/>
                <span>
                    <span><b>Contact me:</b> serhiisymonchukca@gmail.com | LinkedIn: Serhii Symonchuk (@symonchuk) | +17053807910 </span>
                <br/>
                    <span><b>Social platforms:</b> Instagram: @bezoodaog | Twitter/X: @bezooda | Facebook: @bezooda</span>
                <br/>
                    <span><b>Indeed portfolio url:</b> https://profile.indeed.com/p/serhiis-mcfv36d </span>
                <br/>                
                <br/>
                </span>
                </div>
                `;
                break;
            default:
                output.innerHTML += `<div>Command not found: ${command}</div>`;
        }
    }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }
});
