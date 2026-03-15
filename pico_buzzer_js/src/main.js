import unisim, { Pin, sleep } from 'unisim';

console.log("JS Master Coordinator: Starting Pure JavaScript Buzzer Logic...");

// Pin('GP0') corresponds to GP0 on the Pico where the buzzer is connected
const buzzer = new Pin('GP0');

async function runBuzzer() {
    console.log("Simulator Ready! Starting buzzer loop...");
    while (true) {
        console.log("Buzzer ON");
        buzzer.write(1);
        await sleep(500); // 500ms ON
        
        console.log("Buzzer OFF");
        buzzer.write(0);
        await sleep(1500); // 1.5s OFF
    }
}

// Start when the simulation is ready
unisim.on('ready', runBuzzer);
