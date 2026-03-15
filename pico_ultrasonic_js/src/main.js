import unisim, { Pin, sleep } from 'unisim';

// Assuming a specific HCSR04 class exists or manually toggle pins
// In UniSim JS, typically there is an HCSR04 utility
import { HCSR04 } from 'unisim';

const echo = new Pin('GP14');
const trig = new Pin('GP15');
const sensor = new HCSR04(trig, echo);

async function run() {
    console.log("JS Ultrasonic Logic Started");
    while (true) {
        try {
            const dist = await sensor.distance_cm();
            console.log(`Distance: ${dist.toFixed(1)} cm`);
        } catch (e) {
            console.log(`Distance: Out of range (${e.message})`);
        }
        await sleep(1000);
    }
}

unisim.on('ready', run);
