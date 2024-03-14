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
                output.innerHTML += `<div><br/><span>Available commands: about, contact, roadmap, website, indeed, testing.</span><br/><br/></div>`;
                break;
            case 'about':
                output.innerHTML += ` 
                <div>                
                <div class="home-container">
                <span class="home-text">
                  <br/>
                  <span>● My name is Serhii Symonchuk</span>
                  <br/>
                  <span>● I study and develop in the field of cybersecurity, have a hacker background and do bug bounty</span>
                  <br/>
                  <span>● I especially like to do pentesting and developing hacking skills, have three years of experience</span>
                  <br/>
                  <span>● I write test tools in Python</span>
                  <br/>
                  <span>● The languages I speak: Ukrainian, English, Russian</span>
                  <br/>
                  <br/>
                </span>
              </div>
              </div>`;
                break;
            case 'website':
                output.innerHTML += `<div><br/><div>This is a simple portfolio website created using HTML, CSS and JavaScript. </div><br/></div>`;
                break;

            case 'contact':
                output.innerHTML += `
                <div>
                <br/>
                <span>
                    <span><b>Contact me:</b> serhiisymonchukca@gmail.com | LinkedIn: Serhii Symonchuk (@symonchuk) | +17053807910 </span>
                <br/>
                    <span><b>Social platforms:</b> Instagram: @bezoodaog | Twitter/X: @bezooda | Facebook: @bezooda </span>            
                <br/><br/>
                </span>
                </div>
                `;
                break;
            case 'roadmap':
                output.innerHTML += `
               <div>
               <br/>
               <span><b>Roadmap:</b> ☐ CompTIA PenTest+ → ☐ CISSP → ☐ CFR-410 → ☐ eCCPT → ☐ CPENT/LPT </span>
               <br/>
               <span><b>Complete:</b> PenTest+ Learning Path by TryHackme, Foundations of Cybersecurity by Google</span>
               <br/>
               <span><b>Reading:</b> PEN-200 by OffSec, Black Hat Python by Justin Setitz and Tim Arnold</span>
               <br/>
               <span><b>Tools-In-Progress:</b> A private tool for automating scanning and checking for vulnerabilities of servers and websites </span>
               <br/>
               <br/>
               </div>
                `;
                break;
            case 'indeed':
                output.innerHTML += `
                <br/>
                <span><b>Indeed portfolio link:</b> https://profile.indeed.com/p/serhiis-mcfv36d </span>
                <br/>
                <br/>
                `;
                break;
            case 'testing':
                output.innerHTML += `
                <div>
                <br/>
                <span><b>subdomains of rockstargames.com</b> - Rockstar Games</span>
                <br/>
                <span><b>muskokabible.com and local servers</b> - Muskoka Bible Centre</span>
                <br/>
                <span><b>cs.vnu.edu.ua, moodle-cs.vnu.edu.ua, tcs.vnu.edu.ua and local servers</b> - Lesya Ukrainka Volyn National University</span>
                <br/>
                <span><b>112.137.129.214</b> - Vietnam National University Ha Noi </span>
                <br/>
                <br/>
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
