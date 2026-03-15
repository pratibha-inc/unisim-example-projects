import unisim, { Pin, sleep } from 'unisim';

const btn = new Pin('GP0');
const led = new Pin('GP1');

async function run() {
    console.log("JS Button Logic Started");
    while (true) {
        if (btn.read() === 0) { // Pressed (low)
            led.write(1);
        } else {
            led.write(0);
        }
        await sleep(50);
    }
}

unisim.on('ready', run);
