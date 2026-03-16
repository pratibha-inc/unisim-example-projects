import unisim, { Pin, sleep } from 'unisim';

console.log("JS Brain: Starting Pure JavaScript Blink (Pico)...");

// Pin('GP1') corresponds to GP1 on the Pico
const led = new Pin('GP1');

async function blink() {
    console.log("Simulator Ready! Starting blink loop...");
    while (true) {
        console.log("LED ON");
        led.write(1);
        await sleep(1000);
        
        console.log("LED OFF");
        led.write(0);
        await sleep(1000);
    }
}

// Ensure the simulator is fully initialized before starting hardware writes
unisim.on('ready', blink);
